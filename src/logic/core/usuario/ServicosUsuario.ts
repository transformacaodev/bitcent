import Autenticacao, { CancelarMonitoramento, MonitorarUsuario } from "@/logic/firebase/auth/Autenticacao"
import Colecao from "@/logic/firebase/db/Colecao"
import Usuario from "./Usuario"

export default class ServicosUsuario {
    private _autenticacao = new Autenticacao()
    private _colecao = new Colecao()

    monitorarAutenticacao(observador: MonitorarUsuario): CancelarMonitoramento {
        return this._autenticacao.monitorar(async usuario => {
            observador(usuario ? {
                ...usuario,
                ...await this.consultar(usuario.email)
            } : null)
        })
    }

    async loginGoogle(): Promise<Usuario | null> {
        const usuario = await this._autenticacao.loginGoogle()
        if (!usuario) return null

        let usuarioDoBanco = await this.consultar(usuario.email)
        if (!usuarioDoBanco) usuarioDoBanco = await this.salvar(usuario)

        return { ...usuario, ...usuarioDoBanco }
    }

    logout(): Promise<void> {
        return this._autenticacao.logout()
    }

    async salvar(usuario: Usuario) {
        return await this._colecao.salvar(
            'usuarios', usuario, usuario.email
        )
    }

    async consultar(email: string) {
        return await this._colecao.consultarPorId(
            'usuarios', email
        )
    }
}