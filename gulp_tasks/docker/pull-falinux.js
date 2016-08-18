var 

    gulp				= require('gulp'),
	shell 				= require('gulp-shell'),
	
end_require= true;

gulp.task('docker-pull-falinux', 
	gulp.series( 
	
		function(done) {
			console.log( 'docker pull for falinux' );
			done();
		}, 
		gulp.parallel( 
	
			shell.task( ['docker pull falinux/gulp-kor']	, 
						{ verbose : true, ignoreErrors : true }),
			shell.task( ['docker pull falinux/gulp-tool'], 
						{ verbose : true, ignoreErrors : true }),
			shell.task( ['docker pull falinux/mongodb']	, 
						{ verbose : true, ignoreErrors : true }),
			shell.task( ['docker pull falinux/loopback']	, 
						{ verbose : true, ignoreErrors : true })
		),
				  
		function(done) {
			console.log( 'docker pull for falinu : success.' );
			done();
		}

	)
);

