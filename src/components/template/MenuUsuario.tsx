import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";

export default function MenuUsuario() {

    const { usuario, logout } = useContext(AutenticacaoContext)

    return (
        <Menu>
            <Menu.Target>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='hidden md:flex flex-col select-none'>
                        <span className='text-sm font-bold text-zinc-200'>{usuario?.nome}</span>
                        <span className='text-xs text-zinc-400'>{usuario?.email}</span>
                    </div>
                    <Avatar
                        size={40}
                        radius="xl"
                        src={usuario?.imagemUrl ?? 'https://source.unsplash.com/random/100x100/?abstract'}
                    />
                </div>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Usuário</Menu.Label>
                <Link href="/">
                    <Menu.Item
                        icon={<IconArrowsRightLeft size={14} />}
                    >Finanças</Menu.Item>
                </Link>
                <Link href="/usuario">
                    <Menu.Item
                        icon={<IconUser size={14} />}
                    >Meus Dados</Menu.Item>
                </Link>
                <Menu.Divider />
                <Menu.Item
                    color="red"
                    icon={<IconLogout size={14} />}
                    onClick={logout}
                >Sair do Sistema</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}