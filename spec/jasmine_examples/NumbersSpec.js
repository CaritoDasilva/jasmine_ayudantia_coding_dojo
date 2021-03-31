describe("Numbers", () => {
    const numbers = require('../../lib/jasmine_examples/Numbers')

    it('La función deberá retornar la suma de dos números', () => {
        let result = numbers.suma(1, 3);
        expect(result).toBe(4)
    })

    it("Dado un array y un valor encontrar el mayor", () => {
        let result2 = numbers.returnArrayCountGreaterThanY([2, 5, 3, 8], 6);
        expect(result2).toBe(1);
    })
})