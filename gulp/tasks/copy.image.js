'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src('./source/images/**/*.*', { since: $.gulp.lastRun('copy:image') })
		.pipe($.gp.tinypng('jPup9P5b2FIXn6LXRiOc7Gzh8kkuJ0ZM'))   
		.pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
