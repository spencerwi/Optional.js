interface TypedFunction<T, R> extends Function {
    (value: T): R;
}
interface OptionalFunction<T, R> extends Function {
    (value: Optional<T>): Optional<R>;
}
declare class Optional<T> {
    private value;
    static of<T>(value: T): Optional<T>;
    static ofNullable<T>(value: T): Optional<T>;
    static empty(): Optional<void>;
    get(): T;
    orElse(defaultValue: T): T;
    orElseGet(defaultValueGetter: () => T): T;
    map(f: (T: any) => any): Optional<any>;
    flatMap(f: (T: any) => Optional<any>): Optional<any>;
    isPresent(): boolean;
    ifPresent(f: (T: any) => void): void;
    filter(f: (T: any) => boolean): Optional<any>;
}
