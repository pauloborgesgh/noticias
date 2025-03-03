// Dados das notícias
const noticias = [
  {
    id: 1,
    titulo: "Governo anuncia novo pacote de investimentos em infraestrutura",
    categoria: "politica",
    imagem: "https://via.placeholder.com/300x200",
    data: "14 de agosto de 2025",
    resumo: "O governo federal anunciou hoje um novo pacote de investimentos em infraestrutura que deve injetar R$ 100 bilhões na economia nos próximos anos."
  },
  {
    id: 2,
    titulo: "Time brasileiro conquista título internacional inédito",
    categoria: "esportes",
    imagem: "https://via.placeholder.com/300x200",
    data: "13 de agosto de 2025",
    resumo: "Em uma final emocionante, o time brasileiro superou o adversário e conquistou um título internacional inédito para o país."
  },
  {
    id: 3,
    titulo: "Empresa brasileira lança aplicativo inovador de inteligência artificial",
    categoria: "tecnologia",
    imagem: "https://via.placeholder.com/300x200",
    data: "12 de agosto de 2025",
    resumo: "Startup brasileira desenvolveu um aplicativo que utiliza inteligência artificial para ajudar pessoas com deficiência visual a navegar em ambientes urbanos."
  },
  {
    id: 4,
    titulo: "Festival de cinema nacional bate recorde de público",
    categoria: "entretenimento",
    imagem: "https://via.placeholder.com/300x200",
    data: "11 de agosto de 2025",
    resumo: "A edição deste ano do festival de cinema nacional bateu recorde de público, com mais de 500 mil espectadores em todo o país."
  },
  {
    id: 5,
    titulo: "Novas medidas econômicas são aprovadas pelo Congresso",
    categoria: "politica",
    imagem: "https://via.placeholder.com/300x200",
    data: "10 de agosto de 2025",
    resumo: "O Congresso Nacional aprovou um pacote de medidas econômicas que visa estimular o crescimento e reduzir a inflação nos próximos meses."
  },
  {
    id: 6,
    titulo: "Atleta brasileiro quebra recorde mundial em competição",
    categoria: "esportes",
    imagem: "https://via.placeholder.com/300x200",
    data: "9 de agosto de 2025",
    resumo: "O atleta brasileiro superou o recorde mundial que estava em vigor há mais de uma década, estabelecendo uma nova marca histórica para o esporte."
  },
  {
    id: 7,
    titulo: "Nova tecnologia de energia renovável é desenvolvida por universidade brasileira",
    categoria: "tecnologia",
    imagem: "https://via.placeholder.com/300x200",
    data: "8 de agosto de 2025",
    resumo: "Pesquisadores de uma universidade brasileira desenvolveram uma nova tecnologia de energia renovável que promete reduzir custos e aumentar a eficiência."
  },
  {
    id: 8,
    titulo: "Filme nacional é selecionado para festival internacional",
    categoria: "entretenimento",
    imagem: "https://via.placeholder.com/300x200",
    data: "7 de agosto de 2025",
    resumo: "Um filme produzido no Brasil foi selecionado para participar de um dos mais prestigiados festivais de cinema do mundo."
  },
  {
    id: 9,
    titulo: "Pesquisa revela aumento na aprovação do governo",
    categoria: "politica",
    imagem: "https://via.placeholder.com/300x200",
    data: "6 de agosto de 2025",
    resumo: "Uma pesquisa recente mostrou que a aprovação do governo atual aumentou significativamente nos últimos três meses."
  }
];

// Função para criar um card de notícia
function criarCardNoticia(noticia) {
  return `
    <article class="news-card" data-id="${noticia.id}" data-category="${noticia.categoria}">
      <img src="${noticia.imagem}" alt="${noticia.titulo}" />
      <div class="news-content">
        <span class="category ${noticia.categoria}">${formatarCategoria(noticia.categoria)}</span>
        <h3>${noticia.titulo}</h3>
        <p class="date">${noticia.data}</p>
        <p>${noticia.resumo}</p>
        <a href="#" class="read-more">Leia mais</a>
      </div>
    </article>
  `;
}

// Função para formatar o nome da categoria
function formatarCategoria(categoria) {
  const categorias = {
    politica: "Política",
    esportes: "Esportes",
    tecnologia: "Tecnologia",
    entretenimento: "Entretenimento"
  };
  
  return categorias[categoria] || categoria;
}

// Função para carregar as notícias
function carregarNoticias(categoria = 'all') {
  const container = document.getElementById('news-container');
  container.innerHTML = '';
  
  let noticiasFiltradas = noticias;
  
  if (categoria !== 'all') {
    noticiasFiltradas = noticias.filter(noticia => noticia.categoria === categoria);
  }
  
  noticiasFiltradas.forEach(noticia => {
    container.innerHTML += criarCardNoticia(noticia);
  });
}

// Função para lidar com o envio do formulário de newsletter
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  alert(`Obrigado por se inscrever! Um e-mail de confirmação foi enviado para ${email}.`);
  event.target.reset();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Carregar todas as notícias inicialmente
  carregarNoticias();
  
  // Adicionar event listeners para os links de categoria
  const categoryLinks = document.querySelectorAll('nav a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remover classe active de todos os links
      categoryLinks.forEach(l => l.classList.remove('active'));
      
      // Adicionar classe active ao link clicado
      link.classList.add('active');
      
      // Carregar notícias da categoria selecionada
      const categoria = link.getAttribute('data-category');
      carregarNoticias(categoria);
    });
  });
  
  // Adicionar event listener para o formulário de newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
  
  // Adicionar event listeners para os botões "Leia mais"
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more')) {
      e.preventDefault();
      const article = e.target.closest('.news-card') || e.target.closest('.featured-article');
      if (article) {
        const id = article.getAttribute('data-id');
        alert(`Você clicou para ler a notícia completa com ID: ${id || 'destaque'}`);
      }
    }
  });
});