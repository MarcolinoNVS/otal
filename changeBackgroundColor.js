// Função para alternar a cor de fundo
function changeBackgroundColor() {
  // Se a cor de fundo atual for branca, mude para azul; caso contrário, volte para branco
  const section = document.querySelector(".black-section");
  const currentColor = window
    .getComputedStyle(section, null)
    .getPropertyValue("background-color");

  if (currentColor === "rgb(255, 255, 255)") {
    section.style.backgroundColor = "black";
  } else {
    section.style.backgroundColor = "white";
  }
}
