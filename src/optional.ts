interface TypedFunction<T,R> extends Function {
    (value: T): R;
}
interface OptionalFunction<T,R> extends Function {
    (value: Optional<T>): Optional<R>;
}
interface Consumer<T> {
    (value: T): void;
}

class Optional<T> {
    private value: T;   
    public static of<T>(value: T): Optional<T> {
        if (value == null){
            throw new Error("Cannot create Optional.of null/undefined! Try Optional.ofNullable instead.");
        } else {
            return Optional.ofNullable(value);
        }       
    }
    public static ofNullable<T>(value: T): Optional<T> {
        var opt = new Optional<T>();
        opt.value = value;
        return opt;
    }
    public static empty(): Optional<void> {
        return new Optional<void>();
    }
    
    public get(): T {
        if (this.value != null) {
            return this.value;  
        } else {
            throw new Error("Cannot get value of empty optional!")
        }        
    }
    public orElse(defaultValue: T): T {
        if (this.value == null){
            return defaultValue;
        } else {
            return this.value;
        }
    }
    public map(f: TypedFunction<T, any>): Optional<any> {
        if (this.value != null){
            var bareValueResult: any = f.apply(null, [this.value]);
            return Optional.ofNullable(bareValueResult);
        } else {
            return Optional.empty();
        }
    }
    public flatMap(f: OptionalFunction<T, any>): Optional<any> {
        if (this.value != null){
            var wrappedResult: Optional<any> = f.apply(null, [this.value]);
            return wrappedResult;
        } else {
            return Optional.empty();
        }
    }
    public isPresent(): boolean {
        return (this.value != null);
    }
    public ifPresent(f: Consumer<T>): void {
        if (this.isPresent()){
            f.apply(null, [this.value]);
        }
    }

    public filter(f: TypedFunction<T, boolean>): Optional<any> {
        if (this.isPresent() && f(this.value) == true){
            return Optional.of(this.value);
        } else {
            return Optional.empty();
        }
    }
}
