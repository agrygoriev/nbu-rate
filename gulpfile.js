var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./"
	});
	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});
gulp.task('sass', function() {
	return gulp.src("app/scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());
});
gulp.task('default', ['serve']);