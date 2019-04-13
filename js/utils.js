function throttle(fn, limit = 0) {
  let wait = false

  return (...args) => {
    if (!wait) {
      fn.apply(this, args)

      wait = true

      setTimeout(() => {
        wait = false
      }, limit)
    }
  }
}

function debounce(fn, wait = 0) {
  let timer = null

  return (...args) => {
    clearTimeout(timer)

    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}
