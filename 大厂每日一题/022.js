var path = 'https://static-zh.wxb.com.cn/customer/form/2020/11/1758696796d.jpg'
function clipImage(path) {
  const canvas = document.createElement('canvas')
  var fa = document.getElementById('father')
  console.log(fa)
  fa.appendChild(canvas)
  canvas.width = 200
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  const img = document.createElement('img')
  img.src = path
  img.setAttribute('crossOrigin', 'Anonymous')
  img.onload = function () {
    ctx.drawImage(this, 50, 0, 200, 200)
    console.log(canvas.toDataURL())
  }
}
clipImage(path)
