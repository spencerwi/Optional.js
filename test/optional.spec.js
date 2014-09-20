// optional.js
// ===========
if (typeof window === "undefined"){
    // detect node and require() at will
    Optional = require("./optional.js");
}
describe("Optional", function(){
    describe(".of(value)", function(){
        it("creates a new Optional when given a non-empty value", function(){
            var sut = Optional.of(5);

            expect(sut instanceof Optional).toBe(true);
            expect(sut.get()).toBe(5);
        });
        it("throws an error when given an empty value", function(){
            var attemptToCreateOptionalOfNull = function(){ return Optional.of(null); }
            var attemptToCreateOptionalOfUndefined = function(){ return Optional.of(undefined); }

            expect(attemptToCreateOptionalOfNull).toThrow();
            expect(attemptToCreateOptionalOfUndefined).toThrow();
        });
    });
    describe(".ofNullable(value|null|undefined)", function(){
        it("creates a new Optional when given a non-empty value", function(){
            var sut = Optional.ofNullable(5);

            expect(sut instanceof Optional).toBe(true);
            expect(sut.get()).toBe(5);
        });
        it("creates an empty Optional when given an empty value", function(){
            var sut = Optional.ofNullable(null);

            expect(sut instanceof Optional).toBe(true);
            expect(sut.isPresent()).toBe(false);

            sut = Optional.ofNullable(undefined);

            expect(sut instanceof Optional).toBe(true);
            expect(sut.isPresent()).toBe(false);
        });
    });
    describe(".empty()", function(){
        it("returns an empty Optional", function(){
            var sut = Optional.empty();

            expect(sut instanceof Optional).toBe(true);
            expect(sut.isPresent()).toBe(false);
        });
    });
    describe("#get()", function(){
        it("returns the wrapped value of a \"filled\" Optional", function(){
            var sut = Optional.of(5);

            expect(sut.get()).toBe(5);
        });
        it("throws an error when called on an empty Optional", function(){
            var sut = Optional.empty();

            expect(sut.get).toThrow();
        });
    });
    describe("#orElse(otherValue)", function(){
        it("returns the wrapped value of a \"filled\" Optional", function(){
            var sut = Optional.of(5);

            expect(sut.orElse(10)).toBe(5);
        });
        it("returns the other value when called on an empty Optional", function(){
            var sut = Optional.empty();

            expect(sut.orElse(10)).toBe(10);
        });
    });
    describe("#isPresent()", function(){
        it("returns true if the Optional is a real value", function(){
            var sut = Optional.of(5);

            expect(sut.isPresent()).toBe(true);
        });
        it("returns false if the Optional is empty", function(){
            var sut = Optional.empty();

            expect(sut.isPresent()).toBe(false);
        });
    });
    describe("#ifPresent(f)", function(){
        var someFunction;
        beforeEach(function(){ someFunction = jasmine.createSpy('someFunction'); })
        it("passes an Optional's value into f if the Optional has a value", function(){
            var sut = Optional.of(5);

            sut.ifPresent(someFunction);

            expect(someFunction).toHaveBeenCalledWith(5);
        });
        it("does not execute f if the Optional is empty.", function(){
            var sut = Optional.empty();

            sut.ifPresent(someFunction);

            expect(someFunction).not.toHaveBeenCalled();
        });
    });
    describe("#map(f -> x)", function(){
        it("applies f to an Optional's value and returns a new Optional containing the result.", function(){
            var sut = Optional.of(5);

            var resultOptional = sut.map(function(x){ return x * 2; });

            expect(resultOptional instanceof Optional).toBe(true);
            expect(resultOptional.get()).toBe(10);
        });
        it("returns a new empty Optional when called on an empty Optional", function(){
            var sut = Optional.empty();

            var resultOptional = sut.map(function(x){ return x * 2; });

            expect(resultOptional instanceof Optional).toBe(true);
            expect(resultOptional.isPresent()).toBe(false);
        });
    });
    describe("#flatMap(f -> Optional)", function(){
        var someMethodThatReturnsAnOptional;
        beforeEach(function(){
            someMethodThatReturnsAnOptional = function(x){ return Optional.of(x*2); };
        });
        it("applies f to an Optional's value, then returns the already-Optional-wrapped result", function(){
            var sut = Optional.of(5);

            var resultOptional = sut.flatMap(someMethodThatReturnsAnOptional);

            expect(resultOptional instanceof Optional).toBe(true);
            expect(resultOptional.get()).toBe(10);
        });
        it("returns a new empty Optional when called on an empty Optional", function(){
            var sut = Optional.empty();

            var resultOptional = sut.flatMap(someMethodThatReturnsAnOptional);

            expect(resultOptional instanceof Optional).toBe(true);
            expect(resultOptional.isPresent()).toBe(false);
        });
    });
});