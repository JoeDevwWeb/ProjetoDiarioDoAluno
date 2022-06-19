const database = firebase.firestore();
apresentarIni();

function apresentarIni(){
  // Apresentar 
  loading();
  database
    .collection("projetos/")
    .onSnapshot(function(documentos) {

      documentos
        .docChanges()
        .forEach(function(changes){
          
          const lista = document.getElementsByClassName('projetos');

          const documento = changes.doc;
          const titulo = documento.data().titulo;
          const autor = documento.data().Autor;
          const url = documento.data().url;
          
          const img = document.getElementById('imgIni');
          img.src = url;
          
          const Titulo = document.getElementById('Titulo');
          Titulo.innerHTML = titulo; 
          
          const Autor = document.getElementById('autor');
          Autor.innerHTML = ('| Por '+autor+' |');
 
          loadingOut();
          
  })
 })
}
 
 firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "../index.html";
    }
  });

// Desconectar a conta
async function logout() {
  await firebase
   loading();
  firebase.auth().signOut()
 .then(() => {
    loadingOut();
   window.location.href = "../index.html";
 }).catch(() => {
   alert("Erro ao fazer logout");
 });
};

  const formReset = document.getElementById('reset');
function postaDiario(){
  
  const nomeAutor = document.getElementById('Autor').value;
  const descricao = document.getElementById('postagem').value;
  const titulo = document.getElementById('tituloDiario').value;
  
  loading();
  let obj = {
      titulo: titulo,
      autor: nomeAutor,
      texto: descricao
}
console.log(obj);
   firebase.firestore()
      .collection('diario')
      .add(obj)
      .then(()=>{
        loadingOut();
        formReset.reset();
      }).catch(e=>{
        alert('Nao deu certo postar o projeto');
      })

}
