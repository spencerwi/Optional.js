var expect = chai.expect;

describe("Optional", function(){
	var sut;
	describe(".of(value)", function(){
		it("creates a new Optional when given a non-empty value", function(){
			sut = Optional.of(5);

			expect(sut).to.be.instanceof(Optional);
			expect(sut.get()).to.equal(5);
		});
		it("throws an error when given an empty value", function(){
			var attemptToCreateOptionalOfNull = function(){ return Optional.of(null); }
			var attemptToCreateOptionalOfUndefined = function(){ return Optional.of(undefined); }

			expect(attemptToCreateOptionalOfNull).to.throw();
			expect(attemptToCreateOptionalOfUndefined).to.throw();
		});
	});
	describe(".ofNullable(value|null|undefined)", function(){
		it("creates a new Optional when given a non-empty value", function(){
			sut = Optional.ofNullable(5);

			expect(sut).to.be.instanceof(Optional);
			expect(sut.get()).to.equal(5);
		});
		it("creates an empty Optional when given an empty value", function(){
			sut = Optional.ofNullable(null);

			expect(sut).to.be.instanceof(Optional);
			expect(sut.isPresent()).to.be.false;

			sut = Optional.ofNullable(undefined);

			expect(sut).to.be.instanceof(Optional);
			expect(sut.isPresent()).to.be.false;
		});
	});
	describe(".empty()", function(){
		it("returns an empty Optional", function(){
			sut = Optional.empty();

			expect(sut).to.be.instanceof(Optional);
			expect(sut.isPresent()).to.be.false;
		});
	});
	describe("#get()", function(){
		it("returns the wrapped value of a \"filled\" Optional", function(){
			sut = Optional.of(5);

			expect(sut.get()).to.equal(5);
		});
		it("throws an error when called on an empty Optional", function(){
			sut = Optional.empty();

			expect(sut.get).to.throw();
		});
	});
	describe("#orElse(otherValue)", function(){
		it("returns the wrapped value of a \"filled\" Optional", function(){
			sut = Optional.of(5);

			expect(sut.orElse(10)).to.equal(5);
		});
		it("returns the other value when called on an empty Optional", function(){
			sut = Optional.empty();

			expect(sut.orElse(10)).to.equal(10);
		});
	});
	describe("#orElseGet(otherValueSupplier)", function(){
		it("returns the wrapped value of a \"filled\" Optional", function(){
			sut = Optional.of(5);
			var returnTen = function(){return 10;};

			expect(sut.orElseGet(returnTen)).to.equal(5);
		});
		it("invokes the given function and returns its return value when called on an empty Optional", function(){
			sut = Optional.empty();
			var returnFive = function(){return 5;};

			expect(sut.orElseGet(returnFive)).to.equal(5);
		});
	});
	describe("#isPresent()", function(){
		it("returns true if the Optional is a real value", function(){
			sut = Optional.of(5);

			expect(sut.isPresent()).to.be.true;
		});
		it("returns false if the Optional is empty", function(){
			sut = Optional.empty();

			expect(sut.isPresent()).to.be.false;
		});
	});
	describe("#ifPresent(f)", function(){
		var someFunction;
		beforeEach(function(){ someFunction = sinon.fake(); })
		it("passes an Optional's value into f if the Optional has a value", function(){
			sut = Optional.of(5);

			sut.ifPresent(someFunction);

			expect(someFunction).to.have.been.calledWith(5);
		});
		it("does not execute f if the Optional is empty.", function(){
			sut = Optional.empty();

			sut.ifPresent(someFunction);

			expect(someFunction).not.to.have.been.called;
		});
	});
	describe("#map(f -> x)", function(){
		it("applies f to an Optional's value and returns a new Optional containing the result.", function(){
			sut = Optional.of(5);

			var resultOptional = sut.map(function(x){ return x * 2; });

			expect(sut).to.be.instanceof(Optional);
			expect(resultOptional.get()).to.equal(10);
		});
		it("returns a new empty Optional when called on an empty Optional", function(){
			sut = Optional.empty();

			var resultOptional = sut.map(function(x){ return x * 2; });

			expect(sut).to.be.instanceof(Optional);
			expect(resultOptional.isPresent()).to.be.false;
		});
	});
	describe("#flatMap(f -> Optional)", function(){
		var someMethodThatReturnsAnOptional;
		beforeEach(function(){
			someMethodThatReturnsAnOptional = function(x){ return Optional.of(x*2); };
		});
		it("applies f to an Optional's value, then returns the already-Optional-wrapped result", function(){
			sut = Optional.of(5);

			var resultOptional = sut.flatMap(someMethodThatReturnsAnOptional);

			expect(sut).to.be.instanceof(Optional);
			expect(resultOptional.get()).to.equal(10);
		});
		it("returns a new empty Optional when called on an empty Optional", function(){
			sut = Optional.empty();

			var resultOptional = sut.flatMap(someMethodThatReturnsAnOptional);

			expect(sut).to.be.instanceof(Optional);
			expect(resultOptional.isPresent()).to.be.false;
		});
	});
	describe("#filter(f -> boolean)", function(){
		var isEven; 
		beforeEach(function(){ isEven = function(x){ return (x % 2 == 0); }; });

		describe("when called on an empty optional", function(){
			beforeEach(function(){ sut = Optional.empty(); });

			it("returns another empty optional", function(){
				var resultOptional = sut.filter(isEven);

				expect(resultOptional.isPresent()).to.be.false;
			});
		});
		describe("when called on a non-empty Optional", function(){
			it("returns a new Optional containing the current Optional's value if f(value) is true", function(){
				sut = Optional.of(4);

				var resultOptional = sut.filter(isEven);

				expect(resultOptional.isPresent()).to.be.true;
				expect(resultOptional.get()).to.equal(4);
			});
			it("returns a new empty Optional if f(value) is false", function(){
				sut = Optional.of(5);

				var resultOptional = sut.filter(isEven);

				expect(resultOptional.isPresent()).to.be.false;
			});
		});
	});
});
