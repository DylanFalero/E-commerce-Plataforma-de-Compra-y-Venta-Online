let contadorCompradores = 1;
let contadorAdministradores = 1;
let contadorCompras = 1;
let contadorProducto = 1;
let usuarioConectado = null;

class Administradores {
    constructor(usuario, pass) {
        this.id = contadorAdministradores++;
        this.usuario = usuario;
        this.pass = pass;
    }

}

class Comprador {
    constructor(nombre, apellido, usuario, pass, tarjeta, cvc) {
        this.id = contadorCompradores++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.pass = pass;
        this.tarjeta = tarjeta;
        this.cvc = cvc;
        this.saldo = 3000;
    }
}
class Productos {
    constructor(nombre, descripcion, precio, stock, imagen, estado = "activo", oferta = "no", ganancia = 0, stockVendido = 0){
        this.id = "Prod_" + contadorProducto++
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
        this.estado = estado
        this.oferta = oferta
        this.ganancia = ganancia
        this.stockVendido = stockVendido
    }
}
class Compras {
    constructor(idComprador, idProducto, cantidad, monto, pEstado = "pendiente") {
        this.id = "Comp_" + contadorCompras++
        this.idComprador = idComprador
        this.idProducto = idProducto
        this.cantidad = cantidad
        this.monto = monto
        this.estado = pEstado
    }
}


class Sistema {
    listaAdministradores = [];
    listaCompradores = [];
    listaProductos = [];
    listaCompras = [];

    //Solamemte es enfocada si es invocada en la clase Sistema
    existeAdministrador(unNombre) {
        for (let unAdmin of this.listaAdministradores) {
            if (unAdmin.usuario == unNombre) return true;
        }
        return false;
    }
    existeComprador(unNombre) {
        for (let unComprador of this.listaCompradores) {
            if (unComprador.usuario == unNombre) return true;
        }
        return false;
    }

    hallarAdministrador(unNombre) {
        for (let unAdmin of this.listaAdministradores) {
            if (unAdmin.usuario == unNombre) return unAdmin;
        }
        return null;

    }
    hallarComprador(unNombre) {
        for (let unComprador of this.listaCompradores) {
            if (unComprador.usuario == unNombre) return unComprador;
        }
        return null;

    }

    saldoComprador(idComprador) {
        for (let unComprador of this.listaCompradores) {
            if (unComprador.id == idComprador) return unComprador.saldo
        }
        return null
    }

    precioProducto(idProd) {
        for (let unProducto of sistema.listaProductos) {
            if (unProducto.id == idProd) return unProducto.precio
        }
        return null
    }
    hallarCompra(idComp){
        for(let unaCompra of sistema.listaCompras){
            if(unaCompra.id == idComp) return unaCompra.idProducto
        }
        return null
    }
    hallarProductoStock(idProd){
        for(let unProducto of sistema.listaProductos){
            if ( unProducto.id == idProd) return unProducto.stock
        }
        return null
    }

}   

let sistema = new Sistema();
//Lista de compradores y administradores
let comprador1 = new Comprador("Juan", "Perez", "juanp", "Juan1", "4213000400160136", "123")
let comprador2 = new Comprador("Pedro", "Gomez", "pedrog", "Pedro1", "4213000400160136", "123")
let comprador3 = new Comprador("Ruperez", "Gomez", "1", "1", "4213000400160136", "123")
let comprador4 = new Comprador("Daniel", "Falero", "danielf", "Daniel1", "4213000400160136", "123")
let comprador5 = new Comprador("Estela", "San Matin", "estelasm", "Em1974", "4213000400160136", "123")
sistema.listaCompradores.push(comprador1, comprador2, comprador3, comprador4, comprador5)

let admin1 = new Administradores("dylan", "Falero1")
let admin2 = new Administradores("sergio", "Palay1")
let admin3 = new Administradores("ort", "Ort1")
let admin4 = new Administradores("milena", "Milena1")
let admin5 = new Administradores("ashley", "Ashley1")
sistema.listaAdministradores.push(admin1, admin2, admin3, admin4, admin5)

//Listas de productos y compras
let producto1 = new Productos("Botella de Agua", "Muy buena", 300, 10, "../img/1.jpg", "activo", "si");
let producto2 = new Productos("Pelota de Basketball", "Nivia", 100, 20, "../img/2.jpg", "activo", "si")
let producto3 = new Productos("Pelota de Rugbi", "Sherrin", 300, 15, "../img/3.jpg", "activo", "si")
let producto4 = new Productos("Bolso de Gimnasio", "Ogio", 800, 10, "../img/4.jpeg")
let producto5 = new Productos("Bicicleta", "Deprotiva", 800, 10, "../img/5.jpg")
let producto6 = new Productos("Set de juegos de mesa", "Varias Variedades", 1500, 3, "../img/6.jpg", "activo", "si")
let producto7 = new Productos("Pelota de Futbol Americano", "Champion", 400, 50, "../img/7.jpg")
let producto8 = new Productos("Tejo magnetico", "Espacioso", 1200, 10, "../img/8.jpg")
sistema.listaProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8)

let compra1 = new Compras(comprador1.id, producto1.id, 2, 300, "pendiente")
let compra2 = new Compras(comprador1.id, producto2.id, 1, 100, "pendiente")
let compra3 = new Compras(comprador2.id, producto2.id, 1, 100, "rechazado")
let compra4 = new Compras(comprador2.id, producto3.id, 1, 300, "pendiente")
let compra5 = new Compras(comprador3.id, producto1.id, 1, 300, "pendiente")

sistema.listaCompras.push(compra1, compra2, compra3, compra4, compra5)


console.log(sistema.listaCompras)
console.log(sistema.listaProductos)


//Ocultar y mostrar divs
inicio();
function ocultarTodo() {
    document.querySelector("#pantallaCabecera").style.display = "none"
    document.querySelector("#pantallaLogin").style.display = "none"
    document.querySelector("#pantallaMenuAdministrador").style.display = "none"
    document.querySelector("#pantallaMenuComprador").style.display = "none"
    document.querySelector("#pantallaRegister").style.display = "none"
    document.querySelector("#seccionFiltroComprador").style.display = "none"

}
function inicio() {
    ocultarTodo()
    document.querySelector("#pantallaLogin").style.display = "block"
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin)
    document.querySelector("#btnRegistrarComprador").addEventListener("click", hacerRegister)
    document.querySelector("#btnCabeceraCerrarSesion").addEventListener("click", cerrarSesion)
}

//Funcion para hacer login
function hacerLogin() {
    let nombreUsuario = document.querySelector("#txtLoginUsuario").value.toLowerCase()
    let pass = document.querySelector("#txtLoginPass").value


    if (sistema.existeAdministrador(nombreUsuario, pass)) {
        let unAdmin = sistema.hallarAdministrador(nombreUsuario)
        if (unAdmin.pass == pass) {
            alert("Bienvenido " + nombreUsuario)
            ocultarTodo()
            usuarioConectado = unAdmin
            document.querySelector("#pantallaCabecera").style.display = "block"
            document.querySelector("#pantallaMenuAdministrador").style.display = "block"
            document.querySelector("#msgUsuarioConectado").innerHTML = "Usuario conectado: " + usuarioConectado.usuario
            document.querySelector("#btnAdmisnistrador").addEventListener("click", listaProductosAdmin)
            document.querySelector("#btnAdmisnistrador-administrarCompras").addEventListener("click", administrarCompras)
            document.querySelector("#btnAdmisnistrador-lsitarCompras").addEventListener("click", listarProductos)
            document.querySelector("#btnAdmisnistrador-administrarProductos").addEventListener("click", administrarProductos)
            document.querySelector("#btnAdministrador-ofertas").addEventListener("click", verListadoOfertasAdmin)
            document.querySelector("#btnAdmisnistrador-verGanancias").addEventListener("click", ganancias)
        } else {
            alert("Usuario o contraseña incorrectos")
        }

    }
    else if (sistema.existeComprador(nombreUsuario, pass)) {
        let unComprador = sistema.hallarComprador(nombreUsuario)
        if (unComprador.pass == pass) {
            alert("Bienvenido " + nombreUsuario)
            ocultarTodo()
            usuarioConectado = unComprador
            document.querySelector("#pantallaCabecera").style.display = "block"
            document.querySelector("#pantallaMenuComprador").style.display = "block"
            document.querySelector("#msgUsuarioConectado").innerHTML = "Usuario conectado: " + usuarioConectado.usuario
            document.querySelector("#btnComprador").addEventListener("click", listaProductos)
            document.querySelector("#btnComprador-comprarProductos").addEventListener("click", verListadoProductos)
            document.querySelector("#btnComprador-ofertas").addEventListener("click", verListadoOfertas)
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } else {
        alert("Error en el usuario o contraseña, intente nuevamente");
    }
}
function cerrarSesion() {
    ocultarTodo()
    document.querySelector("#pantallaLogin").style.display = "block"
    usuarioConectado = null
    document.querySelector("#txtLoginUsuario").value = ""
    document.querySelector("#txtLoginPass").value = ""
    alert("Sesion cerrada")
}


//Funcion para registrar un nuevo comprador

function hacerRegister() {
    ocultarTodo()
    document.querySelector("#pantallaRegister").style.display = "block"
    document.querySelector("#btnRegister").addEventListener("click", registrar)
}
function registrar() {
    let nombre = document.querySelector("#txtRegisterNombre").value
    let apellido = document.querySelector("#txtRegisterApellido").value
    let usuario = document.querySelector("#txtRegisterNombreUsuario").value.toLowerCase()
    let pass = document.querySelector("#txtRegisterPass").value
    let tarjeta = document.querySelector("#txtRegisterTarjeta").value
    let cvc = document.querySelector("#txtRegisterCVC").value


    if (nombre != "" && apellido != "" && usuario != "" && pass != "" && tarjeta != "" && cvc != "") {
        if (validarUsuario(usuario) && esValida(pass) && validarCVC(cvc) && validarTarjeta(tarjeta) && tarjeta.length == 16) {
            let unComprador = new Comprador(nombre, apellido, usuario, pass, tarjeta, cvc)
            sistema.listaCompradores.push(unComprador)
            alert("Usuario registrado con exito")
            ocultarTodo()
            document.querySelector("#pantallaLogin").style.display = "block"
        } else {
            console.log(validarUsuario(usuario), esValida(pass), validarCVC(cvc), validarTarjeta(tarjeta))
        }

    } else {
        alert("Complete todos los campos")
    }
}


//Funcion para validar usuario, contraseña y CVC de la tarjeta
function validarTarjeta(nro) {
    let suma = 0
    let impar = true
    // recorro todos los dígitos de la tarjeta
    for (let i = 0; i < nro.length; i++) {
        // obtengo el digito
        let n = Number(nro[i])
        if (impar) {
            // multiplico el digito por 2
            n = n * 2
            // si se desbordó a 2 cifras resto 9 para obtener el original
            if (n > 9) {
                n = n - 9
            }
        }
        // por fin acumulo
        suma = suma + n
        // Cambia el valor de impar por su opuesto
        impar = !impar
    }
    return (suma % 10 == 0)  // va a retornar true o false si cumple o no la condición
}
function validarCVC(cvc) {
    // Verificar si el CVC tiene exactamente 3 dígitos numéricos
    if (cvc.length == 3) {
        return true;
    } else {
        alert("CVC incorrecto")
        return false;
    }
}
function validarUsuario(unUsuario) {
    if (sistema.existeAdministrador(unUsuario) || sistema.existeComprador(unUsuario)) {
        alert("Usuario ya existente")
        return false;
    } else {
        return true;
    }
}
function esValida(unaClave) {
    if (unaClave.length >= 5 && contieneUnaMayuscula(unaClave) && contieneUnaMinuscula(unaClave) && contieneUnDigito(unaClave)) {

        return true;
    }
    else {
        alert("La contraseña debe tener al menos 5 caracteres, una mayuscula, una minuscula y un digito")
        return false;
    }
}
function contieneUnaMayuscula(unaClave) {
    for (let unCaracter of unaClave) {
        if (unCaracter == unCaracter.toUpperCase() && isNaN(unCaracter)) return true;
    }
    return false;
}

function contieneUnaMinuscula(unaClave) {
    for (let unCaracter of unaClave) {
        if (unCaracter == unCaracter.toLowerCase() && isNaN(unCaracter)) return true;
    }
    return false;
}
function contieneUnDigito(unaClave) {
    for (let unCaracter of unaClave) {
        if (!isNaN(unCaracter) && unCaracter != " ") return true;
    }
    return false;
}

//Funcion para mostrar la tabla de productos
function listaProductos() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuComprador").style.display = "block"
    mostrarTablaProductos()

}
function listaProductosAdmin() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuAdministrador").style.display = "block"
    mostrarTablaProductosAdmin()

}
//Mostrar la lisra de productos (Tienda) desde el menu Comprador
function mostrarTablaProductos() {
    let miTabla = ""
    miTabla += `
    <br><h3>Tienda</h3>
    <table border = "1">
        <thead>
            <td>Nombre </td>
            <td>Descripcion </td>
            <td>Precio </td>
            <td>Imagen </td>
            <td>Stock </td>
            <td>Cantidad </td>
            <td>Carrito </td>
        </thead>
    `

    for (let unProducto of sistema.listaProductos) {
        if (unProducto.estado == "activo") {
            miTabla += `
            <tr>
                <td>${unProducto.nombre}</td>
                <td>${unProducto.descripcion}</td>
                <td>${unProducto.precio}</td>
                <td><img src="${unProducto.imagen}"></td>
                <td>${unProducto.stock}</td>
                <td> <input type="number" id="txtCantidad${unProducto.id}"> </td>
                <td> <input type="button" class="botonAccion" id="btnAccion${unProducto.id}" value="Comprar"> </td>
            </tr>
            `

        }
    }
    miTabla += `</table>`
    document.querySelector("#msgMostrar").innerHTML = miTabla


    let listaImpits = document.querySelectorAll(".botonAccion")
    for (let unInput of listaImpits) {
        unInput.addEventListener("click", comprarProducto)
    }
}
//Mostrar la lisra de productos (Tienda) desde el menu administrador
function mostrarTablaProductosAdmin() {
    let miTabla = ""
    miTabla += `
    <br><h3>Tienda</h3>
    <table border = "1">
        <thead>
            <td>Nombre </td>
            <td>Descripcion </td>
            <td>Precio </td>
            <td>Oferta </td>
            <td>Imagen </td>
            <td>Stock </td>
        </thead>
    `

    for (let unProducto of sistema.listaProductos) {
        if (unProducto.estado == "activo") {

            miTabla += `
            <tr>
                <td>${unProducto.nombre}</td>
                <td>${unProducto.descripcion}</td>
                <td>${unProducto.precio}</td>
                <td>${unProducto.oferta}</td>
                <td><img src="${unProducto.imagen}"></td>
                <td>${unProducto.stock}</td>
            </tr>
            `
        }
    }
    miTabla += `</table>`
    document.querySelector("#msgMostrarAdmin").innerHTML = miTabla


}

//funcion para almacenar el ID y calcular el precio basado en la cantidad de productos
function comprarProducto() {
    let idBoton = this.id
    let idProd = idBoton.substring(9)
    let idCantidad = "#txtCantidad" + idProd
    let cantidad = Number(document.querySelector(idCantidad).value)
    //     constructor(idComprador, idProducto, cantidad, monto){
    let monto = cantidad * sistema.precioProducto(idProd)
    if(cantidad > 0 ){
        let unaCompra = new Compras(usuarioConectado.id, idProd, cantidad, monto)
        sistema.listaCompras.push(unaCompra)
        alert("La compra ha sido agregada con exito y el monto a pagar es de: $" + monto)
        document.querySelector(idCantidad).value = ""

    }else{
        alert("La cantidad debe ser mayor que 0")
    }
}

//Pasar compra a Listado de compras y cancelar compra

function verListadoProductos() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuComprador").style.display = "block"
    document.querySelector("#seccionFiltroComprador").style.display = "block"
    document.querySelector("#btnFiltrarComprador").addEventListener("click", mostrarListaProductos)
    document.querySelector("#msgMostrar").innerHTML = ""
    document.querySelector("#msgFiltroComprador").innerHTML = ""
}
//Mostrar la lista de productos en el "Carrito"
function mostrarListaProductos() {
    let miTabla = ""
    miTabla += `
    <br><h3>Listado de Compras</h3>
    <table border = "1">
        <thead>
            <td>Producto </td>
            <td>Cantidad</td>
            <td>Monto</td>
            <td>Estado de Compra </td>
            <td>Cancelar</td>
        </thead>
    `
    let comprasUsuario = sistema.listaCompras.filter(compra => compra.idComprador == usuarioConectado.id)
    let queremosVer = document.querySelector("#slcSeleccionarComprador").value
    let montoTotal = 0

    if (queremosVer == "todos") {
        for (let unaCompra of comprasUsuario) {
            let idProducto = unaCompra.idProducto
            let producto = sistema.listaProductos.find(producto => producto.id == idProducto)
            miTabla += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${unaCompra.cantidad}</td>
                <td>${unaCompra.monto}</td>
                <td>${unaCompra.estado}</td>
                <td> <input type="button" class="botonCancelar" id="botonCancelar${unaCompra.id}" value="Cancelar"> </td>
    
            </tr>
            `
            if (unaCompra.estado == "aprobado") {
                montoTotal += unaCompra.monto
            }
        }

    }else{
        if(queremosVer == "pendiente"){
            for(let unaCompra of comprasUsuario){
                if(unaCompra.estado == "pendiente"){
                    let idProducto = unaCompra.idProducto
                    let producto = sistema.listaProductos.find(producto => producto.id == idProducto)
                    miTabla += `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${unaCompra.cantidad}</td>
                        <td>${unaCompra.monto}</td>
                        <td>${unaCompra.estado}</td>
                        <td> <input type="button" class="botonCancelar" id="botonCancelar${unaCompra.id}" value="Cancelar"> </td>
        
                    </tr>
                    `
                }
            }
        }else{
            if(queremosVer == "aprobado"){
                for(let unaCompra of comprasUsuario){
                    if(unaCompra.estado == "aprobado"){
                        let idProducto = unaCompra.idProducto
                        let producto = sistema.listaProductos.find(producto => producto.id == idProducto)
                        miTabla += `
                        <tr>
                            <td>${producto.nombre}</td>
                            <td>${unaCompra.cantidad}</td>
                            <td>${unaCompra.monto}</td>
                            <td>${unaCompra.estado}</td>
                            <td> <input type="button" class="botonCancelar" id="botonCancelar${unaCompra.id}" value="Cancelar" disabled> </td>
            
                        </tr>
                        `
                        montoTotal += unaCompra.monto
                    }
                }
            }else{
                if(queremosVer == "rechazado"){
                    for(let unaCompra of comprasUsuario){
                        if(unaCompra.estado == "rechazado"){
                            let idProducto = unaCompra.idProducto
                            let producto = sistema.listaProductos.find(producto => producto.id == idProducto)
                            miTabla += `
                            <tr>
                                <td>${producto.nombre}</td>
                                <td>${unaCompra.cantidad}</td>
                                <td>${unaCompra.monto}</td>
                                <td>${unaCompra.estado}</td>
                                <td> <input type="button" class="botonCancelar" id="botonCancelar${unaCompra.id}" value="Cancelar" disabled> </td>
                
                            </tr>
                            `
                        }
                    }
                }
            }
        
        }
    }
    miTabla += `</table>
    <p>El monto total pagado por las compras aporbadas es de: ${montoTotal} y el saldo restante disponible es de: ${usuarioConectado.saldo}</p>
    `
    document.querySelector("#msgFiltroComprador").innerHTML = miTabla

    let listaBotonCancelar = document.querySelectorAll(".botonCancelar")
    for (let unBoton of listaBotonCancelar) {
        unBoton.addEventListener("click", cancelarCompra)
    }
}
//Funcion para cancelar una compra desde el menu Comprador
function cancelarCompra() {
    let idBoton = this.id
    let idComp = idBoton.substring(13)
    let index = sistema.listaCompras.findIndex(compra => compra.id == idComp)

    if (index !== -1) {
        let compra = sistema.listaCompras[index]
        if (compra.estado == "pendiente") {
            sistema.listaCompras.splice(index, 1)
            alert("La compra ha sido cancelada con exito")
            mostrarListaProductos()
        } else {
            if (compra.estado == "aprobado") {
                alert("La compra ya ha sido aprobada y no puede cancelarse")

            } else {
                if (compra.estado == "rechazado") {
                    alert("La compra ya ha sido rechazada y no puede cancelarse")
                }
            }

        }
    }
}
//ver Listado de Ofertas

function verListadoOfertas() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuComprador").style.display = "block"
    mostrarListadoOfertas()
}
function verListadoOfertasAdmin() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuAdministrador").style.display = "block"
    verOfertasAdmin()
}
//visualizar la lista de ofertas desde la seccion Comprador
function mostrarListadoOfertas() {
    let miTabla = ""
    miTabla += `
    <br><h3>Ofertas</h3>
    <table border = "1">
        <thead>
            <td>Producto </td>
            <td>Estado de Oferta</td>
            <td>Precio</td>
            <td>Stock</td>
            <td>Imagen </td>
            <td>Cantidad</td>
            <td>Comprar</td>
        </thead>
    `
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.oferta == "si" && unProducto.estado == "activo") {
            miTabla += `
            <tr>
                <td>${unProducto.nombre}</td>
                <td>${unProducto.oferta}</td>
                <td>${unProducto.precio}</td>
                <td>${unProducto.stock}</td>
                <td><img src="${unProducto.imagen}"></td>
                <td> <input type="number" id="txtCantidad${unProducto.id}"> </td>
                <td> <input type="button" class="botonAccionOfertas" id="btnAccion${unProducto.id}" value="Comprar"> </td>
            </tr>
            `
        }
    }

    
    miTabla += `</table>`
    document.querySelector("#msgMostrar").innerHTML = miTabla
    
    let listaImpitsOfertas = document.querySelectorAll(".botonAccionOfertas")
    for (let unInput of listaImpitsOfertas) {
        unInput.addEventListener("click", comprarProducto)
    }
}
//visualisar la lista de ofertas desde la seccion Administrador
function verOfertasAdmin() {
    let miTabla = ""
    miTabla += `
    <br><h3>Listado de Ofertas</h3>
    <table border = "1">
        <thead>
            <td>Producto </td>
            <td>Estado de Oferta</td>
            <td>Precio</td>
        </thead>
    `
        for (let unProducto of sistema.listaProductos) {
            miTabla += `
            <tr>
                <td>${unProducto.id}</td>
                <td>${unProducto.oferta}</td>
                <td>${unProducto.precio}</td>
            </tr>
            `
        }


    miTabla += `</table>`
    document.querySelector("#msgMostrarAdmin").innerHTML = miTabla
}

//Seccion Administrador

//Seccion Aprobar Compras

function administrarCompras() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuAdministrador").style.display = "block"
    aprobarProductos()
}
//funcion para mostrar la tabla, para aprobar compra
function aprobarProductos() {
    let miTabla = ""
    miTabla += `
    <h2>Compras</h2>
    <table border = "1">
        <thead>
            <td>Nro Compra </td>
            <td>ID Comprador </td>
            <td>Producto </td>
            <td>Cantidad</td>
            <td>Monto</td>
            <td>Estado de Compra </td>
            <td>Aprobar</td>
        </thead>
    `
        for (let unaCompra of sistema.listaCompras) {
            miTabla += `
        <tr>
            <td>${unaCompra.id}</td>
            <td>${unaCompra.idComprador}</td>
            <td>${unaCompra.idProducto}</td>
            <td>${unaCompra.cantidad}</td>
            <td>${unaCompra.monto}</td>
            <td>${unaCompra.estado}</td>
            <td> <input type="button" class="botonAprobar" id="botonAprobar${unaCompra.id}" value="Cambio"> </td>
        </tr>
        `
        }
        miTabla += `</table>`
        document.querySelector("#msgMostrarAdmin").innerHTML = miTabla

        let listaAprobar = document.querySelectorAll(".botonAprobar")
        for (let unBoton of listaAprobar) {
            unBoton.addEventListener("click", aprobarCompra)
        }
   
}
//Funcion para aprobar las compras
function aprobarCompra() {
    let idBoton = this.id
    let idComp = idBoton.substring(12)
    let compraPendienteAprobar = sistema.listaCompras.find(compra => compra.id == idComp)


    if (compraPendienteAprobar) {
        let idComprador = compraPendienteAprobar.idComprador
        let saldo = sistema.saldoComprador(idComprador)


        let producto = sistema.listaProductos.find(producto => producto.id == compraPendienteAprobar.idProducto)

        if (producto) {
            let stock = producto.stock

            if (compraPendienteAprobar.estado == "pendiente") {
                if (stock >= compraPendienteAprobar.cantidad && saldo >= compraPendienteAprobar.monto && producto.estado == "activo") {
                    compraPendienteAprobar.estado = "aprobado"
                    producto.stock -= compraPendienteAprobar.cantidad
                    producto.ganancia += compraPendienteAprobar.monto
                    producto.stockVendido += compraPendienteAprobar.cantidad

                    //Resto el monto de la compra al saldo del comrpador cuando es aprobado, sino queda igual a como estaba
                    let comprador = sistema.listaCompradores.find(comprador => comprador.id == idComprador)
                    if (comprador) {
                        comprador.saldo -= compraPendienteAprobar.monto
                    }
                    if (producto.stock <= 0){
                        producto.estado = "pausado"
                    }
                    alert("La compra ha sido aprobada con éxito. Stock restante: " + producto.stock + ", Nuevo saldo del comprador: " + comprador.saldo)
                } else {
                    compraPendienteAprobar.estado = "rechazado"
                    alert("El estado de la compra no es activo o no hay suficiente stock o saldo para aprobar la compra.")
                }
            } else {
                if (compraPendienteAprobar.estado == "rechazado") {
                    alert("La compra ya ha sido rechazada.")
                } else {
                    alert("La compra ya ha sido aprobada.")
                }
            }
        }
        aprobarProductos()
    }
}

//Listar Producto
function listarProductos() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuAdministrador").style.display = "block"
    mostrarListadoProductos()

}
//Muestro la lista de Inputs para agregar un nuevo producto
function mostrarListadoProductos() {
    let miLista = `
    
        <br><br><h3>Agregar Producto</h3>
        <br>Nombre: <input type="text" id="txtNombre"><br>
        Precio: <input type="number" id="txtPrecio"><br>
        Stock: <input type="number" id="txtStock"><br>
        Descripcion: <input type="text" id="txtDescripcion"><br>
        Imagen: <input type="text" id="txtImagen"><br>
        <input type="button" id="btnAgregarProducto" value="Agregar">
        <br><br><p id="msgAgregarProducti"></p><br>
        `

    document.querySelector("#msgMostrarAdmin").innerHTML = miLista

    let btnAgregarProducto = document.querySelector("#btnAgregarProducto")
    btnAgregarProducto.addEventListener("click", agregarProducto)
}
//Funcion para agregar el producto indicado
function agregarProducto() {
    let nombre = document.querySelector("#txtNombre").value
    let precio = document.querySelector("#txtPrecio").value
    let stock = document.querySelector("#txtStock").value
    let descripcion = document.querySelector("#txtDescripcion").value
    let imagen = document.querySelector("#txtImagen").value

    if (nombre != "" && precio != "" && stock != "" && descripcion != "" && imagen != "") {
        let unProducto = new Productos(nombre, descripcion, precio, stock, imagen)
        sistema.listaProductos.push(unProducto)
        mostrarListadoProductos()
        document.querySelector("#msgAgregarProducti").innerHTML = "El producto " + nombre + " ha sido agregado con exito"
    } else {
        document.querySelector("#msgAgregarProducti").innerHTML = "Complete todos los campos"

    }
}

//Chequear que cuando miestro el listado de productos sean solamente los que estan ACTIVOS LISTO
//Funcion para que el administrador pueda poer en estado "ACTIVO" o "PAUSADO" un producto

//Seccion para administrar lista de productos
function administrarProductos() {
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuAdministrador").style.display = "block"
    administrarListaProductos()
}
function administrarListaProductos() {
    let miTabla = ""
    miTabla += `
    <br><br><h3>Administrar Productos</h3>
    <table border = "1">
        <thead>
            <td>Nombre </td>
            <td>ID Producto </td>
            <td>Estado </td>
            <td>btnEstado </td>
            <td>Stock </td>
            <td>inpStock </td>
            <td>btnStock </td>
            <td>Oferta </td>
            <td>Estado Oferta</td>
        </thead>
    `

    for (let unProducto of sistema.listaProductos) {
        miTabla += `
        <tr>
            <td>${unProducto.nombre}</td>
            <td>${unProducto.id}</td>
            <td>${unProducto.estado}</td>
            <td><input type="button" class="botonEstado" id="btnEstado${unProducto.id}" value="Estado"></td>
            <td>${unProducto.stock}</td>
            <td><input type="number" id="txtCambioStock${unProducto.id}"></td>
            <td> <input type="button" class="botonStock" id="btnStock${unProducto.id}" value="Stock"> </td>
            <td> ${unProducto.oferta} </td>
            <td><input type="button" class="botonEstadoOferta" id="btnEstadoOferta${unProducto.id}" value="Estado Oferta"> </td>
        </tr>
        `

    }
    miTabla += `</table>`
    document.querySelector("#msgMostrarAdmin").innerHTML = miTabla


    let listaEstado = document.querySelectorAll(".botonEstado")
    for (let estado of listaEstado) {
        estado.addEventListener("click", cambiarEstado)
    }
    let listaStock = document.querySelectorAll(".botonStock")
    for (let stock of listaStock) {
        stock.addEventListener("click", cambiarStock)
    }
    let listaEstadoOferta = document.querySelectorAll(".botonEstadoOferta")
    for(let estadoOferta of listaEstadoOferta){
        estadoOferta.addEventListener("click", cambioEstadoOferta)
    }

}
//Cambio el estado del producto entyre activo y pausado
function cambiarEstado() {
    let idBoton = this.id
    let idProd = idBoton.substring(9)
    console.log(idProd)
    let producto = sistema.listaProductos.find(producto => producto.id == idProd)
    if (producto.estado == "activo") {
        producto.estado = "pausado"
    } else {
        if(producto.stock >0){
            producto.estado = "activo"
        }
    }
    administrarListaProductos()
}
//cambio el stock del producto
function cambiarStock() {
    let idBoton = this.id
    let idProd = idBoton.substring(8)
    console.log(idProd)
    let idCambioStock = "#txtCambioStock" + idProd
    console.log(idCambioStock)
    let cambioStock = Number(document.querySelector(idCambioStock).value)
    console.log(cambioStock)
    let producto = sistema.listaProductos.find(producto => producto.id == idProd)
    if (idProd == producto.id) {
        producto.stock = cambioStock
        if (producto.stock <= 0) {
            producto.estado = "pausado"
            console.log(producto.estado)         
        }else{
            producto.estado = "activo"
        }
        administrarListaProductos()
    }
}
//cambio el estado de la oferta del producto
function cambioEstadoOferta(){
    let idBoton = this.id
    let idProd = idBoton.substring(15)
    console.log(idProd)
    let producto = sistema.listaProductos.find(producto => producto.id == idProd)

    if (producto.oferta == "no") {  
        producto.oferta = "si"
    }else{
        producto.oferta = "no"
    }
administrarListaProductos()
}

//Seccion para visualizar las ganancias de los productos vendidos
function ganancias(){
    ocultarTodo()
    document.querySelector("#pantallaCabecera").style.display = "block"
    document.querySelector("#pantallaMenuAdministrador").style.display = "block"
    mostrarGanancias()
}
//Funcion para mostrar las ganancias por producto, el stock que se vendio y las ganancias totales de todos los productos
function mostrarGanancias(){
        let miTabla = ""
        miTabla += `
        <br><br><h3>Ver Ganancias</h3>
        <table border = "1">
            <thead>
                <td>Nombre </td>
                <td>ID Producto </td>
                <td>Stock Vendido</td>
                <td>Monto vendido</td>

            </thead>
        `
       
        let gananciaTotal = 0
        for (let unProducto of sistema.listaProductos) {
            gananciaTotal += unProducto.ganancia
            miTabla += `
            <tr>
                <td>${unProducto.nombre}</td>
                <td>${unProducto.id}</td>
                <td>${unProducto.stockVendido}</td>
                <td>${unProducto.ganancia}</td>

            </tr>
            `
    
        }
        miTabla += `</table>
        <p>El monto total de ganancias es de: ${gananciaTotal}</p>`
        document.querySelector("#msgMostrarAdmin").innerHTML = miTabla

}