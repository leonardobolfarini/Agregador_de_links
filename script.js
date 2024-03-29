function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Leonardo Bolfarini de agasalho, tirada em um espelho de frente."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Leonardo Bolfarini com uma blusa branca, e um espelho atrás refletindo a parte traseira de sua cabeça e blusa."
    )
  }
}
