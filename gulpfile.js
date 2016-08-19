'use strict';

console.log( "CALL gulpfile.js" );

var 

	gulp				= require('gulp'),
	plugins 			= require('gulp-load-plugins')(),
	install 			= require("gulp-install"),
	
end_base_module;

process.on('uncaughtException', function(error) {
	
	console.log( error );
	if( error.code === 'MODULE_NOT_FOUND' ){
		gulp.src([ __dirname + '/package.json']).pipe(install());
	} else {
		process.exit(1)	
	}	
	 
});


// global var

	global.gt_env 		= {};
	global.gt_env_name 	= "gulp-tool";

var 

	pty 				= require('pty.js'),
	shell 				= require('gulp-shell'),
	requireDir 		= require('require-dir'),
	
end_module;

//  ENV Load

	requireDir('/gulp-env/');

	
gulp.task('gt:dumy', function(done) {

	console.log( "CALL dumy task" );
	done();

});

gulp.task( 'gt:git:push', function(done) {
	
	console.log( 'CALL git:push' );
	
	var term = pty.spawn(	"git", 
						  	[ "push", "origin", "master" ],
							{
								cwd: "/work/",
								env: process.env,
								name: 'xterm-color', cols: 80, rows: 30,
							}
	);
	
	var out_data = "";
	
	term.on('data', function(data) {

		out_data += data;
		
		if( data.indexOf( "Username for" ) > -1 ) {
			term.write( gt_env[gt_env_name].username + "\n");
		}
		
		if( data.indexOf( "Password for" ) > -1 ) {
			term.write( gt_env[gt_env_name].password + "\n");
		}
		
	});
	
	term.on('close', function() {	});
	
	term.on('exit', function(code,signal) {

		if( code !== 0 ){
			console.log("term exit("+code+") out = " + out_data );
		}
		
		done();
	});

})

gulp.task('gt:push', 
	gulp.series( 
	
		function(done) {
			console.log( 'RUN gt:push' );
			done();
		},
		
		shell.task( ['git config --global user.name "' + gt_env[gt_env_name].github.username + '"' ], 
		            { verbose : true , 
					  cwd : "/work/"  
					} 
				  ),

		shell.task( ['git config --global user.email "' + gt_env[gt_env_name].github.email + '"' ], 
		            { verbose : true , 
					  cwd : "/work/"  
					} 
				  ),
		
		shell.task( ['git add --all'], 
		            { verbose : true , 
					  cwd : "/work/"  
					} 
				  ),
				  
		shell.task( ['git commit -a -m "backup"'], 
		            { verbose : true , 
					  cwd : "/work/", 
					  ignoreErrors : true  
					} 
				  ),
				  
		'gt:git:push',		  
				  
		function(done) {
			console.log( 'gt:push success.' );
			done();
		}
	)
);

gulp.task('gt:update', 
	gulp.series( 
	
		function(done) {
			console.log( 'RUN gt:update' );
			done();
		}, 
	
		shell.task( ['git reset --hard HEAD'], 
		            { verbose : true , 
					  cwd : "/gulp-tool/"  
					} 
				  ),

		shell.task( ['git pull origin master'], 
		            { verbose : true , 
					  cwd : "/gulp-tool/"  
					} 
				  ),
				  
		function(done) {
			console.log( 'gt:update success.' );
			done();
		}

	)
);	

//  User Task

//	requireDir( __dirname + '/gulp_tasks/', {recurse: true} );


gulp.task('default', function(done) {

	console.log( "welcome gulp-tool" );
	done();

});


