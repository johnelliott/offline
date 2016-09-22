var level = require('level-browserify');
var hyperlog = require('hyperlog');
console.log('hello my scrip is working')

var db = level('hello-test');
var log = hyperlog(db);

log.createReadStream({ live:true })
  .on('data', function(data) {
    console.log('data', data);
  });
log.append('hello world loggy');
