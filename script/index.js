 // Inicialização
  const firebaseConfig = {
    apiKey: "AIzaSyAAGqIkpR4nVkdoxgsCDpxYFutEJ0O_mOY",
    authDomain: "diariodoaluno-d32c8.firebaseapp.com",
    projectId: "diariodoaluno-d32c8",
    storageBucket: "diariodoaluno-d32c8.appspot.com",
    messagingSenderId: "843419785955",
    appId: "1:843419785955:web:2fb0903f48c83661a5c3d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// loading
function loading() {
  const div = document.createElement("div");
  div.classList.add('loading');
  const loading = document.createElement('div');
  loading.classList.add('spinner');
  div.appendChild(loading);
 //alert('loading');
  document.body.appendChild(div);
}

function loadingOut() {
  const loadings = document.getElementsByClassName("loading");
  if (loadings.length) {
    loadings[0].remove();
  }
}
