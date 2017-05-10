'use strict';

var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var merge = require('merge-stream');


module.exports = function() {
  $.gulp.task('sprite', function () {

  var spriteData = $.gulp.src('./source/images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe($.gp.imagemin())
    .pipe($.gulp.dest($.config.root + '/assets/img'))

  var cssStream = spriteData.css
    .pipe($.gp.csso())
    .pipe($.gulp.dest($.config.root + '/assets/css'))

  return merge(imgStream, cssStream);
  });

};