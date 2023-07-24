const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");


gulp.task('sass-min', function () {
    return gulp.src('sass/style.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
    return gulp.src('sass/style.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
    gulp.watch('sass/style.sass', gulp.series(['sass', 'sass-min']));
});

gulp.task('default', gulp.series(['sass', 'sass-min', 'watch']));