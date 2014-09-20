(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('Optional', [], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Optional'] = factory();
  }
}(this, function () {

var Optional = (function () {
    function Optional() {
    }
    Optional.of = function (value) {
        if (value == null) {
            throw new Error("Cannot create Optional.of null/undefined! Try Optional.ofNullable instead.");
        } else {
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
        if (this.value != null) {
            return this.value;
        } else {
            throw new Error("Cannot get value of empty optional!");
        }
    };
    Optional.prototype.orElse = function (defaultValue) {
        if (this.value == null) {
            return defaultValue;
        } else {
            return this.value;
        }
    };
    Optional.prototype.map = function (f) {
        if (this.value != null) {
            var bareValueResult = f.apply(null, [this.value]);
            return Optional.ofNullable(bareValueResult);
        } else {
            return Optional.empty();
        }
    };
    Optional.prototype.flatMap = function (f) {
        if (this.value != null) {
            var wrappedResult = f.apply(null, [this.value]);
            return wrappedResult;
        } else {
            return Optional.empty();
        }
    };
    Optional.prototype.isPresent = function () {
        return (this.value != null);
    };
    Optional.prototype.ifPresent = function (f) {
        if (this.isPresent()) {
            f.apply(null, [this.value]);
        }
    };
    return Optional;
})();
//# sourceMappingURL=optional.js.map


return Optional;


}));