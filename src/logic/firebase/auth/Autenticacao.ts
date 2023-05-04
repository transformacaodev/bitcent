import Usuario from "@/logic/core/usuario/Usuario";

import {
    Auth, getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut, User
} from  "firebase/auth"
import { app } from "../config/app";

export type MonitorarUsuario = (usuario: Usuario | null) => void
export type CancelarMonitoramento = () => void

export default class Autenticacao {
    private _auth: Auth

    constructor() {
        this._auth = getAuth(app)
    }

    async loginGoogle(): Promise<Usuario | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())
        return this.converterParaUsuario(resp.user)
    }

    logout(): Promise<void> {
        return signOut(this._auth)
    }

    monitorar(notificar: MonitorarUsuario): CancelarMonitoramento {
        return onIdTokenChanged(this._auth, async (usuarioFirebase) => {
            const usuario = this.converterParaUsuario(usuarioFirebase)
            notificar(usuario)
        })
    }

    private converterParaUsuario(usuarioFirebase: User | null): Usuario | null {
        if(!usuarioFirebase?.email) return null
        const nomeAlternativo = usuarioFirebase.email!.split('@')[0]
        
        return {
            id: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName ?? nomeAlternativo,
            email: usuarioFirebase.email,
            imagemUrl: usuarioFirebase.photoURL
        }
    }
}