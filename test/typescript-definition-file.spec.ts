import Optional from "../dist/commonjs/optional";
import { suite, test, slow, timeout } from "mocha-typescript";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
chai.use(sinonChai);
let expect = chai.expect;

@suite
class TypescriptOptionalTests {
	@test testTypechecking() {
		let nothing: Optional<any> = Optional.ofNullable(null);
		expect(nothing.isPresent()).to.be.false;
		let alsoNothing: Optional<number> = nothing.map((x : any) => x*x);
		expect(alsoNothing.isPresent()).to.be.false;

		let five: Optional<number> = Optional.of(5);
		expect(five.get()).to.equal(5);
		let ten: Optional<number|void> = five.map(x => x*2);
		expect(ten.get()).to.equal(10);
		let tenAsString: Optional<string> = ten.map((x : number) => x.toString());
		let theStringTen: string = tenAsString.get();
		expect(theStringTen).to.equal("10");
		theStringTen = tenAsString.orElse("");
		expect(theStringTen).to.equal("10");
		theStringTen = tenAsString.orElseGet(() => "");
		expect(theStringTen).to.equal("10");
		let stillFive: Optional<number|void> = five.flatMap((x: number) => Optional.of(x));
		expect(stillFive.get()).to.equal(5);

		let fiveIsPresent: boolean = stillFive.isPresent();
		expect(fiveIsPresent).to.be.true;
		let callback : sinon.SinonSpy = sinon.fake();
		five.ifPresent(callback);
		expect(callback).to.have.been.called;

		let maybeFive: Optional<number|void> = five.filter((x: number) => x == 5);
		expect(maybeFive.isPresent()).to.be.true;
	}
}

