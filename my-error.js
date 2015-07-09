var util = require('util');
 
function MyError(message) {
  if (!(this instanceof MyError))
    return new MyError(message);
    
  Error.captureStackTrace(this, this.constructor);
  
  this.name = this.constructor.name;
  this.message = message;
};
util.inherits(MyError, Error);
module.exports = MyError;


MyError.prototype.toString = function() {
  return this.name + ': ' + this.message;
};
