const bonus = require('./index');

describe('teste a função Bonus', () => {
  test('verifica se o bonus de 15% é adicioanado', () => {
    //decalro  o valor do salario
    const salario = 10000;
    //chamar a função e adicionar  valor salario
    const salarioCombonus = bonus(salario)
    //teste a função Bonus
    expect(salarioCombonus).toBe(11500)
  });
});