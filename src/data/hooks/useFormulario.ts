import { useCallback, useState } from "react"

export default function useFormulario<T = any>(dadosIniciais?: T) {
    const [dados, setDados] = useState<T>(dadosIniciais ?? {} as T)

    const alterarDados = useCallback(function (dados: T) {
        setDados(dados)
    }, [])

    const alterarAtributo = useCallback(function (atributo: string, fn?: Function) {
        return (valorOuEvento: any) => {
            const v = valorOuEvento?.target?.value ?? valorOuEvento
            setDados({ ...dados, [atributo]: fn?.(v) ?? v })
        }
    }, [dados])

    return {
        dados,
        alterarDados,
        alterarAtributo
    }
}