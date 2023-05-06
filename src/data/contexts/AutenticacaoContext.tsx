import servicos from "@/logic/core"
import Usuario from "@/logic/core/usuario/Usuario"
import { createContext, useEffect, useState } from "react"

interface AutenticacaoProps {
    carregando: boolean
    usuario: Usuario | null
    loginGoogle: () => Promise<Usuario | null>
    logout: () => Promise<void>
    atualizarUsuario: (novoUsuario: Usuario) => Promise<void>
}

const AutenticacaoContext = createContext<AutenticacaoProps>({
    carregando: true,
    usuario: null,
    loginGoogle: async () => null,
    logout: async () => {},
    atualizarUsuario: async () => {}
})

export function AutenticacaoProvider(props: any) {
    const [carregando, setCarregando] = useState<boolean>(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    useEffect(() => {
        const cancelar = servicos.usuario.monitorarAutenticacao((usuario) => {
            setUsuario(usuario)
            setCarregando(false)
        })
        return () => cancelar()
    }, [])

    async function atualizarUsuario(novoUsuario: Usuario) {
        if (usuario && usuario.email !== novoUsuario.email) return logout()
        if (usuario && novoUsuario && usuario.email === novoUsuario.email) {
            await servicos.usuario.salvar(novoUsuario)
            setUsuario(novoUsuario)
        }
    }

    async function loginGoogle() {
        const usuario = await servicos.usuario.loginGoogle()
        setUsuario(usuario)
        return usuario
    }

    async function logout() {
        await servicos.usuario.logout()
        setUsuario(null)
    }

    return (
        <AutenticacaoContext.Provider value={{
            carregando,
            usuario,
            loginGoogle,
            logout,
            atualizarUsuario
        }}>
            {props.children}
        </AutenticacaoContext.Provider>
    )
}

export default AutenticacaoContext