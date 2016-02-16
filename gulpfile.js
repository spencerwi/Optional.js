var gulp = require("gulp");
var merge = require("merge2");

var typescript = require("gulp-typescript");
var uglifyjs = require("gulp-uglifyjs");

var jasmine = require("gulp-jasmine");
var jasmineReporters = require("jasmine-reporters");

var rimraf = require("rimraf");

gulp.task('clean', function(cb){
    rimraf("./dist", cb);
})
gulp.task('build', ['clean'], function(){
    var tsProject = typescript.createProject('tsconfig.json');
    var compiledTS = tsProject.src().pipe(typescript(tsProject));

    return merge([
        compiledTS.dts.pipe(gulp.dest('dist')),
        compiledTS.js.pipe(gulp.dest('dist'))
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
            .pipe(typescript({
                module: 'commonjs'
            }))
    ])
        
});

gulp.task("default", ['test'])
