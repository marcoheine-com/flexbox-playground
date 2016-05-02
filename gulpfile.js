var gulp = require('gulp');
    sass = require('gulp-sass');
    livereload = require('gulp-livereload');
    cleanCSS = require('gulp-clean-css');
    uglify = require('gulp-uglify');

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);


//  Compiles Sass to CSS
gulp.task('sass', function(){
  return gulp.src('css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

// Compress JS
gulp.task('compress', function() {
  return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Watching Sass files for changes & Live-reloading 
gulp.task('watch', function (){
  livereload.listen();
  gulp.watch('css/sass/**/*.scss', ['sass']);
  gulp.watch(['dist/**']).on('change', livereload.changed);
});
