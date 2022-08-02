const {Calculatrice} = require('./calculatrice.js');

let calc = new Calculatrice()

test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
});

test('1 - 2 to equal -1', () => {
    expect(calc.sub(1, 2)).toBe(-1);
});

test('adds 3 * 2 to equal 6', () => {
    expect(calc.mul(3, 2)).toBe(6);
});

test('adds 6 / 2 to equal 3', () => {
    expect(calc.div(6, 2)).toBe(3);
});