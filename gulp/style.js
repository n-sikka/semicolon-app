var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    sassLint = require('gulp-sass-lint'),
    sourcemaps = require('gulp-sourcemaps');


// compile sass for production
gulp.task('sass', function() {
  return gulp.src(['assets/sass/**/*.scss'])
  .pipe(sourcemaps.init())
  .pipe(concat('index.scss'))
  .pipe(sass().on('error', function(){
    gutil.log(gutil.colors.bgBlue.red('ERROR : SCSS COMPILATION FAILED'));
  }))
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('dist/css'))
});


// compile sass for development
gulp.task('sass:dev', function() {
  return gulp.src(['assets/sass/**/*.scss'])
  .pipe(sourcemaps.init())
  .pipe(concat('index.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('assets/css'))
});


// to check sass for any wrong coding conventions
gulp.task('sass:check', function(){
  return gulp.src(['assets/sass/**/*.scss'])
  .pipe(sassLint(
    {
      'endless' : true
    }
  ))
  .pipe(sassLint.format())
})


// watcher for any change
gulp.task('compile-change', function() {
  gulp.watch('assets/sass/**/*.scss', ['sass', 'sass:dev']);
});

gulp.task('watch:style', ['compile-change', 'sass', 'sass:dev']);
