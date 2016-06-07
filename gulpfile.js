var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    sourcemaps = require('gulp-sourcemaps');
    livereload = require('gulp-livereload');

gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src(['assets/sass/**/*.scss', 'assets/sass/settings/_variables.scss'])
  .pipe(sourcemaps.init())
  .pipe(concat('index.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('dist/css'))
});

gulp.task('dev')

gulp.task('prod', ['sass'])


gulp.task('watch-sass', function() {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});


gulp.task('serve', ['connect', 'sass', 'watch-sass']);
