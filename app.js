const baseDeDatos = [
    {
        email: "example@email.com",
        password: "123456",
        productos: [
            "Naranja",
            "Pizza",
            "Cerveza"
        ]
    },
    {
        email: "example1@email.com",
        password: "123456",
        productos: [
            "Manzana",
            "Pera",
            "Banana"
        ]
    }
]

function iniciarSesion (){
    let email =prompt ("Ingrese su correo");
    let password = prompt ("Ingrese su contraseña");
    
    let usuario = baseDeDatos.find(usuario => usuario.email === email && usuario.password === password);
    if (usuario) {
      alert("Has iniciado sesión");
      gestionDeProductos(email);
    } else {
      alert("Introduce un email o contraseña correctos");
      crearUsurio();
    }
  }





function crearUsuario (){
    
    let nuevoEmail =prompt("ingrese su email");
    let nuevaPass= prompt("Ingrese su contraseña");
    baseDeDatos.push({email:nuevoEmail, password:nuevaPass,productos:[]});
    alert("Usuario dado de alta");
}

function gestionDeProductos (email){
    

    do {
        let  menuInicial = parseInt( prompt("1.Agregar producto \n 2.Consultar producto \n 3. Cerrar sesión"));
        switch(menuInicial){
            case 1:
                agregarProducto(email);
                break;
            case 2:
                consultarProducto(email);
                break;
            case 3: 
                alert("Cerrar sesión");
                break;
            
            default: 
                alert("Opción no válida");
        }
        

    }while(menuInicial !==3);
}

    function agregarProducto (email){
       let usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);

       usuarioEncont.productos.push(prompt("Ingrese el producto"));
       alert("Producto agregado")
        gestionDeProductos(email);
    }

    function consultarProducto(email){
        let usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);
        let productos="";
        for (let i=0; i < usuarioEncont.productos.length; i++){
            productos= productos +", " + usuarioEncont.productos[i] ;
        }

        alert("Los productos son: " + productos);
        gestionDeProductos(email);

    }
    



do {
    let menuInicial = parseInt( prompt("<<-sistema de gestión de  usuario->> \n 1. Iniciar sesión \n 2. Registrarse \n 3.salir del sistema \n \n Ingrese una opción: \n "));

    switch (menuInicial){
        case 1: 
        iniciarSesion();
        break;

        case 2: 
        crearUsuario();
        break;

        case 3: 
        alert("Saliendo del sistema");
        break;

        default: 
        alert("Opción no válida");
    }
        

}while(menuInicial !==3);

