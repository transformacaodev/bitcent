import Dinheiro from "@/logic/utils/Dinheiro"
import React from "react"


export interface SumarioItemProps {
    titulo: string
    valor: number
    icone: any
    valorClassName?: string
    iconeClassName?: string
}

export default function SumarioItem(props: SumarioItemProps) {
    return (
        <div className={`
            relative flex flex-col bg-black
            pt-4 pb-3 px-5 rounded-lg
            border border-zinc-800 text-white
        `}>
            <div className="text-sm text-zinc-500">{props.titulo}</div>
            <div className="flex justify-between items-center">
                <span className={`text-3xl font-black ${props.valorClassName ?? ''}`}>
                    {Dinheiro.formatar(props.valor)}
                </span>
                <span>
                    {React.cloneElement(props.icone, {
                        size: 60,
                        strokeWidth: 1,
                        className: `${props.iconeClassName ?? ''}`,
                    })}
                </span>
            </div>
        </div>
    )
}