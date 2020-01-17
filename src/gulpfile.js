const injectPartials = require('gulp-inject-partials');
const gulp = require('gulp');

/**
 * Task for building partials of every .html file into /view/
 */
function buildPartials() {
    return gulp.src('./view/*.html')
    .pipe(injectPartials({
        removeTags: true
     }))
    .pipe(gulp.dest('../'));
};

const build = gulp.series(buildPartials);
  
// task exporting!
exports.buildPartials = buildPartials;
exports.build = build;
exports.default = build;