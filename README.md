Optional.js
===========

[![Build Status](https://travis-ci.org/spencerwi/Optional.js.svg?branch=master)](https://travis-ci.org/spencerwi/Optional.js)

Nullable. Optional. The Maybe monad. Whatever you want to call it, it's for Javascript now.

Based specifically on [java.util.Optional](http://docs.oracle.com/javase/8/docs/api/java/util/Optional.html).


How to get it
-------------

Grab `dist/optional.js` or `dist/optional.min.js`, whichever you prefer. 
They're UMD modules, so you should be able to use them in the loader/environment
of your choice.

If you're a Typescript dev, high-five for typesafety! You'll probably be interested in `dist/optional.d.ts`, 
which is specified in the `typings` property of `package.json` -- so you should just be able to `import Optional from "optional.js"`


How to build it
---------------

Optional.js uses gulp as its build tool, so you'll want to install that. Otherwise, it's just `npm install && npm test`.


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
