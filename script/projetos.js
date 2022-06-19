const storage = firebase.storage();
const database = firebase.firestore();
apresentar();

function apresentar() {
  loading();
  // Apresentar 
  const lista = document.getElementById('ListaProjetos');

  database
    .collection("projetos")
    .onSnapshot(function(documentos) {

      documentos
        .docChanges()
        .forEach(function(changes) {

          const documento = changes.doc;
          const titulo = documento.data().titulo;
          const autor = documento.data().Autor;
          const descricao = documento.data().descrisao;
          const url = documento.data().url;


          const lista = document.getElementById('ListaProjetos');
          const li = document.createElement('li');
          const divIten = document.createElement('div');
          divIten.classList.add('ProjetoAdd');
          const img = document.createElement('img');
          const h2 = document.createElement('h2');
          const p1 = document.createElement('p');
          const p2 = document.createElement('p');

          li.appendChild(divIten);
          lista.appendChild(li);
          divIten.appendChild(img);
          divIten.appendChild(h2);
          divIten.appendChild(p1);
          divIten.appendChild(p2);

          h2.innerHTML = titulo;
          img.src = url;
          p1.innerHTML = ('Produzido por: '+autor);
          p2.innerHTML = descricao;

          loadingOut();
        })
    })

}
