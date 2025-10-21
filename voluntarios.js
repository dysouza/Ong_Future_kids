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
    div.className = "oportunidade";
    div.innerHTML = `<h3>${o.titulo}</h3><p>${o.descricao}</p><span><strong>Área:</strong> ${o.area}</span>`;
    container.appendChild(div);
  });
}

document.getElementById("filtroArea").addEventListener("change", e => {
  renderizarOportunidades(e.target.value);
});

document.getElementById("formInscricao").addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const area = document.getElementById("area").value;
  const mensagem = document.getElementById("mensagem").value;

  const data = new Date().toLocaleDateString("pt-BR");

  localStorage.setItem("voluntario", JSON.stringify({ nome, email, area, mensagem, data }));

  document.getElementById("feedback").innerHTML = `<p>Obrigado, ${nome}! Sua inscrição foi recebida.</p>`;
  atualizarHistorico();
  gerarCertificado();
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
