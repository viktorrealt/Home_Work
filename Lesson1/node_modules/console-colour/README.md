[![NPM](https://nodei.co/npm/console-colour.png)](https://nodei.co/npm/console-colour/)

[![Build Status](https://travis-ci.org/ngot/console-colour.png?branch=master)](https://travis-ci.org/ngot/console-colour)

# Console Colour

`console-colour` is a small package that can be used with [node.js](http://nodejs.org) to control console output. The package can change the output text color.

###Installation

Install with [npm](http://npmjs.org) to current directory:

```bash
  npm install console-colour --save
```

###Usage
`require` package into your project:
```js
  require('console-colour')(String);
```
or
`require` package into your project:
```js
  var cconsole = require('console-colour').color;
```

###Examples
```js
  console.log("bold".bold);
  console.log(cconsole.bold("bold"));
```
It will print the string `bold` in bold at terminal.

For more usage ,please see `examples/examples.js`.

###LICENSE
#####MIT
