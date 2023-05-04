// https://unicode-table.com/en/1F44B/

import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"
import { useContext } from "react"

export default function BoasVindas() {

    const { usuario } = useContext(AutenticacaoContext)

    function renderizarNome() {
        return (
            <span className="hidden sm:inline">
                {usuario?.nome?.split(' ')[0]}
            </span>
        )
    }

    return (
        <div className={`text-3xl font-black`}>
            Olá {renderizarNome()} 👋
        </div>
    )
}
