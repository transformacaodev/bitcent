import Id from "@/logic/core/comum/Id";
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao";
import Transacao from "@/logic/core/financas/Transacao";

const transacoesFalsas: Transacao[] = [
    {
        id: Id.novo(),
        descricao: 'Salário',
        data: new Date(2023, 4, 1),
        valor: 7123.34,
        tipo: TipoTransacao.RECEITA,
    },
    {
        id: Id.novo(),
        descricao: 'Conta de Luz',
        valor: 320.00,
        data: new Date(2023, 4, 3),
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Aluguel + Cond.',
        valor: 1817.59,
        data: new Date(2023, 4, 3),
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Cartão de Crédito',
        valor: 2200.00,
        data: new Date(2023, 4, 10),
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Conta de Água',
        valor: 174.35,
        data: new Date(2023, 4, 8),
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Mensalidade MBA',
        valor: 750.00,
        data: new Date(2023, 4, 2),
        tipo: TipoTransacao.DESPESA,
    },
    
    {
        id: Id.novo(),
        descricao: 'Investimentos',
        data: new Date(2023, 4, 1),
        valor: 2123.34,
        tipo: TipoTransacao.RECEITA,
    },
]

export default transacoesFalsas