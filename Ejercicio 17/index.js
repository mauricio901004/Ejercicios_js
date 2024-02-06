const element = document.getElementsByTagName("a");
const numeroDeEnlaces= element.length; 

const lista = document.createElement("li");
lista.innerHTML = "Numero de enlaces de la pagina: " + numeroDeEnlaces;
document.body.appendChild(lista)

const penultimoEnlace = element[4]
const enlace = document.createElement("li");
enlace.innerHTML = "Penultimo enlace de la pagina: " + penultimoEnlace;
document.body.appendChild(enlace) 

const parrafo3 = document.getElementById('thirdparagraph');
const numeroEnlacesP = parrafo3.getElementsByTagName("a");
const numeroEnlacesP3 = numeroEnlacesP.length;

const numeroEnlacesParrafo3 = document.createElement("li");
numeroEnlacesParrafo3.innerHTML = "Los enlaces en el parrafo 3 son: " + numeroEnlacesP3;
document.body.appendChild(numeroEnlacesParrafo3)