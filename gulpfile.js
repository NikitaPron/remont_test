const { src, dest, watch, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const sync = require('browser-sync').create()
const htmlmin = require('gulp-htmlmin')
const postcss = require('gulp-postcss');
const fontmagic = require('postcss-font-magician');
const htmlhint = require("gulp-htmlhint");

function html() {
    return src('src/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlmin({
        collapseWhitespace: true
      }))
    .pipe(dest('build/'));
}

function javascript() {
  return src('src/**/*.js')
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(dest('build/'));
}

function clear() {
    return del('build')
}

function css() {
    const plugins = [
        fontmagic({
            display: 'swap'
        })
    ];

    return src('src/**/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 100 versions'],
        cascade: false
    }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(dest('build'));
}

function images() {
  return src('src/img/**/*.*')
  .pipe(dest('build/img'));
}

function serve() {
    sync.init({
      server: './build'
    })
  
    watch('src/**/*.*', series(clear, html, javascript, css, images)).on('change', sync.reload)
  }

 exports.default = series(clear, html, javascript, css, images);
 exports.serve = series(clear, html, css, javascript, images, serve);
 exports.build = series(clear, html, javascript, css, images);