const storage = firebase.storage();

// Prewview da imagem selecionada
  let photo = document.getElementById('Foto');
  let file = document.getElementById('arquivo');

file.addEventListener('change', (event) =>{
    
  if(file.files.length <=0){
    return;
  }
  let leitor = new  FileReader();
  leitor.onload = () =>{
    photo.src = leitor.result;
  }
  leitor.readAsDataURL(file.files[0]);
})

function postar() {
  
  let titulo = document.getElementById('titulo').value;
  let nomeAutor = document.getElementById('nomeAutor').value;
  let descrisao = document.getElementById('textProjeto').value;
  let arquivo = document.getElementById('arquivo').files[0];
  loading();

  storage
  .ref('projetos/')
  .child(arquivo.name)
  .put(arquivo);
  
  storage
    .ref('projetos/')
    .child(arquivo.name)
    .getDownloadURL()
    .then((url) => {
      
   let obj = {
        titulo: titulo,
        Autor: nomeAutor,
        descrisao: descrisao,
        url: url
      }
      
   firebase.firestore()
      .collection('projetos')
      .add(obj)
      .then(()=>{
        loadingOut();
        window.location.href = './home.html';
      }).catch(e=>{
        alert('Nao deu certo postar o projeto');
      })
    })

}

// Salvar text

