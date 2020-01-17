const injectPartials = require('gulp-inject-partials');
const gulp = require('gulp');

function indexPartials() {
    return gulp.src('./view/*.html')
    .pipe(injectPartials({
        removeTags: true
     }))
    .pipe(gulp.dest('../'));
  };
  
  exports.indexPartials = indexPartials;