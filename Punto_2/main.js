//Productos
const codigos = [0,1,2,3,4,5,6];
const precios = [400, 1000, 2200, 1500, 2500, 2800, 2000];
const productos = ['BonIce', 'Palito de helado de agua','Palito de helado de crema','Bombón helado con arequipe', 'Bombón helado con chispas de chocolate', 'Bombón helado con fresas','Medio litro de helado'];
let MasBarato = precios[0]
for (var i=0; i<productos.length; i++){
    if(MasBarato>precios[i]){
        MasBarato = precios[i];
    }
}


let stop = 'N';


while (stop=='N'){
    nombre = prompt(`Bienvenido. por favor digita tu nombre. \n Si no deseas ser atendido, presiona teclas 'Scape' o 'Enter' o haz clic en 'Cancelar'.`);
    if(nombre=='' || nombre==null){
        stop = '';
        console.clear();
    }else{
        dinero = parseInt(prompt(`Hola ${nombre}, por favor digita tu presupuesto para comprar helados.`));
        if(dinero<MasBarato){
            console.clear();
            alert(`${nombre}, lamentablemente no tenemos estos productos \n con precio inferior a tu presupuesto de $${dinero}. \n Que tengas un excelente día.`);
            stop = '';
        }else{
            console.log(`${nombre}, Tu presupuesto es de $${dinero} y te alcanza para comprar:`);
            for (var i=0; i<productos.length; i++){
                if(dinero>=precios[i]){
                    console.log(`Código ${codigos[i]}: Valor: ${precios[i]} - ${productos[i]}`);
                }
            }
            let pido = prompt(`${nombre}, por favor digita el código del helado que desees.`);
            if(pido=='' || pido==null){
                console.log(`\n ${nombre} NO has seleccionado ningún código. Ten un feliz día.`);
            }else{
                console.log(`\n ${nombre} has seleccionado el código: ${codigos[pido]} - ${productos[pido]} - Precio: ${precios[pido]}`);
                console.log(`\n Entregas: $${dinero} y recibes cambio de $${dinero-precios[pido]} \n Disfruta tu helado y ten un excelente día.`);
            }
            
        }
            
    }
}
