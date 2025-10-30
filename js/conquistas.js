const conquistas = [
  {
    badge: "👧 Educação",
    texto: "Mais de <strong>12 mil crianças e adolescentes</strong> atendidos em projetos educacionais, culturais e sociais."
  },
  {
    badge: "📜 Reconhecimento",
    texto: "<strong>Reconhecimento oficial</strong> como entidade de utilidade pública municipal desde 2018."
  },
  {
    badge: "🌱 Liderança",
    texto: "Criação do projeto <strong>“Jovens Protagonistas”</strong>, com mais de 800 líderes comunitários formados."
  },
  {
    badge: "🏫 Parcerias",
    texto: "<strong>Parcerias com 25 escolas públicas</strong> para atividades extracurriculares e apoio pedagógico."
  },
  {
    badge: "🎭 Cultura",
    texto: "Realização de <strong>60 espetáculos culturais</strong> com participação ativa dos jovens atendidos."
  },
  {
    badge: "📚 Acesso",
    texto: "Instalação de <strong>10 bibliotecas comunitárias</strong> em regiões periféricas. Conquistando cada vez mais espaço."
  },
  {
    badge: "🏆 Destaque",
    texto: "Recebimento do <strong>Prêmio Nacional de Inovação Social</strong> em 2022 pelo projeto “Educação que Acolhe”."
  },
  {
    badge: "🎒 Inclusão",
    texto: "Distribuição de mais de <strong>20 mil kits escolares e culturais</strong> por meio de campanhas de arrecadação."
  }
];

function renderConquistas() {
  const container = document.getElementById("conquistas");
  container.innerHTML = `
    <div class="institucional-texto">
      <h2>Conquistas</h2>
      <ul>
        ${conquistas.map(item => `<li><span class="badge">${item.badge}</span> ${item.texto}</li>`).join("")}
      </ul>
    </div>
    <div class="institucional-imagem">
      <img src="imagensinstitucional/Conquistas.png" alt="Jovens celebrando conquistas educacionais" />
    </div>
  `;
}

window.addEventListener("load", renderConquistas);
