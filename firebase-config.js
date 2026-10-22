// Configuração da nuvem do Guapos (Firebase).
// Enquanto ficar null, o app funciona só neste aparelho: sem login e sem sincronizar.
// Para ligar a nuvem, troque o null pelo bloco "firebaseConfig" do seu projeto
// (Console do Firebase › Configurações do projeto › Seus apps › App da Web).
// Esses valores não são segredo: quem protege os dados são as regras do Firestore.
window.GUAPOS_FIREBASE = null;

/* Exemplo de como fica depois de colar:
window.GUAPOS_FIREBASE = {
  apiKey: "AIza...",
  authDomain: "guapos-xxxxx.firebaseapp.com",
  projectId: "guapos-xxxxx",
  storageBucket: "guapos-xxxxx.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:abc123"
};
*/
