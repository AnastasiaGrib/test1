var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

gulp.task('css', function(){
    return gulp.src('assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber(function(error){
            gutil.log(error.message)
        }))
        .pipe(sass({errLogToConsole:true}))
        .on('error', function () {

        })
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('assets/css/'))

        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('assets/scss/*.scss', ['css'])
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        },
    })
})

gulp.task('default', [ 'css' ]);