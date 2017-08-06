let cbTimeout
let animation
let pause = false
function tick (cb, interval, start, timestamp) {
  let isInterval = ((timestamp % interval) === 0) === false

  if (cbTimeout) clearTimeout(cbTimeout)
  if (pause) return
  cb()
  cbTimeout = setTimeout(() => {
    animation = requestAnimationFrame(tick.bind(null, cb, interval, start))
  }, interval)
}

function anim (cb, interval) {

  this.play = () => {
    pause = false
    animation = requestAnimationFrame(
      tick.bind(null, cb, interval, Date.now())
    )
  }

  this.pause = () => {
    pause = true
    clearTimeout(cbTimeout)
    cancelAnimationFrame(animation)
  }

  this.animation = animation

  this.play()

  return this
}

export default anim
