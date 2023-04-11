class EventBus {
  constructor() {
    this.events = new Map()
  }
  pub(eventName) {
    let set = this.events.get(eventName)
    set.forEach((cb) => {
      cb()
    })
  }
  sub(eventName, cb) {
    let set = this.events.get(eventName) || new Set()
    set.add(cb)
  }
}
