var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('relink', function(cb) {
  // when developing in jspm use this to make changes linkable
  // in dependent project do:
  // jspm install --link react-router-component=github:wikifactory/react-router-component@master
  exec('jspm link github:wikifactory/react-router-component@master -y', function (err, stdout, stderr) {
    console.log(stdout) ;
    console.log(stderr);
    cb(err);
  });
  gulp.watch('**/*.js', ['relink']);
});
