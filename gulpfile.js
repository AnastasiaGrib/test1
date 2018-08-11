var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('css', function(){
    return gulp.src('assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('assets/css/'))
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/*.scss', ['css'])
});

gulp.task('default', [ 'css' ]);