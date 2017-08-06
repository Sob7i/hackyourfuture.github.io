
export default function Throttle (fn, wait) {
  let triggedAt = Date.now()
  return () => {
    if (triggedAt + wait - Date.now() > 0) return;

    fn()
    triggedAt = Date.now()
  }
}
