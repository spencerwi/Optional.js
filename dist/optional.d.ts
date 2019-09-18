export default class Optional<T> {
    private value;
    static of<T>(value: T): Optional<T>;
    static ofNullable<T>(value: T): Optional<T>;
    static empty<R>(): Optional<R>;
    get(): T;
    orElse(defaultValue: T): T;
    orElseGet(defaultValueGetter: () => T): T;
    map<R>(f: (t: T) => R): Optional<R>;
    flatMap<R>(f: (t: T) => Optional<R>): Optional<R>;
    isPresent(): boolean;
    ifPresent(f: (t: T) => void): void;
    filter(f: (t: T) => boolean): Optional<T>;
}
