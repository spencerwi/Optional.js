export default class Optional<T> {
    private value;
    static of<T>(value: T): Optional<T>;
    static ofNullable<T>(value: T): Optional<T>;
    static empty<R>(): Optional<R>;
    get(): T;
    orElse(defaultValue: T): T;
    orElseGet(defaultValueGetter: () => T): T;
    map<T, R>(f: (T) => R): Optional<R>;
    flatMap<T, R>(f: (T) => Optional<R>): Optional<R>;
    isPresent(): boolean;
    ifPresent(f: (T) => void): void;
    filter(f: (T) => boolean): Optional<T>;
}
