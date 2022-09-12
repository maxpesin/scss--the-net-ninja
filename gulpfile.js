const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildSass() {
    //return src('index.scss')
    //return src('*.scss')
    return src('clientLibs/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchSass() {
    //watch(['index.scss'], buildSass)
    //watch(['*.scss'], buildSass)
    watch(['clientLibs/**/*.scss'], buildSass)

}

exports.default = series(buildSass, watchSass)