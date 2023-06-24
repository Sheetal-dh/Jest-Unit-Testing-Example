const fizz_buzz = require('./index');

//Test Suit -Addition (describe)
//Test Method -Multiple Test Methods (test)

describe("FizzBuzz", ()=>{
    test('If divisible by 3 then print FIZZ', ()=>{
        expect(fizz_buzz([3])).toBe('fizz');
    });
    test('If divisible by 5 then print BUZZ', ()=>{
        expect(fizz_buzz([5])).toBe('buzz');
    });
    test('If divisible by 3 AND 5 then print FIZZBUZZ', ()=>{
        expect(fizz_buzz([15])).toBe('fizzbuzz');
    });
})