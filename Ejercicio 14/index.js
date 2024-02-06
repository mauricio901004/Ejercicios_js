const meses = ["enero", "febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

const meses2= meses
.filter(mes => mes.length > 7)
.map(mes => mes.toUpperCase())

console.log(meses2)