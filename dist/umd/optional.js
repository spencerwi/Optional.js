(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Comparators = factory());
}(this, (function () { 'use strict';

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
    if (!("undefined" === typeof window)) {
        window["Optional"] = Optional;
    }

    return Optional;

})));
