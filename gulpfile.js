const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();


function styleFormation()
{
    return gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./styles/'))
    .pipe(sync.stream());
}

function autoWatcher()
{
    sync.init(
    {
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./styles/*.scss', styleFormation);
    gulp.watch('./*.hmml').on('change', sync.reload);
}

exports.watch = autoWatcher;
exports.style = styleFormation;