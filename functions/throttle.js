
export default function Throttle (fn, wait) {
  let timeOut
  return () => {
    timeOut = null
    timeOut = setTimeout(fn, wait)
  }
}
