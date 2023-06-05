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

describe('isFive', function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return false w/ "number', function () {
        expect(isFive('number')).toBe(false);
    });
    it('should return false w/ null', function () {
        expect(isFive(null)).toBe(false);
    });
    it('should return false w/ true', function () {
        expect(isFive(true)).toBe(false);
    });
    it('should return "5 is 5"', function () {
        expect(isFive(5)).toBe("5 is 5");
    });
    it('should return "1 is 5"', function () {
        expect(isFive(1)).toBe("1 isn't 5");
    });
})
