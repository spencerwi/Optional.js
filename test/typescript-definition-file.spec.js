"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var optional_1 = __importDefault(require("../dist/commonjs/optional"));
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = __importDefault(require("chai"));
var sinon_1 = __importDefault(require("sinon"));
var sinon_chai_1 = __importDefault(require("sinon-chai"));
chai_1.default.use(sinon_chai_1.default);
var expect = chai_1.default.expect;
var TypescriptOptionalTests = (function () {
    function TypescriptOptionalTests() {
    }
    TypescriptOptionalTests.prototype.testTypechecking = function () {
        var nothing = optional_1.default.ofNullable(null);
        expect(nothing.isPresent()).to.be.false;
        var alsoNothing = nothing.map(function (x) { return x * x; });
        expect(alsoNothing.isPresent()).to.be.false;
        var five = optional_1.default.of(5);
        expect(five.get()).to.equal(5);
        var ten = five.map(function (x) { return x * 2; });
        expect(ten.get()).to.equal(10);
        var tenAsString = ten.map(function (x) { return x.toString(); });
        var theStringTen = tenAsString.get();
        expect(theStringTen).to.equal("10");
        theStringTen = tenAsString.orElse("");
        expect(theStringTen).to.equal("10");
        theStringTen = tenAsString.orElseGet(function () { return ""; });
        expect(theStringTen).to.equal("10");
        var stillFive = five.flatMap(function (x) { return optional_1.default.of(x); });
        expect(stillFive.get()).to.equal(5);
        var fiveIsPresent = stillFive.isPresent();
        expect(fiveIsPresent).to.be.true;
        var callback = sinon_1.default.fake();
        five.ifPresent(callback);
        expect(callback).to.have.been.called;
        var maybeFive = five.filter(function (x) { return x == 5; });
        expect(maybeFive.isPresent()).to.be.true;
    };
    __decorate([
        mocha_typescript_1.test
    ], TypescriptOptionalTests.prototype, "testTypechecking", null);
    TypescriptOptionalTests = __decorate([
        mocha_typescript_1.suite
    ], TypescriptOptionalTests);
    return TypescriptOptionalTests;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC1kZWZpbml0aW9uLWZpbGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQtZGVmaW5pdGlvbi1maWxlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1RUFBaUQ7QUFDakQscURBQThEO0FBQzlELDhDQUF3QjtBQUN4QixnREFBMEI7QUFDMUIsMERBQW1DO0FBQ25DLGNBQUksQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxDQUFDO0FBQ3BCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekI7SUFBQTtJQThCQSxDQUFDO0lBN0JNLGtEQUFnQixHQUFoQjtRQUNMLElBQUksT0FBTyxHQUFrQixrQkFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQXFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFPLElBQUssT0FBQSxDQUFDLEdBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUU1QyxJQUFJLElBQUksR0FBcUIsa0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxHQUFHLEdBQTBCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksV0FBVyxHQUFxQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBVSxJQUFLLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQzFFLElBQUksWUFBWSxHQUFXLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksU0FBUyxHQUEwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBUyxJQUFLLE9BQUEsa0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDbkYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxhQUFhLEdBQVksU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBb0IsZUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVyQyxJQUFJLFNBQVMsR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFDMUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUE1Qks7UUFBTCx1QkFBSTttRUE0Qko7SUE3QkksdUJBQXVCO1FBRDVCLHdCQUFLO09BQ0EsdUJBQXVCLENBOEI1QjtJQUFELDhCQUFDO0NBQUEsQUE5QkQsSUE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3B0aW9uYWwgZnJvbSBcIi4uL2Rpc3QvY29tbW9uanMvb3B0aW9uYWxcIjtcbmltcG9ydCB7IHN1aXRlLCB0ZXN0LCBzbG93LCB0aW1lb3V0IH0gZnJvbSBcIm1vY2hhLXR5cGVzY3JpcHRcIjtcbmltcG9ydCBjaGFpIGZyb20gXCJjaGFpXCI7XG5pbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCI7XG5pbXBvcnQgc2lub25DaGFpIGZyb20gXCJzaW5vbi1jaGFpXCI7XG5jaGFpLnVzZShzaW5vbkNoYWkpO1xubGV0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5Ac3VpdGVcbmNsYXNzIFR5cGVzY3JpcHRPcHRpb25hbFRlc3RzIHtcblx0QHRlc3QgdGVzdFR5cGVjaGVja2luZygpIHtcblx0XHRsZXQgbm90aGluZzogT3B0aW9uYWw8YW55PiA9IE9wdGlvbmFsLm9mTnVsbGFibGUobnVsbCk7XG5cdFx0ZXhwZWN0KG5vdGhpbmcuaXNQcmVzZW50KCkpLnRvLmJlLmZhbHNlO1xuXHRcdGxldCBhbHNvTm90aGluZzogT3B0aW9uYWw8bnVtYmVyPiA9IG5vdGhpbmcubWFwKCh4IDogYW55KSA9PiB4KngpO1xuXHRcdGV4cGVjdChhbHNvTm90aGluZy5pc1ByZXNlbnQoKSkudG8uYmUuZmFsc2U7XG5cblx0XHRsZXQgZml2ZTogT3B0aW9uYWw8bnVtYmVyPiA9IE9wdGlvbmFsLm9mKDUpO1xuXHRcdGV4cGVjdChmaXZlLmdldCgpKS50by5lcXVhbCg1KTtcblx0XHRsZXQgdGVuOiBPcHRpb25hbDxudW1iZXJ8dm9pZD4gPSBmaXZlLm1hcCh4ID0+IHgqMik7XG5cdFx0ZXhwZWN0KHRlbi5nZXQoKSkudG8uZXF1YWwoMTApO1xuXHRcdGxldCB0ZW5Bc1N0cmluZzogT3B0aW9uYWw8c3RyaW5nPiA9IHRlbi5tYXAoKHggOiBudW1iZXIpID0+IHgudG9TdHJpbmcoKSk7XG5cdFx0bGV0IHRoZVN0cmluZ1Rlbjogc3RyaW5nID0gdGVuQXNTdHJpbmcuZ2V0KCk7XG5cdFx0ZXhwZWN0KHRoZVN0cmluZ1RlbikudG8uZXF1YWwoXCIxMFwiKTtcblx0XHR0aGVTdHJpbmdUZW4gPSB0ZW5Bc1N0cmluZy5vckVsc2UoXCJcIik7XG5cdFx0ZXhwZWN0KHRoZVN0cmluZ1RlbikudG8uZXF1YWwoXCIxMFwiKTtcblx0XHR0aGVTdHJpbmdUZW4gPSB0ZW5Bc1N0cmluZy5vckVsc2VHZXQoKCkgPT4gXCJcIik7XG5cdFx0ZXhwZWN0KHRoZVN0cmluZ1RlbikudG8uZXF1YWwoXCIxMFwiKTtcblx0XHRsZXQgc3RpbGxGaXZlOiBPcHRpb25hbDxudW1iZXJ8dm9pZD4gPSBmaXZlLmZsYXRNYXAoKHg6IG51bWJlcikgPT4gT3B0aW9uYWwub2YoeCkpO1xuXHRcdGV4cGVjdChzdGlsbEZpdmUuZ2V0KCkpLnRvLmVxdWFsKDUpO1xuXG5cdFx0bGV0IGZpdmVJc1ByZXNlbnQ6IGJvb2xlYW4gPSBzdGlsbEZpdmUuaXNQcmVzZW50KCk7XG5cdFx0ZXhwZWN0KGZpdmVJc1ByZXNlbnQpLnRvLmJlLnRydWU7XG5cdFx0bGV0IGNhbGxiYWNrIDogc2lub24uU2lub25TcHkgPSBzaW5vbi5mYWtlKCk7XG5cdFx0Zml2ZS5pZlByZXNlbnQoY2FsbGJhY2spO1xuXHRcdGV4cGVjdChjYWxsYmFjaykudG8uaGF2ZS5iZWVuLmNhbGxlZDtcblxuXHRcdGxldCBtYXliZUZpdmU6IE9wdGlvbmFsPG51bWJlcnx2b2lkPiA9IGZpdmUuZmlsdGVyKCh4OiBudW1iZXIpID0+IHggPT0gNSk7XG5cdFx0ZXhwZWN0KG1heWJlRml2ZS5pc1ByZXNlbnQoKSkudG8uYmUudHJ1ZTtcblx0fVxufVxuXG4iXX0=