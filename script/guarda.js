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
