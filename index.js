const clock = document.querySelector(".clock")

const time = () => {
  const now = new Date()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()

  let html = `
      <span>${hour}</span> :
      <span>${min}</span> :
      <span>${sec}</span>
`
  clock.innerHTML = html
}

setInterval(time, 1000)
