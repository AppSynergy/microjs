var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');


swallowError = function(error){
  console.log(error.toString());
  this.emit('end');
}


gulp.task('default', ['index', 'bower']);


gulp.task('watch', function() {
  gulp.watch('src/**', ['index']);
});


gulp.task('index', function() {
  return gulp.src('src/public/index.html')
    .pipe(gulp.dest('dist/'));
});


bower_src = {
  js: './bower_components/*/dist/{js/,}*min.{map,js}',
  css: './bower_components/*/dist/css/*.min.{map,css}',
};


gulp.task('bower', function() {

  gulp.src(bower_src.js)
		.pipe(plumber())
		.on('error', swallowError)
		.pipe(gulp.dest('dist/assets/'));

  gulp.src(bower_src.css)
		.pipe(plumber())
		.on('error', swallowError)
		.pipe(gulp.dest('dist/assets/'));

});
