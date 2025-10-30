document.getElementById("formDoacao").addEventListener("submit", function (e) {
  e.preventDefault();

  const valor = parseFloat(document.getElementById("valor").value.trim());
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagemDoacao");
  const toast = document.getElementById("toastDoacao");

  let erros = [];

  // Validação dos campos
  if (isNaN(valor) || valor <= 0) {
    erros.push("⚠️ Informe um valor válido para doação.");
  }
  if (nome === "") {
    erros.push("⚠️ O campo Nome é obrigatório.");
  }
  if (email === "") {
    erros.push("⚠️ O campo E-mail é obrigatório.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    erros.push("⚠️ O e-mail informado não é válido.");
  }

  if (erros.length > 0) {
    mensagem.innerHTML = erros.map(msg => `<p style="color: var(--color-error); font-weight: bold;">${msg}</p>`).join("");
    toast.style.display = "none";
    return;
  }

  // Atualiza progresso e exibe sucesso
  const valorAtual = 7200 + valor;
  const porcentagem = Math.min((valorAtual / 10000) * 100, 100);

  document.getElementById("barraProgresso").style.width = porcentagem + "%";
  document.getElementById("valorAtual").textContent = "R$ " + valorAtual.toFixed(2);
  mensagem.innerHTML = `<p style="color: var(--color-success); font-weight: bold;">Obrigado, ${nome}! Sua doação de R$ ${valor.toFixed(2)} foi registrada com sucesso.</p>`;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
    document.getElementById("formDoacao").reset();
  }, 3000);
});
