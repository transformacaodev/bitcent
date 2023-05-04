import Area from "../comum/Area";
import vantagem1 from "../../../../public/vantagem-1.jpg"
import vantagem2 from "../../../../public/vantagem-2.jpg"
import vantagem3 from "../../../../public/vantagem-3.jpg"
import Vantagem from "./Vantagem";

export default function Vantagens() {
    return (
        <Area id="vantagens" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={vantagem1}
                    titulo="Gerenciador financeiro completo e simples de usar"
                    subtitulo="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
                />

                <Vantagem
                    imagem={vantagem2}
                    titulo="Organizado para você nunca mais esquecer uma conta"
                    subtitulo="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
                    inverter
                />
                <Vantagem
                    imagem={vantagem3}
                    titulo="Ideal para planejamento financeiro"
                    subtitulo="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
                />
            </div>
        </Area>
    )
}