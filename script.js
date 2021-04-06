// var elem = document.getElementById("fieldInput");
//
// elem.onblur = displayModalOnBlur;
//
// function displayModalOnBlur(){
//   alert('Merci de votre participation !');
// }
//**************Correction avec événement html dans l'input********
//création d'une variable qui correspond à la chaîne de caractères du message
//de la modale qui va s'afficher avec la méthode alert.
var lostFocusMessage = 'Perte de focus !';
function displayModalOnBlur (){
  alert(lostFocusMessage);
}
