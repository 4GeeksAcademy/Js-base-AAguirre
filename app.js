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
let menuInicial;
//Primer bucle=>nos muestra las primeras opción y luego en función de los casos nos lleva a las funciones correspondientes según la selección del usuario:
bucle: do {
    menuInicial = parseInt(prompt("<<-Sistema de gestión de  usuario->> \n 1. Iniciar sesión \n 2. Registrarse \n 3. Salir del sistema \n \n Ingrese una opción: \n "));

    switch (menuInicial) {
        case 1:
            const EMAIL = prompt("Ingrese su email");
            const PASSWORD = prompt("Ingrese su password");
            const HAS_INICIADO_SESION = iniciarSesion(EMAIL, PASSWORD);
            if (HAS_INICIADO_SESION) {
                alert("Bienvenido al sistema");
                gestionDeProductos(EMAIL);
            } else {
                alert("Introduce un email o contraseña correctos");
                crearUsuario();
            }
            break;

        case 2:
            crearUsuario();
            break;

        case 3:
            alert("Saliendo del sistema");
            break bucle;

        default:
            alert("Opción no válida");
    }

} while (menuInicial !== 3);




function iniciarSesion(email, password) {
    //let email = prompt("Ingrese su email");
    //let password = prompt("Ingrese su password");

    const USUARIO_ENCONTRADO = baseDeDatos.find(usuario => usuario.email === email && usuario.password === password);
    return USUARIO_ENCONTRADO ? true : false;


}


function crearUsuario() {

    const nuevoEmail = prompt("ingrese su email");
    const nuevaPass = prompt("Ingrese su password");
    const existeUsuario = baseDeDatos.find(usuario => usuario.email === nuevoEmail);

    if (existeUsuario) {
        alert("El usuario ya existe");

    } else {
        baseDeDatos.push({ email: nuevoEmail, password: nuevaPass, productos: [] });
        alert("Usuario dado de alta");
    }
}

function gestionDeProductos(email) {
    let menuProductos
    bucle: do {
        menuProductos = parseInt(prompt("\n 1.Agregar producto \n 2.Consultar producto \n 3.Cerrar sesión"));
        switch (menuProductos) {
            case 1:
                const usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);
                const producto = usuarioEncont.productos.push(prompt("Ingrese el producto"));
                alert("Producto agregado")
                gestionDeProductos(email);
                agregarProducto(email);
                break;
                agregarProducto(email);
                break;
            case 2:
                const usuarioEncontrado = baseDeDatos.find(usuario => usuario.email === email);
                const productoNuevo = "";
                for (let i = 0; i < usuarioEncontrado.productos.length; i++) {
                    productoNuevo = productoNuevo + "," + usuarioEncontrado.productos[i];
                }
                if (usuarioEncontrado.productos.length === 0) {
                    alert("No tienes productos agregados");

                } else {
                    alert("Los productos son: " + producto);
                }
                gestionDeProductos(email);
                consultarProducto(email);
                break;
            case 3:
                alert("Cerrando sesión");
                break bucle;

            default:
                alert("Opción no válida");
        }

    } while (menuProductos === 3);
}


function agregarProducto(email) {
    let usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);


    usuarioEncont.productos.push(prompt("Ingrese el producto"));
    alert("Producto agregado")
    gestionDeProductos(email);

}


function consultarProducto(email) {
    let usuarioEncont = baseDeDatos.find(usuario => usuario.email === email);
    let producto = "";
    for (let i = 0; i < usuarioEncont.productos.length; i++) {
        producto = producto + "," + usuarioEncont.productos[i];

    }

    if (usuarioEncont.productos.length === 0) {
        alert("No tienes productos agregados");
    } else {
        alert("Los productos son: " + producto);
    }

    gestionDeProductos(email);
}




