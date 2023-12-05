/*
- Author:Davi Aguilar
 - 
 - Date:22/06
 -
 - Function:Cadastrar os usuarios comuns 
 -
 - Updates:
     author:
     Date:
     updates description:
*/
/*
var clientes = [];
var verificacao = document.getElementById('formulariocad');


function cadastrarcliente() {
    event.preventDefault();

    console.log("O botão foi clicado!");
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    var tipoLocal = document.getElementById("tipolocal").value;
    var endereco = document.getElementById("endereco").value;
    var complemento = document.getElementById("complemento").value;
    var numcasa = document.getElementById("numerocasa").value;
    var bairro = document.getElementById("bairro").value;

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        cpf === "" ||
        senha === "" ||
        tipoLocal === "" ||
        endereco === "" ||
        complemento === "" ||
        numcasa === "" ||
        bairro === ""
    ) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    var cliente = {
        id: generateId(),
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        senha: senha,
        tipolocal: tipoLocal,
        endereco: endereco,
        complemento: complemento,
        numcasa: numcasa,
        bairro: bairro,
    };

    var clientesArmazenados = JSON.parse(localStorage.getItem("clientes"));

    if (!clientesArmazenados) {
        clientesArmazenados = [];
    }

    clientesArmazenados.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientesArmazenados));

    alert("Cliente cadastrado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("tipolocal").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("numerocasa").value = "";
    document.getElementById("bairro").value = "";
}


function generateId() {
    let id = 0;
    let dbClientes = localStorage.getItem("clientes");
    if (dbClientes) {
        var perfisClientes = JSON.parse(dbClientes);
        const ids = perfisClientes.map(perfil => perfil.id);
        id = Math.max(...ids) + 1;
    }
    return id;
}

var nomeempresa = document.getElementById("Click_Jobs");
nomeempresa.addEventListener('mouseenter', function () {
    this.style.color = 'white'
});

nomeempresa.addEventListener('mouseleave', function () {
    this.style.color = 'rgb(162,54,54)'
});

nomeempresa.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Pasta%20Davi/index.html";
});

var caixanome = document.getElementById("nome");
caixanome.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixanome.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixaemail = document.getElementById("email");
caixaemail.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixaemail.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixatelefone = document.getElementById("telefone");
caixatelefone.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixatelefone.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixacpf = document.getElementById("cpf");
caixacpf.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixacpf.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixasenha = document.getElementById("senha");
caixasenha.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixasenha.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixatipolocal = document.getElementById("tipolocal")
caixatipolocal.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixatipolocal.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixaendereco = document.getElementById("endereco")
caixaendereco.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixaendereco.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixabairro = document.getElementById("bairro")
caixabairro.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixabairro.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixacomplemento = document.getElementById("complemento")
caixacomplemento.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixacomplemento.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var caixanumero = document.getElementById("numerocasa")
caixanumero.addEventListener('mouseenter', function () {
    //quero deixar completamente visivel
    this.style.opacity = '1'
});
caixanumero.addEventListener('mouseout', function () {
    this.style.opacity = '0.9'
});

var botaocadastrar = document.getElementById("botaoSubmit")
botaocadastrar.addEventListener('mouseenter', function () {
    this.style.color = "white"
    this.style.backgroundColor = "blue"
});
botaocadastrar.addEventListener('mouseout', function () {
    this.style.color = "white"
    this.style.backgroundColor = "green"
});

*/


document.getElementById('cadastroForm').addEventListener('submit', function(event){
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    var tipoLocal = document.getElementById("tipolocal").value;
    var endereco = document.getElementById("endereco").value;
    var complemento = document.getElementById("complemento").value;
    var numcasa = document.getElementById("numerocasa").value;
    var bairro = document.getElementById("bairro").value;
    const imagem = '';    
    const texto = ''; 

    var dados = {
        nome : nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        senha: senha,
        tipoLocal: tipoLocal,
        endereco: endereco,
        complemento: complemento,
        numcasa: numcasa,
        bairro: bairro,
        imagem,
        texto
        
    }

    fetch('https://apidotiaw.daviaguilar1.repl.co/Usuarios/', {
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
            },
        body: JSON.stringify(dados)
    })
    .then(function(response) {
        if(response.ok) {
            document.getElementById('nome').value= "";
            document.getElementById('email').value="";
            document.getElementById('telefone').value ="";
            document.getElementById('cpf').value ="";
            document.getElementById('senha').value ="";
            document.getElementById('tipolocal').value="0";
            document.getElementById('endereco').value ="";
            document.getElementById('complemento').value ="";
            document.getElementById('numerocasa').value ="";
            document.getElementById('bairro').value ="";
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        }else {
            throw new Error('Erro na Requisição');
        }
        })

    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.error('Erro', error);
    });

    
})