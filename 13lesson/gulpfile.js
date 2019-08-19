var gulp = require('gulp'),
    browserSync = require('browser-sync');
    
gulp.task('css', function(){
	return gulp.src('src/css/*.css')  
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('src/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	   browserSync( {
	   	server: {
	   		baseDir: 'src'
	   	},
	   	notify: false
	   });
});

gulp.task('watch', function(){
	 gulp.watch('src/css/*.css', gulp.parallel('css'));
	 gulp.watch('src/*.html', gulp.parallel('html'));// Наблюдение з
    
});

gulp.task('default', gulp.parallel('css', 'browser-sync','watch'));