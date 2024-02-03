//Determinar el area de un cubo 
//Base 16cm*23cm
//Altura 13cm

const volunen = 16*23*13
console.log ("volumen",volunen + "cm3");

//Determinar el area

const areaLateral = 23*13;
const areaBase = 16*23;
const areaTotal = areaLateral + 2*areaBase;
console.log ("Area Total", areaTotal + "cm2")

// Calcular lo mismo con diferentes variables

const base= 23;
const altura= 13;
const ancho= 16;
const volumen2= base*altura*ancho
console.log ("volumen2",volumen2 + "cm3");

const area2 = base * altura + 2 * base * ancho;
console.log ("Area Total", area2 + "cm2");