const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildSass() {
    //return src('index.scss')
    //return src('*.scss')
    return src('clientLibs/**/*.scss')
    .pipe(sass())
    // used for purgecss plugin
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchSass() {
    //watch(['index.scss'], buildSass)
    //watch(['*.scss'], buildSass)
    // watch scss and all html tiles
    watch(['clientLibs/**/*.scss', '*.html'], buildSass)

}

exports.default = series(buildSass, watchSass)