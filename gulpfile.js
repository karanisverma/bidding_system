var gulp = require('gulp');
var minify = require('gulp-minifier');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gulpSequence = require('gulp-sequence');
// gulp task for SASS compliation
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
// watch SASS
gulp.task('sass:watch', function () {
  gulp.watch('./style/sass/**/*.scss', ['sass']);
});

// gulp task for web server
gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

// gulp task to minify css
gulp.task('mincss', function() {
  return gulp.src('./css/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('temp/css'));
});

// gulp task to minify css
gulp.task('minjs', function() {
  return gulp.src('./js/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('temp/js'));
});



gulp.task('style', function() {
  return gulp.src('./temp/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/prod/css/'));
}); 
gulp.task('scripts', function() {
  return gulp.src('./temp/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/prod/js/'));
});

// gulp.task('build', gulpSequence('mincss', 'minjs', 'style', 'scripts'));

// gulp.task('default',  function() {
//   gulp.watch(['./sass/**/*.scss','./js/**/*.js','./index.html'],['build']);
// });

// gulp.watch(['sass/*.scss','index.html','./js/**/*.js' ],)