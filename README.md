# perf-function

Test function excuation time.

## Install

```
npm install perf-function
```

## Usage

```
const perf = require('perf-function')

function test(m, n) {
  const o = {}
  for (i=0; i < m; i++) {
    for(j=0; j < n; j++) {
      o[i + j] =j
    }
  }
}

console.log(perf(test)(100000,10000)) // return millseconds
```

If you want measure function execution time in browswer, simple add folowing
code, then `perf` your function.

You can copy and test below code in your broswer console:

```
function perf(fn) {
  const start = performance.now()
  return function () {
    fn.apply(null, arguments)
    const end = performance.now()
    return end - start
  }
}

// then

function test(m, n) {
  const o = {}
  for (i=0; i < m; i++) {
    for(j=0; j < n; j++) {
      o[i + j] =j
    }
  }
}

console.log(perf(test)(10000,10000)) // return millseconds, example: 1037.615

```
