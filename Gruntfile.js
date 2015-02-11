module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-umd");
    grunt.loadNpmTasks("grunt-contrib-jasmine");

    grunt.initConfig({
        clean: {
            before: ["dist"],
            after: ["tmp.spec.js"]
        },
        ts: {
            build: {
                options: {
                    declaration: true
                },
                src: ['src/optional.ts'],
                out: 'dist/optional.js'
            },
            testDefinitionFile: {
                options: {
                    declaration: false,
                    sourceMap: false
                },
                src: ['test/typescript-definition-file.spec.ts'],
                out: 'tmp.spec.js'
            }
        },
        uglify: {
            compress: {
                files: {
                    'dist/optional.min.js': ['dist/optional.js']
                }
            }
        },
        umd: {
            uncompressed: {
                src: "dist/optional.js",
                objectToExport: "Optional",
                amdModuleId: "Optional",
                globalAlias: "Optional"
            },
            compressed: {
                src: "dist/optional.min.js",
                objectToExport: "Optional",
                amdModuleId: "Optional",
                globalAlias: "Optional"
            }
        },
        jasmine: {
            test: {
                src: ['dist/optional.min.js'],
                options: {
                    specs: ['test/optional.spec.js']
                }
            }
        }
    });
    grunt.registerTask('build', ['clean:before', 'ts:build', 'uglify', 'umd']);
    grunt.registerTask('default', ['build', 'jasmine', 'ts:testDefinitionFile', 'clean:after']);
}
