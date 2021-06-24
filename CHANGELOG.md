# Changelog
All notable changes to this project will be documented in this file (starting from version 3.0.0)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.2] - 2021-06-23
### Changed
 - Pretty much the entire way that tests are run, so that I could clean out some vulnerable dependencies
### Removed
 - bower.json, since I haven't been publishing to bower for a while, and I don't know if bower's even a thing anymore

## [0.4.1] - 2019-09-18
### Changed
 - Updated README appropriately and fixed Travis CI builds. Whoops!
 - Re-added tests that exercise the typescript definitions

## [0.4.0] - 2019-09-18
### Added
 - Multiple output formats, since Webpack and other modern loaders don't like 
 my old version of typescript's UMD output (complaining about require used in
 a non-staticly-analyzable way). There are now two output files:
   - `dist/commonjs/optional.js`, which is commonjs output usable by webpack/rollup/etc
   - `dist/umd/optional.js`, which is a UMD format usable by pretty much 
   everything, including the browser  

 - Tests to exercise in-browser usage (via `mocha-chrome`)
 - A `package-lock.json` file

### Changed
 - Output paths; please reference either `dist/commonjs/optional.js` or 
 `dist/umd/optional.js` now instead of just `dist/optional.js`

