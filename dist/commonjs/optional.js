"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Optional = (function () {
    function Optional() {
    }
    Optional.of = function (value) {
        if (value == null) {
            throw new Error("Cannot create Optional.of null/undefined! Try Optional.ofNullable instead.");
        }
        else {
            return Optional.ofNullable(value);
        }
    };
    Optional.ofNullable = function (value) {
        var opt = new Optional();
        opt.value = value;
        return opt;
    };
    Optional.empty = function () {
        return new Optional();
    };
    Optional.prototype.get = function () {
        if (this.isPresent()) {
            return this.value;
        }
        else {
            throw new Error("Cannot get value of empty optional!");
        }
    };
    Optional.prototype.orElse = function (defaultValue) {
        if (this.isPresent()) {
            return this.value;
        }
        else {
            return defaultValue;
        }
    };
    Optional.prototype.orElseGet = function (defaultValueGetter) {
        if (this.isPresent()) {
            return this.value;
        }
        else {
            return defaultValueGetter();
        }
    };
    Optional.prototype.map = function (f) {
        if (this.isPresent()) {
            var bareValueResult = f(this.value);
            return Optional.ofNullable(bareValueResult);
        }
        else {
            return Optional.empty();
        }
    };
    Optional.prototype.flatMap = function (f) {
        if (this.isPresent()) {
            var wrappedResult = f(this.value);
            return wrappedResult;
        }
        else {
            return Optional.empty();
        }
    };
    Optional.prototype.isPresent = function () {
        return (this.value != null);
    };
    Optional.prototype.ifPresent = function (f) {
        if (this.isPresent()) {
            f(this.value);
        }
    };
    Optional.prototype.filter = function (f) {
        if (this.isPresent() && f(this.value) == true) {
            return Optional.of(this.value);
        }
        else {
            return Optional.empty();
        }
    };
    return Optional;
}());
exports.default = Optional;
if (!("undefined" === typeof window)) {
    window["Optional"] = Optional;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3B0aW9uYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBdUVBLENBQUM7SUFyRWlCLFdBQUUsR0FBaEIsVUFBb0IsS0FBUTtRQUN4QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUM7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNILE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFDYSxtQkFBVSxHQUF4QixVQUE0QixLQUFRO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksUUFBUSxFQUFLLENBQUM7UUFDNUIsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ2EsY0FBSyxHQUFuQjtRQUNJLE9BQU8sSUFBSSxRQUFRLEVBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sc0JBQUcsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1NBQ3pEO0lBQ0wsQ0FBQztJQUNNLHlCQUFNLEdBQWIsVUFBYyxZQUFlO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjthQUFNO1lBQ0gsT0FBTyxZQUFZLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ00sNEJBQVMsR0FBaEIsVUFBaUIsa0JBQXlCO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQjthQUFNO1lBQ0gsT0FBTyxrQkFBa0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUNNLHNCQUFHLEdBQVYsVUFBYyxDQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQ2pCLElBQUksZUFBZSxHQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDSCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFDTSwwQkFBTyxHQUFkLFVBQWtCLENBQXVCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1lBQ2pCLElBQUksYUFBYSxHQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLE9BQU8sYUFBYSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFDTSw0QkFBUyxHQUFoQjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTSw0QkFBUyxHQUFoQixVQUFpQixDQUFnQjtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxDQUFtQjtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBQztZQUMxQyxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQzs7QUFFRCxJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssT0FBTyxNQUFNLENBQUMsRUFBRTtJQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuICAgIHByaXZhdGUgdmFsdWU6IFQ7ICAgXG4gICAgcHVibGljIHN0YXRpYyBvZjxUPih2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNyZWF0ZSBPcHRpb25hbC5vZiBudWxsL3VuZGVmaW5lZCEgVHJ5IE9wdGlvbmFsLm9mTnVsbGFibGUgaW5zdGVhZC5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2ZOdWxsYWJsZSh2YWx1ZSk7XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgb2ZOdWxsYWJsZTxUPih2YWx1ZTogVCk6IE9wdGlvbmFsPFQ+IHtcbiAgICAgICAgdmFyIG9wdCA9IG5ldyBPcHRpb25hbDxUPigpO1xuICAgICAgICBvcHQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9wdDtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBlbXB0eTxSPigpOiBPcHRpb25hbDxSPiB7XG4gICAgICAgIHJldHVybiBuZXcgT3B0aW9uYWw8Uj4oKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCgpOiBUIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlOyAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHZhbHVlIG9mIGVtcHR5IG9wdGlvbmFsIVwiKVxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIG9yRWxzZShkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQcmVzZW50KCkpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvckVsc2VHZXQoZGVmYXVsdFZhbHVlR2V0dGVyOiAoKT0+VCk6IFQge1xuICAgICAgICBpZiAodGhpcy5pc1ByZXNlbnQoKSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVHZXR0ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgbWFwPFI+KGY6ICh0IDogVCk9PlIpOiBPcHRpb25hbDxSPiB7XG4gICAgICAgIGlmICh0aGlzLmlzUHJlc2VudCgpKXtcbiAgICAgICAgICAgIHZhciBiYXJlVmFsdWVSZXN1bHQ6IFIgPSBmKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mTnVsbGFibGUoYmFyZVZhbHVlUmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eTxSPigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBmbGF0TWFwPFI+KGY6ICh0IDogVCk9Pk9wdGlvbmFsPFI+KTogT3B0aW9uYWw8Uj4ge1xuICAgICAgICBpZiAodGhpcy5pc1ByZXNlbnQoKSl7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZFJlc3VsdDogT3B0aW9uYWw8Uj4gPSBmKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWRSZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHk8Uj4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaXNQcmVzZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgIT0gbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBpZlByZXNlbnQoZjogKHQgOiBUKT0+dm9pZCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1ByZXNlbnQoKSl7XG4gICAgICAgICAgICBmKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZpbHRlcihmOiAodCA6IFQpPT5ib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuICAgICAgICBpZiAodGhpcy5pc1ByZXNlbnQoKSAmJiBmKHRoaXMudmFsdWUpID09IHRydWUpe1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5PFQ+KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlmICghKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3aW5kb3cpKSB7XG4gICAgd2luZG93W1wiT3B0aW9uYWxcIl0gPSBPcHRpb25hbDtcbn1cbiJdfQ==