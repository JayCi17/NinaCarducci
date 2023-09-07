const {src, dest}= require("gulp");
const sharpResponsive = require("gulp-sharp-responsive") ;
const CleanCSS = require("gulp-clean-css");
const terser = require ("gulp-terser");
const img = () => src(["./assets/images/*.{png,jpg,webp}", "./assets/images/gallery/**/*.{jpg,png,webp,avif}", "./assets/images/slider/*.{jpg,png,webp}","./assets/images/*.{jpg,png,webp}",])

.pipe(sharpResponsive({
    formats : [
        {width: 270, format: "webp", rename:{suffix:"-sm2"}},
        {width:400,format:"webp", rename:{suffix:"-md4"}},
        {width:560,format:"webp", rename:{suffix:"-md5"}},
        {width: 1920,format:"webp",rename:{suffix:"-lg"}},
    ]
}))

.pipe(dest("./assets/images"));

function minifyCss(){
    return src(["./assets/*.css", "./assets/bootstrap/*.css"])
    .pipe(CleanCSS())
    .pipe(dest("./assets"))
}

function minifyJs(){
    return src("./assets/bootstrap/*.js")
    .pipe(terser())
    .pipe(dest("./assets/bootstrap"))
}

module.exports = {
    img,
    minifyCss,
    minifyJs,
};