
const divtodosclientes = document.getElementById('todosclientes')


fetch('https://apidotiaw.daviaguilar1.repl.co/Usuarios')
  .then((response) => response.json())
  .then((data) => {
    let Usuarios = data;
    
    Usuarios.forEach((nome) => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-4');
      card.innerHTML +=
        `
      <img src="${nome.imagem}" alt="">
      <h1 class="titulo">${nome.nome}</h1>
      <a href="cliente.html?id=${nome.id}" class="text-dark" style="display: flex; justify-content: center;">Ver detalhes</a>
      `;

      divtodosclientes.appendChild(card);
    });
  });
  
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