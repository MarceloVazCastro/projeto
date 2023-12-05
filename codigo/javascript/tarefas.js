// Popup cadastro
let fundopopup = document.getElementById("popup-overlay");
let popup = document.getElementById("popup");
let btncadastroTarefa = document.getElementById("btncadastro-tarefa");
let btnvoltar = document.getElementById("btnvoltar");

btncadastroTarefa.addEventListener("click", openPopup);
btnvoltar.addEventListener("click", closePopup);

let btnenviotarefa = document.getElementById("enviar-tarefa");
btnenviotarefa.addEventListener("click", function(event) {
  if (validarFormulario()) {
    salvaTarefa(event);
    closePopup();
  } else {
    event.preventDefault();
  }
});

function openPopup() {
  popup.classList.add("open-popup");
  fundopopup.classList.add("popup-overlay-fundo");
}

function closePopup() {
  popup.classList.remove("open-popup");
  fundopopup.classList.remove("popup-overlay-fundo");
}

// Salvar tarefa
async function salvaTarefa(event) {
  event.preventDefault();

  var desctarefa = document.getElementById("tarefa").value;
  var data = document.getElementById("data").value;
  var profissao = document.getElementById("selectbox").value;
  var telcontato = document.getElementById("TelefoneContato").value;


  try {
    const response = await fetch('https://apidotiaw.daviaguilar1.repl.co/Tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        desctarefa,
        data,
        profissao,
        telcontato,
      }),
    });

    if (response.ok) {
      CriadorCard(await response.json());
      console.log('Tarefa salva com sucesso.');
      document.getElementById("tarefa").value = "";
      document.getElementById("data").value = "";
      document.getElementById("profissao").value = "";
      document.getElementById("TelefoneContato").value = "";
    } else {
      console.log('Erro ao salvar a tarefa:', response.status);
    }
  } catch (error) {
    console.error('Erro ao salvar a tarefa:', error);
  }
}

const listatarefas = document.getElementById("lista-tarefas");

function formatarData(data) {
  const partes = data.split("-");
  const dia = partes[2];
  const mes = partes[1];
  const ano = partes[0];
  return `${dia}/${mes}/${ano}`;
}

document.addEventListener("DOMContentLoaded", async function() {
  try {
    const response = await fetch('https://apidotiaw.daviaguilar1.repl.co/Tarefas');
    if (response.ok) {
      const tarefas = await response.json();
      tarefas.forEach(function(tarefa) {
        const card = criarCard(tarefa);
        listatarefas.appendChild(card);
      });
    } else {
      console.log('Erro ao obter as tarefas:', response.status);
    }
  } catch (error) {
    console.error('Erro ao obter as tarefas:', error);
  }
});

function CriadorCard(tarefa) {
  const card = criarCard(tarefa);
  listatarefas.appendChild(card);
}

function criarCard(tarefa) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-header">
      <h4>${tarefa.desctarefa}</h4>
      <p>Data limite: ${formatarData(tarefa.data)}</p>
      <p>Profissão procurada: ${tarefa.profissao}</p>
      <a style="color:aqua;" href="https://wa.me/${tarefa.telcontato}" target="_blank">Telefone de contato:<br> ${tarefa.telcontato}</a>
      <p >ID da tarefa: ${tarefa.id}</p>
      <button class="btn btn-danger" onclick="excluirCard(${tarefa.id})">Excluir</button>
    </div>
  `;
  return card;
}

function validarFormulario() {
  var desctarefa = document.getElementById("tarefa").value;
  var data = document.getElementById("data").value;
  var profissao = document.getElementById("selectbox").value;
  var TelefoneContato = document.getElementById("TelefoneContato").value;

  if (desctarefa.trim() === "" || data.trim() === "" || profissao.trim() === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }

  return true;
}

async function excluirCard(idCard) {
  try {
    const response = await fetch(`https://apidotiaw.daviaguilar1.repl.co/Tarefas/${idCard}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      const card = document.getElementById(`card-${idCard}`);
      if (card) {
        card.remove();
        console.log(`Card com o ID ${idCard} excluído com sucesso.`);
      } else {
        console.error(`Não foi possível encontrar o Card com o ID ${idCard}.`);
      }
    } else {
      console.error(`Erro ao excluir a tarefa: ${response.status}`);
    }
  } catch (error) {
    console.error('Erro ao excluir a tarefa:', error);
  }
  location.reload();
}

const selectProfissao = document.getElementById('selectbox')

fetch('https://apidotiaw.daviaguilar1.repl.co/Profissoes')
.then((response) => response.json())
.then((data) => {
  let profissoes = data;
  profissoes.forEach((profissao) => {
    var option = document.createElement('option');
    option.value = `${profissao.Profissao}`;
    option.text = `${profissao.Profissao}` ;
    selectProfissao.appendChild(option);
    })
    })
