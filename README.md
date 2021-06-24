Optional.js
===========

Nullable. Optional. The Maybe monad. Whatever you want to call it, it's for Javascript now.

Based specifically on [java.util.Optional](http://docs.oracle.com/javase/8/docs/api/java/util/Optional.html).


How to get it
-------------

In the browser, grab `dist/umd/optional.js` or `dist/umd/optional.min.js`, whichever you prefer. 
They're UMD modules, so you should be able to use them in the loader/environment
of your choice.

Elsewhere, use `dist/commonjs/optional.js`. It's commonjs, and has typings specified, so if you're a Typescript dev, high-five for typesafety! 
You'll probably be interested in `dist/commonjs/optional.d.ts` which is specified in the `typings` property of `package.json` -- 
so you should just be able to `import Optional from "optional.js"`


How to build it
---------------

Optional.js relies on some npm scripts. So just run `npm install && npm test`, and you're good!


How to use it
-------------

Given the non-typechecked nature of Javascript, Optional.js can come in handy for 
safely getting-or-defaulting nested properties:

```javascript
function someFunctionThatTakesAParamObject(params){
  var color = Optional.ofNullable(params)
                      .map(function(params){ return params.color; })
                      .orElse("blue");
}
```

It's also handy for functions where you might not get a result back:

```javascript
var submitButton = Optional.ofNullable(document.querySelector('btn#submit'));
submitButton.ifPresent(function() { submitButton.click()});
```

Really, any [use of the Java Optional](http://www.oracle.com/technetwork/articles/java/java8-optional-2175753.html) is applicable here, as Optional.js is a matching port of the JDK8 implementation of this concept.

For more in-depth examples, check [the spec file](https://github.com/spencerwi/Optional.js/blob/master/test/optional.spec.js).
