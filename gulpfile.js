const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const cleanCSS = require('gulp-clean-css');

/*-----------------------------------------------
|   SCSS
-----------------------------------------------*/
gulp.task('scss', () => gulp
  .src('src/assets/scss/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(
    sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError),
  )
  .pipe(autoprefixer({ cascade: false }))
  .pipe(cleanCSS({ compatibility: 'ie9' }))
  .pipe(sourcemaps.write('.'))
  .pipe(plumber.stop())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.stream()));

gulp.task('scss:dark', () => gulp
  .src('src/assets/scss/theme-dark.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(
    sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError),
  )
  .pipe(autoprefixer({ cascade: false }))
  .pipe(cleanCSS({ compatibility: 'ie9' }))
  .pipe(sourcemaps.write('.'))
  .pipe(plumber.stop())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.stream()));

/*-----------------------------------------------
|   Watching
-----------------------------------------------*/
gulp.task('watch', () => {
  gulp.watch('src/assets/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'watch', 'scss:dark'));
