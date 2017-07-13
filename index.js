const isNode = typeof process === 'object' ? true : false

function _node(fn) {
  const start = process.hrtime()
  return function () {
    fn.apply(null, arguments)
    const end = process.hrtime(start)
    return (end[0] * 1e9 + end[1]) / 1e6
  }
}

function _browser(fn) {
  const start = performance.now()
  return function () {
    fn.apply(null, arguments)
    const end = performance.now()
    return end - start
  }
}

function perf(fn) {

  if (isNode) {
    return  _node(fn)
  } else {
    return _browser(fn)
  }
}


module.exports = perf
