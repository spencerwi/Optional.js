export default class Optional<T> {
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
    public static empty<R>(): Optional<R> {
        return new Optional<R>();
    }
    
    public get(): T {
        if (this.isPresent()) {
            return this.value;  
        } else {
            throw new Error("Cannot get value of empty optional!")
        }        
    }
    public orElse(defaultValue: T): T {
        if (this.isPresent()){
            return this.value;
        } else {
            return defaultValue;
        }
    }
    public orElseGet(defaultValueGetter: ()=>T): T {
        if (this.isPresent()){
            return this.value;
        } else {
            return defaultValueGetter();
        }
    }
    public map<T,R>(f: (T)=>R): Optional<R> {
        if (this.isPresent()){
            var bareValueResult: R = f(this.value);
            return Optional.ofNullable(bareValueResult);
        } else {
            return Optional.empty<R>();
        }
    }
    public flatMap<T,R>(f: (T)=>Optional<R>): Optional<R> {
        if (this.isPresent()){
            var wrappedResult: Optional<R> = f(this.value);
            return wrappedResult;
        } else {
            return Optional.empty<R>();
        }
    }
    public isPresent(): boolean {
        return (this.value != null);
    }
    public ifPresent(f: (T)=>void): void {
        if (this.isPresent()){
            f(this.value);
        }
    }

    public filter(f: (T)=>boolean): Optional<T> {
        if (this.isPresent() && f(this.value) == true){
            return Optional.of(this.value);
        } else {
            return Optional.empty<T>();
        }
    }
}
