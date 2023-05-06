import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import { IconArrowRight, IconVideo } from '@tabler/icons-react'
import { useContext } from 'react'

export default function Slogan() {
    const { loginGoogle } = useContext(AutenticacaoContext)

    function renderizarFrase() {
        return (
            <div
                className={`
                    flex flex-col items-center md:items-start text-4xl lg:text-6xl
                    text-white font-light
                `}
            >
                <div className="flex gap-2.5">
                    <div className={`relative`}>
                        <span
                            className={`
                            absolute bottom-1 left-0 w-full
                            border-b-8 border-purple-500
                            -rotate-2
                        `}
                        ></span>
                        <span className="relative">Melhor</span>
                    </div>
                    <div>maneira</div>
                </div>
                <div className="flex gap-2.5">
                    <span>de</span>
                    <span>organizar</span>
                </div>
                <div className="flex gap-2.5">
                    <span>seu</span>
                    <span
                        className={`
                        flex items-center p-1
                        relative text-black
                    `}
                    >
                        <span className="absolute -rotate-1 top-0.5 left-0 w-full h-5/6 bg-yellow-300 rounded-sm" />
                        <span className="relative rotate-2 z-20">dinheiro</span>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-5">
            {renderizarFrase()}
            <div className="text-sm lg:text-lg font-thin text-zinc-500 text-center sm:text-left">
                Plataforma financeira que simplifica sua vida!
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-2">
                <div
                    className={`
                        flex items-center gap-2 cursor-pointer
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white px-5 py-2.5 rounded-md
                    `}
                    onClick={loginGoogle}
                >
                    <span className="font-thin md:text-sm text-base">
                        Iniciar <span className="hidden sm:inline">Agora</span>
                    </span>
                    <IconArrowRight className="hidden lg:inline" stroke={1} />
                </div>
                <div
                    className={`
                    flex items-center gap-2 cursor-pointer
                    text-zinc-300 px-5 py-2.5
                `}
                >
                    <IconVideo stroke={1} />
                    <span className="font-thin md:text-sm text-base">
                        <span className="hidden sm:inline">Assista o</span> Vídeo
                    </span>
                </div>
            </div>
        </div>
    )
}
