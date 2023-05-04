import { useContext } from 'react'
import { useRouter } from 'next/router'
import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import Carregando from '../template/Carregando'

interface ForcarAutenticacaoProps {
    children: any
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps) {
    const router = useRouter()
    const { usuario, carregando } = useContext(AutenticacaoContext)

    if (carregando) {
        return <Carregando />
    } else if (usuario?.email) {
        return props.children
    } else {
        router.push('/')
        return <Carregando />
    }
}