// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var server = require('gulp-webserver');


// Compile Our Sass
gulp.task('sass', function() {
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('styles', function() {
    gulp.src(['css/normalize.css', 'css/main.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCSS())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/*.scss', ['sass', 'styles']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'styles', 'webserver']);

gulp.task('build', ['sass', 'scripts', 'styles']);
