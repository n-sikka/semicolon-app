var gulp = require('gulp'),
    connect = require('gulp-connect'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject'),
    livereload = require('gulp-livereload');

gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
});


gulp.task('sass', function() {
    return gulp.src('assets/sass/main.scss')
    /**
     * Dynamically injects @import statements into the main.scss file, allowing
     * .scss files to be placed around the app structure with the component
     * or page they apply to.
     */
        .pipe(inject(gulp.src(['assets/sass/**/*.scss'], {read: true, cwd: 'assets/**/.scss'}), {
            starttag: '/* inject:imports */',
            endtag: '/* endinject */',
            transform: function (filepath) {
                return '@import ".' + filepath + '";';
            }
        }))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
// gulp.task('styles', function() {
//     gulp.src('assets/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('dist/css/'));
// });

gulp.task('serve', ['connect', 'styles']);
