const projetos = [
  {
    nome: "Projeto Alfabetizar",
    categoria: "educacao",
    descricao: "Apoio à alfabetização de crianças em fase inicial.",
  },
  {
    nome: "Projeto Movimento",
    categoria: "esporte",
    descricao: "Atividades físicas e recreativas para desenvolvimento motor.",
  },
  {
    nome: "Projeto Arte Livre",
    categoria: "cultura",
    descricao: "Expressão artística e oficinas de criatividade.",
  }
];

function renderizarProjetos(categoria = "todos") {
  const container = document.getElementById("listaProjetos");
  container.innerHTML = "";

  const filtrados = categoria === "todos"
    ? projetos
    : projetos.filter(p => p.categoria === categoria);

  filtrados.forEach(p => {
    const div = document.createElement("div");
    div.className = "projeto";
    div.innerHTML = `<h3>${p.nome}</h3><p>${p.descricao}</p><span class="tag">${p.categoria}</span>`;
    container.appendChild(div);
  });
}

document.getElementById("filtroCategoria").addEventListener("change", e => {
  renderizarProjetos(e.target.value);
});

window.onload = () => renderizarProjetos();
