// IMPORT MODULES
var gulp = require( 'gulp' );
var babel = require( 'gulp-babel' );


// DECLARE VARS
var PATHS = {
    ROOT: {
        src: './src/',
        dest: './dist/'
    },
    JS: {
        src: './src/js/',
        dest: './dist/js/'
    }
}


// DECLARE TASKS
gulp.task( 'default', [ 'html', 'scripts' ], function() {
    console.log( 'INSIDE TASK: `default`' );
} );

gulp.task( 'html', function() {
    return gulp.src( PATHS.ROOT.src + '**/*.html' )
        .pipe( gulp.dest( PATHS.ROOT.dest) );
} );

gulp.task( 'scripts', [ 'scripts--entry', 'scripts--app' ], function() {
    console.log( 'INSIDE TASK: `scripts`' );
} );

gulp.task( 'scripts--entry', function() {
    return gulp.src( PATHS.JS.src + 'main.js' )
        .pipe( gulp.dest( PATHS.JS.dest ) );
} )

gulp.task( 'scripts--app', function() {
    return gulp.src( PATHS.JS.src + 'app/*.js' )
        .pipe( babel( {
            presets: [ 'es2015' ],
            plugins: [ 'transform-es2015-modules-amd' ]
        } ) )
        .pipe( gulp.dest( PATHS.JS.dest + 'app/' ) );
} );