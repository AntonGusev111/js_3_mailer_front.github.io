import  checkInputCoord  from '../check';

test('coord val test', ()=> {
    const result = checkInputCoord('51.50851,−0.12572');
    expect(result).toBe(true);
})