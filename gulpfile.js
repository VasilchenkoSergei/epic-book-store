// 'use strict';

// const gulp = require('gulp');
// const plumber = require('gulp-plumber');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const browserSync = require('browser-sync').create();
// const del = require('del');
// const pug = require('gulp-pug');
// const htmlbeautify = require('gulp-html-beautify');


// gulp.task('default', ['sass'], function() {
//     browserSync.init({
//         server: 'src'
//     });

//     gulp.watch('src/**/*.scss', ['sass']);
//     gulp.watch('src/**/*.pug').on('change', browserSync.reload);
//     gulp.watch('src/js/*.js').on('change', browserSync.reload);
// });


// gulp.task('pug', function() {
//   return gulp.src('src/pug/*.pug')
//       .pipe(plumber())
//       .pipe(pug())
//       .pipe(htmlbeautify({
//         indentSize: 2,
//       }))
//       .pipe(gulp.dest('src/'))
//       .pipe(browserSync.stream());
// });


// gulp.task('sass', function() {
//     return gulp.src('src/scss/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('src/css/'))
//     .pipe(browserSync.stream());
// });




'use strict';

const { series, parallel, src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');
// const pug = require('gulp-pug');
const htmlbeautify = require('gulp-html-beautify');


function styles() {
  return src('./src/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 version']}),
    ]))
    .pipe(sourcemaps.write('/'))
    .pipe(dest('src/css/'))
    .pipe(browserSync.stream());
}
exports.styles = styles;

function clean() {
  return del('css/')
}

function serve() {
  browserSync.init({
    server: './src',
    startPath: 'index.html',
    open: false,
    port: 8080,
  });
  watch([
    './src/blocks/**/*.scss',
  ], { delay: 100 }, styles);
  watch('./src/*.html').on('change', browserSync.reload);
  watch('./js/*.js').on('change', browserSync.reload);
}

function pug() {
  return src('src/pug/*.pug')
      .pipe(plumber())
      .pipe(pug())
      .pipe(htmlbeautify({
        indentSize: 2,
      }))
      .pipe(gulp.dest('src/'))
      .pipe(browserSync.stream());
}

exports.default = series(clean, styles, serve, pug);