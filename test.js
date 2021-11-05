const calcHelpers = require('./calcHelpers'); 

describe('calculator helpers', () => {
    test('testing test', () => {
        expect(2+5).toEqual(7);
    })
}); 

describe('multiply by 3', () => {
    let multiplyBy3 = calcHelpers.multiplyBy3;
    test('it exists', () => {
        expect(multiplyBy3).toBeDefined();
    })

    test('it takes an argument and returns it times3', () => {
        expect(multiplyBy3(5)).toEqual(15);
    })
});

describe('add these test', () => {
    let addThese = calcHelpers.addThese;
    test('it exists', () => {
        expect(addThese).toBeDefined();
    })

    test('it takes two arguments and add them', () => {
        expect(addThese(3,5)).toEqual(8);

    })

});

describe('fizzbuzz test', () => {
    let fizzbuzz = calcHelpers.fizzbuzz;
    test('it divides by 3 and 5', () => {
        expect(fizzbuzz(15)).toBeDefined();
    })
});

