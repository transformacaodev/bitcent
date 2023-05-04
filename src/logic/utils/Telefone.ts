export default class Telefone {
    private static _padrao = '(??) ?????-????'

    static formatar(valor: string): string {
        const nums = Telefone.desformatar(valor).split('')
        return nums.reduce((formatado: string, num: string) => {
            return formatado.replace('?', num)
        }, Telefone._padrao).split('?')[0].trim().replace(/[()-]$/, '')
    }

    static desformatar(valor: string): string {
        return valor.replace(/[^0-9]+/g, '')
    }
}