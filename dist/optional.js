(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Optional;
});
