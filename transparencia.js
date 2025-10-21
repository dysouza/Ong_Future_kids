    document.getElementById("formNewsletter").addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector("input").value;
      document.getElementById("mensagemNewsletter").innerHTML = `<p>Obrigado! ${email} foi adicionado à nossa lista de envio.</p>`;
      this.reset();
    });