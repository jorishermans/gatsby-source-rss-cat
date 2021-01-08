var request = require("request");
var FeedParser = require("feedparser");
require("core-js/es6/promise");
 
function FeedRetrieval(opts) {
  this.resolve(opts);
}
 
FeedRetrieval.prototype.resolve = function(opts) {
  opts = opts || {};
  this.url = opts.url || "";
  this.platform = opts.platform || "";
}
 
FeedRetrieval.prototype.request = function(opts) {
  this.resolve(opts);
  var _this = this;
  console.log(this.url);
  console.log('use a promise');
  return new Promise(function(resolve, reject){
    _this._request(resolve, reject);
  });
}
 
FeedRetrieval.prototype._request = function(callback, onError) {
  var items = [], _this = this;
  request(this.url)
    .on('error', onError)
    .pipe(new FeedParser())
    .on('error', onError)
    .on('readable', function() {
      var stream = this, item;
      while (item = stream.read()) {
        item.platform = _this.platform;
        items.push(item, _this.platform);
      }
    }).on('finish', function() {
      callback(items);
    });
}
 
module.exports = FeedRetrieval;