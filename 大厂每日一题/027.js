//使用 js 实现一个 lru cache
//leetcode 146. LRU 缓存
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  } else return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else {
    if (this.cache.entries().length >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
  this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
