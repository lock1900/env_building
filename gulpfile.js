var gulp = require("gulp");

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

// sass
var sass = require("gulp-sass");

gulp.task("sass", function() {
    gulp.src("src/sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
});
