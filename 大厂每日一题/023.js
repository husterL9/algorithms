//https://jishuin.proginn.com/p/763bfbd67a9b
//https://fairyly.github.io/interview/3.3.1%20Async---Await%E5%8E%9F%E7%90%86.html#%E7%AE%80%E4%BB%8B
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57)

  // A..Z
  yield* generateSequence(65, 90)

  // a..z
  yield* generateSequence(97, 122)
}

let str = ''

for (let code of generatePasswordCodes()) {
  console.log(code)
  str += String.fromCharCode(code)
}
