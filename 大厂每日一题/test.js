async function a() {
  let res = await Promise.resolve('2')
  console.log(res)
}
a()
