const projetos = [
  {
    nome: "Projeto Alfabetizar",
    categoria: "Educação",
    descricao: `
      O Projeto Alfabetizar é uma iniciativa dedicada a transformar o futuro de crianças em fase inicial de aprendizado. Atuamos em comunidades com alto índice de vulnerabilidade social, oferecendo oficinas de leitura, escrita e interpretação de texto, conduzidas por educadores voluntários e especialistas em pedagogia infantil.

      As atividades incluem rodas de leitura interativas, jogos fonéticos, produção de pequenos textos e acompanhamento individualizado. Além disso, promovemos encontros com famílias para fortalecer o vínculo entre o aprendizado escolar e o ambiente doméstico.

      Nosso objetivo é garantir que cada criança desenvolva as habilidades básicas de comunicação, ampliando suas oportunidades educacionais e sociais. A alfabetização é a chave que abre portas para o conhecimento — e nós estamos aqui para entregá-la com carinho e dedicação.
    `
  },
  {
    nome: "Projeto Movimento",
    categoria: "Esporte",
    descricao: `
      O Projeto Movimento nasceu da convicção de que o esporte é uma ferramenta poderosa de inclusão, saúde e cidadania. Voltado para crianças e adolescentes, o projeto oferece atividades físicas regulares como futebol, vôlei, capoeira, dança e circuitos motores, adaptados para diferentes faixas etárias.

      Mais do que exercícios, promovemos valores como disciplina, respeito, cooperação e superação. Os participantes aprendem a trabalhar em equipe, lidar com desafios e celebrar conquistas coletivas. Também realizamos torneios internos, festivais esportivos e encontros com atletas convidados que compartilham suas trajetórias inspiradoras.

      O impacto vai além do campo: crianças mais confiantes, saudáveis e engajadas com sua comunidade. O Movimento é corpo, mente e coração em ação.
    `
  },
  {
    nome: "Projeto Arte Livre",
    categoria: "Cultura",
    descricao: `
      O Projeto Arte Livre é um espaço de criação, expressão e liberdade. Através de oficinas de pintura, teatro, música, dança e artesanato, oferecemos às crianças a oportunidade de explorar sua imaginação e desenvolver habilidades artísticas em um ambiente acolhedor e estimulante.

      Cada oficina é conduzida por artistas e educadores que incentivam a experimentação e o protagonismo criativo. Os participantes criam peças, composições e performances que são apresentadas em eventos culturais abertos à comunidade, como saraus, exposições e espetáculos.

      A arte aqui é ferramenta de transformação: ela fortalece a autoestima, estimula o pensamento crítico e conecta as crianças com suas raízes culturais. No Arte Livre, cada traço, cada nota e cada gesto é uma celebração da identidade e da diversidade.
    `
  }
];

function abrirModalProjetos() {
  const container = document.getElementById("conteudoProjetos");
  container.innerHTML = "";

  projetos.forEach(p => {
    const bloco = document.createElement("div");
    bloco.innerHTML = `
      <h3>${p.nome}</h3>
      <p><strong>Categoria:</strong> ${p.categoria}</p>
      <p>${p.descricao.trim().replace(/\n/g, "<br>")}</p>
    `;
    container.appendChild(bloco);
  });

  document.getElementById("modalProjetos").style.display = "block";
}

function fecharModalProjetos() {
  document.getElementById("modalProjetos").style.display = "none";
}
