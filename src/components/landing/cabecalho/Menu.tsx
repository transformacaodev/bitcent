import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useContext } from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
    const { loginGoogle } = useContext(AutenticacaoContext)

    return (
        <div className="flex gap-2">
            <MenuItem url="#inicio" className="hidden sm:flex">
                Início
            </MenuItem>
            <MenuItem url="#vantagens" className="hidden sm:flex">
                Vantagens
            </MenuItem>
            <MenuItem url="#depoimentos" className="hidden sm:flex">
                Depoimentos
            </MenuItem>
            <MenuItem
                onClick={loginGoogle}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600"
            >
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}
