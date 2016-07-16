var gulp = require('gulp'),
	sass = require('gulp-sass'),
	server = require('gulp-webserver');


gulp.task('sass', function() {

	gulp.src('./style.scss').pipe(sass()).pipe(gulp.dest('./'));

});

gulp.task('watch', ['sass'], function() {
	gulp.watch('./style.scss', ['sass']);
});

gulp.task('serve', ['watch'], function() {

	gulp.src('./').pipe(server({
		livereload:true,
		open:"http://localhost:8080",
		host:"0.0.0.0",
		port:8080
	}));

});

gulp.task('default', ['serve']);