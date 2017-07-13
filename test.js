const perf = require('./index.js')

function test(m, n) {
  const o = {}
  for (i=0; i < m; i++) {
    for(j=0; j < n; j++) {
      o[i + j] =j
    }
  }
}

console.log(perf(test)(100000,10000))
