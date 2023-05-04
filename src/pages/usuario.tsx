import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/TituloPagina";
import { IconForms } from "@tabler/icons-react";
import usuario from "@/data/constants/usuarioFalso";
import Formularios from "@/components/usuario/Formularios";

export default function CadastroUsuario() {

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <TituloPagina
                    icone={<IconForms />}
                    principal="Dados Cadastrais"
                    secundario={`Informações de ${usuario.email}`}
                />
                <Formularios />
            </Conteudo>
        </Pagina>
    )
}
