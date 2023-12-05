
 
  //Botao login
 document.getElementById('botaoLogin').addEventListener('click', teste);
let achou = 0;
//LOGIN PROVEDOR
  function teste(){
  const email = document.querySelector('#LoginEmail').value;
const senha = document.querySelector('#LoginSenha').value;


  fetch('https://apidotiaw.daviaguilar1.repl.co/Provedores')
.then(res => res.json())
.then(data => {
  
   for(let i=0; i<data.length; i++) {
     console.log('galo')

      let APIresponse = data[i]
      let email2 = APIresponse.email
      let senha2 = APIresponse.senha
      let nome = APIresponse.nome
      let id = APIresponse.id
      console.log('email =', email2)
      console.log('senha =', senha2)
      if(email === email2 && senha===senha2){
          console.log('funcionou')
          alert('Login bem-sucedido!');
          achou++
         window.location.href = `../html/pagperfil.html?id=${id}`;
         
      }
      
   }
   //if (achou===0)
   //{ alert('Email ou senha inválidos.');}
   

})};

document.getElementById('botaoLogin').addEventListener('click', logincliente);
//LOGIN CLIENTE
  function logincliente(){
  const email = document.querySelector('#LoginEmail').value;
const senha = document.querySelector('#LoginSenha').value;


fetch('https://apidotiaw.daviaguilar1.repl.co/Usuarios').then(res => res.json())
.then(data =>{

  for(let i=0; i<data.length; i++) {
    console.log('galo')
  
     let APIresponse = data[i]
     let email2 = APIresponse.email
     let senha2 = APIresponse.senha
     
     let id = APIresponse.id
     console.log('email =', email2)
     console.log('senha =', senha2)
     if(email === email2 && senha===senha2){
         console.log('funcionou')
         alert('Login bem-sucedido!');
         achou++
        window.location.href = `../html/pagperfil2.html?id=${id}`;
        
     }}
}
  

  )
}


function fazpost(APIresponse, url){
    console.log("body=", APIresponse)
    let request = new XMLHttpRequest()
    request.open("POST", url,true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(APIresponse))

    request.onload= function(){
        console.log(this.responseText)
    }
    return request.responseText
  }
