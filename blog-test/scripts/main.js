/*étape 1: concerne mon titre h1*/
let myHeading = document.querySelector('h1');
 myHeading.textContent = 'A toutes ces personnes qui ont perdu un être cher';


/*étape 2: concerne mon article 1; si ouverture de mon article, pop up s'ouvre*/
let article = 'article 1';
if (article === 'article 1') {
  alert("Cher lecteur, je te souhaite bonne lecture !");    
} else {
	alert("Tu me quittes déjà? Dommage, à bientôt!");    
}

/*etape 3: j'ajoute une pop up relative au clic souris*/
document.querySelector('html').addEventListener('click', function() {
    alert("Cet article te plaît? Découvres-en d'autres en cliquant sur_plus d'articles_en bas de page!!");
});

/*étape 4: j'ajoute un changeur d'image avec API DOM*/
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../images/rose-noire.jpeg.jpeg') {
      myImage.setAttribute('src', '../images/rose-bleue.jpeg');
    } else {
      myImage.setAttribute('src', '../images/rose-noire.jpeg.jpeg');
    }
});

/*étape 5: j'ajoute un bouton utilisateur*/
let myButton= document.querySelector('button');
function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Si tu as perdu un être cher, cet article te concerne, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'si tu as perdu un être cher, cet article te concerne, ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});