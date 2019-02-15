var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("autoprefixer");
var server = require("gulp-webserver");
gulp.task("serve", function() {
    return gulp.src("../css/*.scss")
        .pipe(sass())
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions']
        // }))
        .pipe(gulp.dest("../css"));
})
gulp.task("watch", function() {
    gulp.watch('../css/*.scss', gulp.series('serve'));
})
gulp.task("server", function() {
    return gulp.src("../")
        .pipe(server({
            port: 3030,
            open: true,
            livereload: true,
            fallback: 'index.html'
        }))
})
gulp.task("dev", gulp.series("server", "serve", "watch"));