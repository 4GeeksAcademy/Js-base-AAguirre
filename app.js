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


//Primer bucle=>nos muestra las primeras opción y luego en función de los casos nos lleva a las funciones correspondientes según la selección del usuario:
do {
    let menuInicial = parseInt(prompt("<<-sistema de gestión de  usuario->> \n 1. Iniciar sesión \n 2. Registrarse \n 3.salir del sistema \n \n Ingrese una opción: \n "));

    switch (menuInicial) {
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


} while (menuInicial !== 3);


//Función para iniciar sesión a partir de un usuario y contraseña registrados en baseDeDatos:
function iniciarSesion() {
    let email = prompt("Ingrese su email");
    let password = prompt("Ingrese su password");

    let usuario = baseDeDatos.find(usuario => usuario.email === email && usuario.password === password);
    if (usuario) {
        alert("Bienvenido al sistema");
        gestionDeProductos(email);
    } else {
        alert("Introduce un email o contraseña correctos");
        crearUsuario();
    }
}

//función para crear un usuario y agregarlo a la baseDeDatos:
function crearUsuario() {

    let nuevoEmail = prompt("ingrese su email");
    let nuevaPass = prompt("Ingrese su password");
    let existeUsuario = baseDeDatos.find(usuario => usuario.email === nuevoEmail);

    if(existeUsuario){
        alert("El usuario ya existe");
        
    }else {
        baseDeDatos.push({ email: nuevoEmail, password: nuevaPass, productos: [] });
    alert("Usuario dado de alta");
    }
    
    
}

//Función para la gestión de productos una vez el usuario está dentro(email):
function gestionDeProductos(email) {

    do {
        let menuInicial = parseInt(prompt("1.Agregar producto \n 2.Consultar producto \n 3. Cerrar sesión"));
        switch (menuInicial) {
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


    } while (menuInicial !== 3);
}

//función para agregar productos y que se añadan a la base de datos: 
function agregarProducto(email) {
    let usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);

    usuarioEncont.productos.push(prompt("Ingrese el producto"));
    alert("Producto agregado")
    gestionDeProductos(email);
}

//función para que una vez el usuario este dentro, consulte los prodc de su cesta (en base a su email):
function consultarProducto(email) {
    let usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);
    let productos = "";
    for (let i = 0; i < usuarioEncont.productos.length; i++) {
        productos = productos + ", " + usuarioEncont.productos[i];
    }

    alert("Los productos son: " + productos);
    gestionDeProductos(email);

}



