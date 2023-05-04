import Data from "@/logic/utils/Data";
import { Button, NumberInput, Popover } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";


export interface CampoMesAnoProps {
    data?: Date
    dataMudou?: (data: Date) => void
}

export default function CampoMesAno(props: CampoMesAnoProps) {
    const hoje = new Date()

    const [data, setData] = useState<Date>(new Date(
        props.data?.getFullYear() ?? hoje.getFullYear(),
        props.data?.getMonth() ?? hoje.getMonth(),
        1
    ))

    function alterarAno(ano: number) {
        if (!ano) return
        const novaData = new Date(data)
        novaData.setFullYear(ano)
        setData(novaData)
        props.dataMudou?.(novaData)
    }

    function alterarMes(mes: number) {
        const novaData = new Date(data)
        novaData.setMonth(mes)
        setData(novaData)
        props.dataMudou?.(novaData)
    }

    function incrementar() {
        const novaData = new Date(data)
        novaData.setMonth(novaData.getMonth() + 1)
        setData(novaData)
        props.dataMudou?.(novaData)
    }

    function decrementar() {
        const novaData = new Date(data)
        novaData.setMonth(novaData.getMonth() - 1)
        setData(novaData)
        props.dataMudou?.(novaData)
    }

    return (
        <div className="flex items-center gap-2">
            <Button className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `} color="red" onClick={decrementar}>
                <IconChevronLeft size={14} />
            </Button>
            <Popover withArrow>
                <Popover.Target>
                    <Button className={`
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white cursor-pointer select-none 
                        w-full sm:w-44 px-3
                    `}>{Data.mmyy.formatar(data)}</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <div className="flex justify-center mb-5">
                        <NumberInput
                            value={data.getFullYear()}
                            onChange={alterarAno}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {Data.meses().map((mes, i) => {
                            const selecionada = data.getMonth() === i
                            return (
                                <Button
                                    key={i}
                                    color={selecionada ? 'red' : 'blue'}
                                    className={`${selecionada ? 'bg-red-500' : 'bg-blue-500'}`}
                                    onClick={() => alterarMes(i)}
                                >{mes}</Button>
                            )
                        })}
                    </div>
                </Popover.Dropdown>
            </Popover>
            <Button className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `} color="red" onClick={incrementar}>
                <IconChevronRight size={14} />
            </Button>
        </div>
    )
}