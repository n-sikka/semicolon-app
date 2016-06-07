var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('script', function () {
  return gulp.src(['app/app.js', 'app/**/*.js'])
             .pipe(sourcemaps.init())
             .pipe(concat('main.js'))
             .pipe(ngAnnotate())
             .pipe(sourcemaps.write('sourcemaps'))
             .pipe(gulp.dest('dist/js'))
});

gulp.task('script:dev', function () {
  return gulp.src(['app/app.js', 'app/**/*.js', 'config/*.js'])
             .pipe(sourcemaps.init())
             .pipe(concat('main.js'))
             .pipe(ngAnnotate())
             .pipe(sourcemaps.write('sourcemaps'))
             .pipe(gulp.dest('assets/js'))
});

gulp.task('compile-change', function() {
  gulp.watch('app/**/*.js', ['script', 'script:dev']);
});

gulp.task('watch:script', ['compile-change', 'sass', 'sass:dev']);
