const injectPartials = require('gulp-inject-partials');
const gulp = require('gulp');
const minifyCss = require('gulp-minify-css')
const concat = require('gulp-concat');

/**
 * Task for building partials of every .html file into /view/
 */
function buildPartials() {
    return gulp.src('./view/html/templates/**/*.html')
    .pipe(injectPartials({
        removeTags: true
     }))
    .pipe(gulp.dest('../'));
};

function cssMinify(){
    return gulp.src('./view/css/*.css')
    .pipe(minifyCss())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('../assets/css/'))
}

function cssMinifyNoConcat(){
    return gulp.src('./view/css/templates/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('../assets/css/'))
}

function watch(){
    gulp.watch('./view/css/*.css', cssMinify);
    gulp.watch('./view/css/templates/*.css', cssMinifyNoConcat);
    gulp.watch('./view/html/**/*.html', buildPartials);
}

const build = gulp.series(buildPartials, cssMinifyNoConcat, cssMinify);
  
// task exporting!
exports.buildPartials = buildPartials;
exports.cssMinify = cssMinify;
exports.build = build;
exports.default = build;
exports.watch = gulp.series(build, watch);