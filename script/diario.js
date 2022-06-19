const database = firebase.firestore();

listaDiario();
 function listaDiario() {
  loading();
   database
    .collection("diario")
    .onSnapshot(function(documentos) {

      documentos
        .docChanges()
        .forEach(function(changes) {

          const documento = changes.doc;
          const titulo = documento.data().titulo;
          const autor = documento.data().autor;
          const texto = documento.data().texto;


          const lista = document.getElementById('listaDiario');
          const li = document.createElement('li');
          const divMae = document.createElement('div');
          divMae.classList.add('estagio');
          const div1 = document.createElement('div');
          div1.classList.add('tituloPost');
          const div2 = document.createElement('div');
          div2.classList.add('textoEstagio');
          const h2 = document.createElement('h2');
          const p1 = document.createElement('p');
          const p2 = document.createElement('p');

          li.appendChild(divMae);
          divMae.appendChild(div1);
          divMae.appendChild(div2);
          lista.appendChild(li);
          div1.appendChild(h2);
          div1.appendChild(p1);
          div2.appendChild(p2);

          h2.innerHTML = titulo;
          p1.innerHTML = ('Por ' + autor);
          p2.innerHTML = texto;


        loadingOut();
        })
    })

}
