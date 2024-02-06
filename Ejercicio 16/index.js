class cuadrado {

    constructor(area, perimetro, lado){

        this.area = lado * lado
        this.perimetro = lado * 4
        this.lado = lado
    }
}

const cuadradoPeuqeño = new cuadrado("","",2);
const cuadradoMediano = new cuadrado("","",5);
const cuadradoGrande = new cuadrado("","",10);

console.log("Cuadrado pequeño Area " + cuadradoPeuqeño.area, "Perimetro " + cuadradoPeuqeño.perimetro)
console.log("Cuadrado mediano Area " + cuadradoMediano.area, "Perimetro " + cuadradoMediano.perimetro)
console.log("Cuadrado grande Area " + cuadradoGrande.area, "Perimetro " + cuadradoGrande.perimetro)