const btnAbrir = document.getElementById("btn-relatorios");
const btnFechar = document.getElementById("btn-esconder-relatorios");
const relatorios = document.getElementById("relatorios");

// Mostrar relatórios
btnAbrir.addEventListener("click", () => {
  relatorios.classList.remove("escondido");
  btnAbrir.classList.add("escondido");
  btnFechar.classList.remove("escondido");
  relatorios.scrollIntoView({ behavior: "smooth" });
});

// Esconder relatórios
btnFechar.addEventListener("click", () => {
  relatorios.classList.add("escondido");
  btnFechar.classList.add("escondido");
  btnAbrir.classList.remove("escondido");
});
