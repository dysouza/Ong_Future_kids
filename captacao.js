 document.getElementById("formDoacao").addEventListener("submit", function (e) {
      e.preventDefault();
      const valor = parseFloat(document.getElementById("valor").value);
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;

      if (valor && nome && email) {
        const valorAtual = 7200 + valor;
        const porcentagem = Math.min((valorAtual / 10000) * 100, 100);

        document.getElementById("barraProgresso").style.width = porcentagem + "%";
        document.getElementById("valorAtual").textContent = "R$ " + valorAtual.toFixed(2);
        document.getElementById("mensagemDoacao").innerHTML = `<p>Obrigado, ${nome}! Sua doação de R$ ${valor.toFixed(2)} foi registrada com sucesso.</p>`;
        document.getElementById("formDoacao").reset();
      }
    });