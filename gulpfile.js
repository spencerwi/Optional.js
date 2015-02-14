var gulp = require("gulp");
var merge = require("merge2");

var typescript = require("gulp-typescript");
var umd = require("gulp-umd");
var uglifyjs = require("gulp-uglifyjs");

var jasmine = require("gulp-jasmine");
var jasmineReporters = require("jasmine-reporters");

var rimraf = require("rimraf");

gulp.task('clean', function(cb){
    rimraf("./dist", cb);
})
gulp.task('build', ['clean'], function(){
    var compiledTS = gulp.src('src/optional.ts')
                        .pipe(typescript({
                            declarationFiles: true
                        }));

    return merge([
        compiledTS.dts.pipe(gulp.dest('dist')),
        compiledTS.js.pipe(gulp.dest('dist'))
                     .pipe(umd({
                        exports:   function(file) { return 'Optional'; },
                        namespace: function(file) { return 'Optional'; }
                     }))
                     .pipe(gulp.dest('dist'))
                     .pipe(uglifyjs("optional.min.js", {
                        preserveComments: "all"
                     }))
                     .pipe(gulp.dest('dist'))
    ]);
});
gulp.task('test', ['clean', 'build'], function(){
    return merge([
        gulp.src(['dist/optional.js', 'test/optional.spec.js'])
            .pipe(jasmine({
                reporter: new jasmineReporters.TerminalReporter({verbosity: 3, color: true})
            })),
        gulp.src('test/typescript-definition-file.spec.ts')
            .pipe(typescript())
    ])
        
});

gulp.task("default", ['test'])
