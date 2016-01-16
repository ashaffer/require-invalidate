
# require-invalidate

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Invalidate a dependency and all the files that depend on it.

## Installation

    $ npm install require-invalidate

## Usage

Useful for doing hot code reloading on the server in a much lighter-weight way than other solutions.

```javascript
var invalidate = require('require-invalidate')

bundle
  .on('update', function (changed) {
    changed.forEach(function (dep) {
      requireInvalidate(dep)
    })

    app = require('./app')
  })

app.use(function *() {
  this.body = yield(app(this.req))
})
```

## API

### invalidate(moduleId, root)

 * `moduleId` - The path to the module as you would write in in a `require`. E.g. `invalidate('./app')`
 * `root` - Optional. If specified, the point at which to stop reloading. As in, only reload parents up to this point in the tree. If not specified, everything up to the root will be reloaded.

*Returns:* void

## License

The MIT License

Copyright &copy; 2016, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
