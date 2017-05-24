var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var ap = require('autoprefixer');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('css/style.scss')
                .pipe(sass())
                .pipe(autoprefixer())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("css/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});