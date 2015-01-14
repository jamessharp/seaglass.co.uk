var gulp = require('gulp');
var sass = require('gulp-sass');  
var jade = require('gulp-jade');

gulp.task('sass', function() {
  return gulp.src('./scss/seaglass.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('jade', function() {
  return gulp.src('./views/site/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
  gulp.watch('./views/**', ['jade']);
  gulp.watch('./scss/**', ['sass']);
});

gulp.task('default', ['watch', 'jade', 'sass']);