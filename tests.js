//  Unit tests for the helloWorld function

// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });


//unit test for the sayHello function

// describe('sayHello', function (){
//     it('should be a defined function', function (){
//         expect(typeof sayHello()).toBe("string")
//     });
//     it('should return "Hello, Jane!', function () {
//         expect(sayHello('Jane')).toBe("Hello, Jane!");
//     });
//     it('should return "hello, Alex!', function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
//     it('should return "Hello, Pat!', function () {
//         expect(sayHello('Pat')).toBe('Hello, Pat!');
//     });
//     it('should return "Hello, World!"', function () {
//         expect(sayHello(true)).toBe("Hello, World!")
//     });
//     it('should return "Hello, World!', function () {
//         expect(sayHello(false)).toBe("Hello, World!");
//     });
//     it('should return "Hello, World!', function () {
//         expect(sayHello(null)).toBe("Hello, World!");
//     });
//     it('should return "Hello, World!', function () {
//         expect(sayHello("")).toBe("Hello, World!");
//     });
// });


//unit test for isFive function

// describe('isFive', function (){
//     it('should be a defined function', function () {
//         expect(typeof isFive).toBe('function');
//     });
//     it('should return false w/ "number', function () {
//         expect(isFive('number')).toBe(false);
//     });
//     it('should return false w/ null', function () {
//         expect(isFive(null)).toBe(false);
//     });
//     it('should return false w/ true', function () {
//         expect(isFive(true)).toBe(false);
//     });
//     it('should return "5 is 5"', function () {
//         expect(isFive(5)).toBe("5 is 5");
//     });
//     it('should return "1 is 5"', function () {
//         expect(isFive(1)).toBe("1 isn't 5");
//     });
// })


//unit test for isEven Function
// describe('isEven', function (){
//     it('should be a defined function', function () {
//         expect(typeof isEven).toBe('function');
//     });
//     it('should return true when executed with isEven(2)', function () {
//         expect(isEven(2)).toBe(true);
//     });
//     it('should return true when executed with isEven(-4)', function () {
//         expect(isEven(-4)).toBe(true);
//     });
//     it('should return false when executed with isEven(3)', function () {
//         expect(isEven(3)).toBe(false);
//     });
//     it('should return false when executed with isEven(bananas)', function () {
//         expect(isEven('bananas')).toBe(false);
//     });
//     it('should return true when executed with isEven("8")', function () {
//         expect(isEven("8")).toBe(true);
//     });
//     it('should return false when executed with isEven(infinity)', function () {
//         expect(isEven(Infinity)).toBe(false);
//     });
//     it('should return false when executed with isEven(false)', function () {
//         expect(isEven(false)).toBe(false);
//     });
//     it('should return false when executed with isEven(true)', function () {
//         expect(isEven(true)).toBe(false);
//     });
//     it('should return false when executed with isEven()', function () {
//         expect(isEven()).toBe(false);
//     });
// })



//unit test for isVowel function

describe('isVowel', function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should return false if isVowel()', function () {
        expect(isVowel()).toBe(false)
    });
    it('should return true if isVowel("a")', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true if isVowel("A")', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false if isVowel("y")', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false if isVowel(4)', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false if isVowel(true)', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false if isVowel("banana")', function () {
        expect(isVowel("banana")).toBe(false)
    });
})
