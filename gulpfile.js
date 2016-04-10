var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-webserver');
var imagemin = require('gulp-imagemin');


// Concatenate and compile SCSS
gulp.task('sass', function() {
  return gulp.src('dev/scss/main.scss')
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('dev/css'))
    .pipe(cssnano())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['dev/js/**/*.js', '!dev/js/vendor/**'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('images', () => {
	return gulp.src('dev/img/**', {base: 'dev/img'})
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['sass', 'scripts', 'images', 'webserver'], function() {
  gulp.watch(['dev/scss/**/*.scss'], ['sass']);
  gulp.watch('dev/js/*.js', ['scripts']);
});

gulp.task('build', ['sass', 'scripts']);
