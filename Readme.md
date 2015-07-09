# my-error

[![build](https://img.shields.io/travis/moshest/my-error.svg)](https://travis-ci.org/moshest/my-error)
[![npm](https://img.shields.io/npm/v/my-error.svg)](https://npmjs.org/package/my-error)
[![npm](https://img.shields.io/npm/dm/my-error.svg)](https://npmjs.org/package/my-error)
[![npm](https://img.shields.io/npm/l/my-error.svg)](LICENSE)


Custom Error class for `util.inherits`.

## Installation

```
npm install my-error --save
```

## Usage

```javascript
var MyError = require('my-error');


// create your custom error
function CodeError(code, message) {
  CodeError.super_.call(this, message);
  this.code = code;
}
util.inherits(CodeError, MyError);


// throw the error
var assert = require('assert');

try {
  throw new CodeError(404, 'Not Found!');
} catch (err) {
  assert(err instanceof CodeError);
  assert(err instanceof Error);

  assert.strictEqual(err.name, 'CodeError');
  assert.strictEqual(err.code, 404);
  assert.strictEqual(err.message, 'Not Found!');
}
```

## License

Copyright &copy; 2015 Moshe Simantov <ms@development.co.il>, 
[MIT License](LICENSE)

