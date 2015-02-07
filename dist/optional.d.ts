declare class Optional<T> {
    private value;
    static of<T>(value: T): Optional<T>;
    static ofNullable<T>(value: T): Optional<T>;
    static empty(): Optional<void>;
    get(): T;
    orElse(defaultValue: T): T;
    orElseGet(defaultValueGetter: () => T): T;
    map<T, R>(f: (T) => R): Optional<R | void>;
    flatMap<T, R>(f: (T) => Optional<R>): Optional<R | void>;
    isPresent(): boolean;
    ifPresent(f: (T) => void): void;
    filter(f: (T) => boolean): Optional<T | void>;
}
