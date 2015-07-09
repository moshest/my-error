process.env.NODE_ENV = 'test';

var util = require('util');
var assert = require('assert');
var MyError = require('../my-error');
	
describe('trivial', function() {
  
	describe('constructor', function() {
    
    it('should create', function() {
      var err = new MyError('abc!');
      assert(err instanceof MyError);
      assert(err instanceof Error);
      assert(util.isError(err));
      
      assert.strictEqual(err.name, 'MyError');
      assert.strictEqual(err.message, 'abc!');
      
      assert.strictEqual(err.toString(), 'MyError: abc!');
    });

    it('should create without new', function() {
      var err = MyError('abc!');
      assert(err instanceof MyError);
      
      assert.strictEqual(err.name, 'MyError');
      assert.strictEqual(err.message, 'abc!');
    });
    
  });
  
	describe('throws', function() {
    it('throw stack', function() {
      try {
        throw new MyError('throw stack error');
      } catch (err) {
        assert(err instanceof MyError);
        assert(err.stack);
        
        assert.strictEqual(err.stack.split('\n')[0], err.toString());
      }
    });
    
  });
  
	describe('inherits', function() {
    
    it('should inherits', function() {
      function MyCustomError(code, message) {
        MyCustomError.super_.call(this, message);
        this.code = code;
      }
      util.inherits(MyCustomError, MyError);
      
      var err = new MyCustomError(123, 'abc!');
      
      assert(err instanceof MyCustomError);
      assert(err instanceof MyError);
      
      assert.strictEqual(err.name, 'MyCustomError');
      assert.strictEqual(err.message, 'abc!');
      assert.strictEqual(err.code, 123);
    });
    
  });
});