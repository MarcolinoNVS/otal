// script.js

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector("form[name='search']");
  const searchInput = document.querySelector("input[name='search']");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const searchTerm = searchInput.value;
    // Redirecionar para a página banco_de_dados.html com o termo de pesquisa como parâmetro
    if (searchTerm !== "") {
      window.location.href = "banco_de_dados.html?search=" + searchTerm;
    }
  });

  searchInput.addEventListener("focus", function () {
    if (searchInput.value === "Pesquisa no site") {
      searchInput.value = "";
    }
  });

  searchInput.addEventListener("blur", function () {
    if (searchInput.value === "") {
      searchInput.value = "Pesquisa no site";
    }
  });
});
