const oportunidades = [
  { titulo: "Oficina de Leitura", area: "educacao", descricao: "Ajude crianças a desenvolverem o gosto pela leitura." },
  { titulo: "Organização de Evento", area: "eventos", descricao: "Auxilie na logística de eventos comunitários." },
  { titulo: "Produção de Conteúdo", area: "comunicacao", descricao: "Crie materiais para redes sociais e campanhas." }
];

function renderizarOportunidades(area = "todos") {
  const container = document.getElementById("listaOportunidades");
  container.innerHTML = "";

  const filtradas = area === "todos" ? oportunidades : oportunidades.filter(o => o.area === area);

  filtradas.forEach(o => {
    const div = document.createElement("div");
    div.className = "card-oportunidade";
    div.setAttribute("data-categoria", o.area);
    div.innerHTML = `
      <h3>${o.titulo}</h3>
      <p>${o.descricao}</p>
      <span class="badge">📘 ${o.area.charAt(0).toUpperCase() + o.area.slice(1)}</span>
      <button class="botao-inscricao">Inscrever-se</button>
    `;
    container.appendChild(div);
  });
}

document.getElementById("filtroArea").addEventListener("change", e => {
  renderizarOportunidades(e.target.value);
});

document.getElementById("formInscricao").addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const area = document.getElementById("area").value;
  const mensagem = document.getElementById("mensagem").value.trim();
  const feedback = document.getElementById("feedback");
  const toast = document.getElementById("toastSucesso");

  let erros = [];

  // Validação
  if (nome === "") erros.push("⚠️ O campo Nome é obrigatório.");
  if (email === "") {
    erros.push("⚠️ O campo E-mail é obrigatório.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    erros.push("⚠️ O e-mail informado não é válido.");
  }
  if (area === "") erros.push("⚠️ Selecione uma área de interesse.");
  if (mensagem === "") erros.push("⚠️ Escreva uma mensagem sobre seu interesse.");

  if (erros.length > 0) {
    feedback.innerHTML = erros.map(msg => `<p class="erro">${msg}</p>`).join("");
    toast.style.display = "none";
    return;
  }

  // Sucesso
  const data = new Date().toLocaleDateString("pt-BR");
  localStorage.setItem("voluntario", JSON.stringify({ nome, email, area, mensagem, data }));

  feedback.innerHTML = "";
  toast.style.display = "block";

  atualizarHistorico();
  gerarCertificado();

  setTimeout(() => {
    toast.style.display = "none";
    document.getElementById("formInscricao").reset();
  }, 3000);
});

function atualizarHistorico() {
  const dados = JSON.parse(localStorage.getItem("voluntario"));
  if (!dados) return;

  const container = document.getElementById("historicoVoluntario");
  container.innerHTML = `
    <p><strong>Nome:</strong> ${dados.nome}</p>
    <p><strong>Área:</strong> ${dados.area}</p>
    <p><strong>Data de inscrição:</strong> ${dados.data}</p>
    <p><strong>Motivação:</strong> ${dados.mensagem}</p>
  `;
}

function gerarCertificado() {
  const dados = JSON.parse(localStorage.getItem("voluntario"));
  if (!dados) return;

  document.getElementById("nomeCertificado").textContent = dados.nome;
  document.getElementById("areaCertificado").textContent = dados.area;
  document.getElementById("dataCertificado").textContent = dados.data;
}

window.onload = () => {
  renderizarOportunidades();
  atualizarHistorico();
  gerarCertificado();
};
