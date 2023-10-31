document.getElementById("meuLink").addEventListener("click", function () {
  alert("Não precisava clicar ai!");
});

$(document).ready(function () {
  $("#toggleButton").click(function () {
    $("#conteudoOculto").slideToggle();
  });
});
