import Area from "../comum/Area";
import Depoimento from "./Depoimento";

export default function Depoimentos() {
    return (
        <Area id="depoimentos" className={`
            bg-gradient-to-r from-black via-zinc-900 to-black
            py-10 sm:py-20
        `}>
            <div className={`flex flex-col justify-center items-center`}>
                <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
                    As pessoas estão dizendo...
                </h2>
                <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
                        nome="Gabriel Junior"
                        titulo="Desenvolvedor de Software"
                        texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                    />
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        nome="Juliana Moraes"
                        titulo="Diretora Comercial"
                        texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                        destaque
                    />
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80"
                        nome="Rafaela Vieira"
                        titulo="Servidora Pública"
                        texto="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                    />
                </div>
            </div>
        </Area>
    )
}