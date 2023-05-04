export default class Cpf {
    private static _padrao = '???.???.???-??'
    
    static formatar(valor: string): string {
        const nums = Cpf.desformatar(valor).split('')
        return nums.reduce((formatado: string, num: string) => {
            return formatado.replace('?', num)
        }, Cpf._padrao).split('?')[0].replace(/[-.]$/, '')
    }

    static desformatar(valor: string): string {
        return valor.replace(/[^0-9]+/g, '')
    }
}