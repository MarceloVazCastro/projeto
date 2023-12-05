function search(event) {
  event.preventDefault();
  var searchTerm = document.getElementById("searchTerm").value.toLowerCase();
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var title = card.querySelector(".titulo").innerText.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

const cardsprofissoes = document.getElementById('cards-profissoes');

fetch('https://apidotiaw.daviaguilar1.repl.co/Profissoes')
  .then((response) => response.json())
  .then((data) => {
    let profissoes = data;
    
    profissoes.forEach((profissao) => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-4');
      card.innerHTML +=
        `
      <img src="${profissao.imagem}" alt="${profissao.Profissao}">
      <h1 class="titulo">${profissao.Profissao}</h1>
      <a href="profissao.html?servicos=${profissao.Profissao}" class="text-dark" style="display: flex; justify-content: center;">Ver detalhes</a>
      `;

      cardsprofissoes.appendChild(card);
    });
  });
