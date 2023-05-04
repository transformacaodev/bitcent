import ForcarAutenticacao from "../autenticacao/ForcarAutenticacao"

interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    function renderizar() {
        return (
            <div className={`
                flex flex-col min-h-screen
                bg-gradient-to-r from-zinc-900 via-black to-zinc-900
                ${props.className ?? ''}
            `}>
                {props.children}
            </div>
        )
    }

    return props.externa ? renderizar() : (
        <ForcarAutenticacao>
            {renderizar()}
        </ForcarAutenticacao>
    )
}