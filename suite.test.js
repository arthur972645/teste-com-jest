function concatenaString(str1, str2){
    return str1 + str2;
}

describe("Exercicos de teste", () => {
    test('verifica se  um numero é igual ao outro', () => {
        expect(1).toBe(1);
    })
    test('verificar se um valor é estitamente igual', () => {
        expect('1').not.toBe(1);
    }),
    test('Verificar concatenação de string', ()=>{
        expect(concatenaString("Olá", " mundo")).toBe('Olá mundo')
    })
})