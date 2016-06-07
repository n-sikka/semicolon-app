var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');


gulp.task('connect', function() {
  connect.server({
    root: '../symptum-app',
    port: 3000,
    livereload: true
  });
});
