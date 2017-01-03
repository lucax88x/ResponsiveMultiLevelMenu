var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var lessDir = 'less';

var targetCSSDir = 'css';


gulp.task('css', function () {
    return gulp.src(lessDir + '/examples.less')
        .pipe(less({ style: 'compressed' }).on('error', gutil.log))
        
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify('CSS minified'));
});

gulp.task('watch', function () {
    gulp.watch(lessDir + '/examples.less', ['css']);
});

gulp.task('default', ['css', 'watch']);