import Colecao from "@/logic/firebase/db/Colecao";
import Data from "@/logic/utils/Data";
import Usuario from "../usuario/Usuario";
import Transacao from "./Transacao";

export default class ServicosTransacao {
    private _colecao = new Colecao()

    async salvar(transacao: Transacao, usuario: Usuario) {
        return this._colecao.salvar(
            `financas/${usuario.email}/transacoes`,
            transacao
        )
    }

    async excluir(transacao: Transacao, usuario: Usuario) {
        return this._colecao.excluir(
            `financas/${usuario.email}/transacoes`,
            transacao.id
        )
    }

    async consultar(usuario: Usuario) {
        const caminho = `financas/${usuario.email}/transacoes`
        return await this._colecao.consultar(caminho, 'data', 'asc')
    }

    async consultarPorMes(usuario: Usuario, data: Date) {
        const caminho = `financas/${usuario.email}/transacoes`
        return await this._colecao.consultarComFiltros(caminho, [
            { atributo: 'data', op: ">=", valor: Data.primeiroDia(data) },
            { atributo: 'data', op: "<=", valor: Data.ultimoDia(data) },
        ])
    }
}