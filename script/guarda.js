 apresentarIni();
function apresentarIni() {
  // Apresentar 
  loading();
  database
    .collection("projetos")
    .onSnapshot(function(documentos) {

      documentos
        .docChanges()
        .forEach(function(changes) {
          
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
          
          lista.appendChild(Autor);
          lista.appendChild(Titulo);
          lista.appendChild(img);
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
