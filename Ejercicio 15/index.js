const users = [

    {username: 'ppc90', age: 30, premium: false},    
    {username: 'lu65', age: 24, premium: true},    
    {username: 'maria3', age: 36, premium: false},    
    {username: 'abc123', age: 30, premium: false},    
    {username: 'sergio58', age: 30, premium: true},
    
    ];

    const userPremium = users.filter(function(user) {

      return user.premium === true 
         

    })

    console.log("Estos Usuarios son premium ",userPremium)
    userPremium.forEach(function(user) {
        console.log(user.username + " es un usuario premium.");
    });

    const usersNoPremium = users.filter(function(usuario){

        return usuario.premium === false

        
    })

console.log(usersNoPremium)

if (usersNoPremium.length > 0) {
    console.log("El array de usuarios no premium esta creado");
} else {
    console.log("El array de usuarios no premium aun no esta creado.");
}