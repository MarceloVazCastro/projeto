





const inputname = document.getElementById('inputname');
const inputtext = document.getElementById('inputtext');
const form = document.getElementById('tamojanto');
const commentpost = document.getElementById('commentpost');
const comment = document.getElementById('comment'); 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let p = document.createElement('p');
  p.classList = 'flex-wrap text-wrap d-flex p-2';
  p.innerHTML = `<strong>${inputname.value}: </strong>${inputtext.value}`;
  nome = inputname.value
  texto = inputtext.value 
  console.log(nome);
  console.log(texto);
  var queryString = window.location.search;


var params = new URLSearchParams(queryString);

var id = params.get('id');
var Id = `2${id}`
  comentario =
  {
    Id,
    nome,
    texto
  }
  url = `https://apidotiaw.daviaguilar1.repl.co/Descricoes`
  fazpost(url,comentario)
  commentpost.appendChild(p);
  inputname.value = '';
  inputtext.value = '';

  inputname.focus();

 });

 var queryString = window.location.search;

// Cria um objeto URLSearchParams para lidar com a string de consulta
var params = new URLSearchParams(queryString);

// Obtém o valor do parâmetro 'id'
var provedorId = params.get('id');


 fetch(`https://apidotiaw.daviaguilar1.repl.co/Provedores/${provedorId}`)
 .then(res => res.json())
 .then(data => {
    
      console.log('galo')
       let APIresponse = data
       let email = APIresponse.email
       let nome = APIresponse.nome
       let telefone = APIresponse.telefone
       let servicos = APIresponse.servicos
       let descricao = APIresponse.texto
       let imagem = APIresponse.imagem
       let empresa = APIresponse.nomeEmpresaLoja
       let imgs =`<img src="${imagem}" alt="" id="capa" class="border rounded-3">
       <img src="${imagem}" class="rounded-circle" alt="" id="perfil">`
       
       
       a =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
     </svg>  <a id="hyperlink" href="../html/profissao.html?servicos=${servicos}" class="text-light my-3"> Voltar</a>`

       document.getElementById('nomedoprovedor').innerHTML = nome;
       document.getElementById('email').innerHTML = email;
       document.getElementById('telefone').innerHTML = telefone;
       document.getElementById('hyperlink').innerHTML = a;
       document.getElementById('descricao').innerHTML = descricao;
       document.getElementById('imgs').innerHTML = imgs;
       document.getElementById('nomeempresa').innerHTML = empresa;
 
 })
 function fazpost(url, comentario){
  console.log("body=", comentario)
 
 let request = new XMLHttpRequest()
 request.open("POST", url,true)
 request.setRequestHeader("Content-type", "application/json")
 request.send(JSON.stringify(comentario))

 request.onload= function(){
     console.log(this.responseText)
 }
 return request.responseText
  

 
 }
var str='';
 fetch(`https://apidotiaw.daviaguilar1.repl.co/Descricoes`)
 .then(res => res.json())
 .then(data => {
  let APIresponse = data;
    APIresponse.forEach((texto) => {
      
      console.log('galo')
       
       let id2 = texto.Id
       if(id2===`2${provedorId}`)
       {
       
       
       str +=`<p class="col-12"><strong>${texto.nome}</strong>: ${texto.texto}</p>`;
       }
       
    });
    document.getElementById('commentpost').innerHTML = str;
    //comment.appendChild(str);
      

       
       console.log(str);
       
    })