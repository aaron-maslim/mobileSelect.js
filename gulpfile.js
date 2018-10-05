const gulp = require('gulp');

const minify = require('gulp-minify'); 
gulp.task('compress', function() {
  gulp.src(['js/mobile-select.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

const cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
  return gulp.src('css/mobile-select.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
