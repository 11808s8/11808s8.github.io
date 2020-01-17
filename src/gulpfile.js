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

const build = gulp.series(buildPartials, cssMinify);
  
// task exporting!
exports.buildPartials = buildPartials;
exports.cssMinify = cssMinify;
exports.build = build;
exports.default = build;