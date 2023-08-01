let nombre = prompt("Ingrese su nombre")
alert("Bienvenido al Restaurante Cang Sheng" + " " + nombre)


const opcion_salir = 6

const productos=[
    {
        Id: 1,
        nombre: "Gyozas",
        valor: 12000,
        categoria:"entrada"
    },
    {
        Id:2,
        nombre: "pita",
        valor: 8000,
        categoria:"entrada"
    },
    {
        Id:3,
        nombre: "Palito Queso",
        valor: 10000,
        categoria:"entrada"
    },
    {
        Id:4,
        nombre: "Ramen",
        valor: 25000,
        categoria:"fuerte"
    },
    {
        Id:5,
        nombre: "Sushi",
        valor: 15000,
        categoria:"fuerte"
    },
    {
        Id:6,
        nombre: "Arroz Cantones",
        valor: 15000,
        categoria:"fuerte"
    },
    {
        Id:7,
        nombre: "Limonada",
        valor: 15000,
        categoria:"bebida"
    },
    {
        Id:8,
        nombre: "Cerveza",
        valor: 15000,
        categoria:"bebida"
    },
    {
        Id:9,
        nombre: "Sake",
        valor: 15000,
        categoria:"bebida"
    },
    {
        Id:10,
        nombre: "Tiramisu",
        valor: 15000,
        categoria:"postre"
    },
    {
        Id:11,
        nombre: "Pie de limon",
        valor: 15000,
        categoria:"postre"
    },
    {
        Id:12,
        nombre: "Flan",
        valor: 15000,
        categoria:"postre"
    }

]
const carrito =[]

const verEntradas =()=>{
    let mensaje = 'Lista de entradas: \n';
    productos.forEach(el=>{
        if(el.categoria=== "entrada"){
            mensaje = mensaje + `${el.Id}-${el.nombre}$${el.valor} `
    }
    })

    const opcion = parseInt(prompt(mensaje))
    const productoSeleccionado=productos.find(producto => producto.Id == opcion)

    carrito.push(productoSeleccionado)
    alert("Agregado al carrito")
    console.log(productoSeleccionado.nombre +" "+ productoSeleccionado.valor)

} 


const verFuertes =()=>{
    let mensaje = 'Lista de Platos fuertes: \n';
    productos.forEach(el=>{
        if(el.categoria=== "fuerte"){
            mensaje = mensaje + `${el.Id}-${el.nombre}$${el.valor} `
    }
    })

    const opcion = parseInt(prompt(mensaje))
    const productoSeleccionado=productos.find(producto => producto.Id == opcion)

    carrito.push(productoSeleccionado)
    console.log(productoSeleccionado.nombre +" "+ productoSeleccionado.valor)
    alert("Agregado al carrito")
}

const verBebidas =()=>{
    let mensaje = 'Lista de bebidas: \n';
    productos.forEach(el=>{
        if(el.categoria=== "bebida"){
            mensaje = mensaje + `${el.Id}-${el.nombre}$${el.valor} `
    }
    })

    const opcion = parseInt(prompt(mensaje))
    const productoSeleccionado=productos.find(producto => producto.Id == opcion)

    carrito.push(productoSeleccionado)
    console.log(productoSeleccionado.nombre +" "+ productoSeleccionado.valor)
    alert("Agregado al carrito")
}

const verPostres =()=>{
    let mensaje = 'Lista de postres: \n';
    productos.forEach(el=>{
        if(el.categoria=== "postre"){
            mensaje = mensaje + `${el.Id}-${el.nombre}$${el.valor} `
    }
    })

    const opcion = parseInt(prompt(mensaje))
    const productoSeleccionado=productos.find(producto => producto.Id == opcion)

    carrito.push(productoSeleccionado)
    console.log(productoSeleccionado.nombre +" "+ productoSeleccionado.valor)
    alert("Agregado al carrito")
}


const verDetalles=()=>{
        let mensaje = 'Detalles de la compra: \n';
        carrito.forEach(el=>{
            mensaje = mensaje + `${el.Id}-${el.nombre}$${el.valor} `;
    })
    
    const total = carrito.reduce((acumulado,producto)=>acumulado + producto.valor,0 )
    
    mensaje += `Total de la compra: $${total} \n`
    mensaje += "Desea finalizar su compra (si/no)\n"
    const respuesta =prompt(mensaje);
    if(respuesta.toLowerCase() == "si"){
        alert("Gracias por su compra")
        return
    }

}



opcion=parseInt(prompt("Elija una de las siguientes opciones \n 1. Ver Entradas \n 2. Ver Platos fuertes \n 3. Ver Bebidas \n 4. Ver Postres  \n 5. Ver detalles de su compra \n 6. Salir"))

while(opcion != opcion_salir){
    switch(opcion){
        case 1:
            verEntradas();
            break
        case 2:
            verFuertes();
            break
        case 3:
            verBebidas();
            break
        case 4:
            verPostres();
            break
        case 5:
            verDetalles();
            break
        default:
            alert("Opcion invalida");
            break
    }
    opcion=parseInt(prompt("Elija una de las siguientes opciones \n 1. Ver Entradas \n 2. Ver Platos fuertes \n 3. Ver Bebidas \n 4. Ver Postres  \n 5. Ver detalles de su compra \n 6. Salir"))

}
