import Optional from "../dist/optional";

var nothing: Optional<number|void> = Optional.ofNullable(null);
var alsoNothing: Optional<number|void> = nothing.map((x: number) => x*x);
var anotherNothing: Optional<void> = Optional.empty();

var five: Optional<number> = Optional.of(5);
var ten: Optional<number|void> = five.map(x => x*2);
var tenAsString: Optional<string> = ten.map(x => x.toString());
var theStringTen: string = tenAsString.get();
theStringTen = tenAsString.orElse("");
theStringTen = tenAsString.orElseGet(() => "");
var stillFive: Optional<number|void> = five.flatMap((x: number) => Optional.of(x));

var fiveIsPresent: boolean = stillFive.isPresent();
five.ifPresent((x: number) => { /* do nothing */ });

var maybeFive: Optional<number|void> = five.filter((x: number) => x == 5);
