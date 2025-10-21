// Contador animado de indicadores
function contar(id, valorFinal, sufixo = '', duracao = 2000) {
  const elemento = document.getElementById(id);
  let valorAtual = 0;
  const incremento = valorFinal / (duracao / 50);

  const intervalo = setInterval(() => {
    valorAtual += incremento;
    if (valorAtual >= valorFinal) {
      valorAtual = valorFinal;
      clearInterval(intervalo);
    }
    elemento.textContent = Math.floor(valorAtual) + sufixo;
  }, 50);
}

window.onload = () => {
  contar('criancas', 120);
  contar('atividades', 350);
  contar('presenca', 92, '%');
};

// Filtro de projetos por categoria
document.addEventListener('DOMContentLoaded', () => {
  const filtro = document.getElementById('filtroCategoria');
  if (filtro) {
    filtro.addEventListener('change', function () {
      const categoriaSelecionada = this.value;
      const projetos = document.querySelectorAll('#projetos .projeto');

      projetos.forEach(projeto => {
        const categoria = projeto.getAttribute('data-categoria');
        projeto.style.display =
          categoriaSelecionada === 'todos' || categoria === categoriaSelecionada
            ? 'block'
            : 'none';
      });
    });
  }
});
