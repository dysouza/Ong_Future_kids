let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Inicia o slideshow automaticamente
showSlide(slideIndex);
setInterval(nextSlide, 5000); // troca a cada 5 segundos

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
