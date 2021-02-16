let metodo = ''
	let ConSal = ''
	const freir = prompt(`Buen día estimado cliente. \n ¿Deseas un huevo frito? \n (Por favor Digita SI o NO)`);
	if(freir=='SI' || freir=='S' || freir=='si' || freir =='s'){
	    alert(`Recibirás un delicioso HUEVO FRITO.`);
	    metodo = 'FRITO' 
	}else{
	    alert(`Recibirás un delicioso HUEVO HERVIDO.`);
	    metodo = 'HERVIDO'
	}
	

	const sal = prompt(`¿Deseas aplicar sal al huevo? \n (Por favor Digita SI o NO)`);
	if(sal=='SI' || sal=='S' || sal=='si' || sal=='s'){
	    alert(`Has respondido que quieres sal. Hemos agregado la dosis exacta de sal.`);
	    ConSal = 'CON SAL';
	}else{
	    ConSal = 'SIN SAL';
	}
	

	alert(`Aquí está tu plato. Disfruta de tu delicioso HUEVO ${metodo} ${ConSal}`)
	console.log(`Aquí está tu plato. Disfruta de tu delicioso HUEVO ${metodo} ${ConSal}. \n Buen provecho.`)
