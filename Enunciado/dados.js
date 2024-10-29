// VARIABLES GLOBALES a UTILIZAR
let nombre_j1,nombre_j2;

let tiradas_j1 =0 
let tiradas_j2=0;

let puntos_j1=0
let puntos_j2=0;

let contador_partidas=0;
let infoPartida=null;

let ganador=null;
let perdedor=null;




function iniciar(){

	if(validarInformacionInicial()==false){		
		return false;
	}

	//Iniciamos contador de partidas
	contador_partidas = contador_partidas+1 
	ganador=null;
	perdedor=null;
	document.getElementById("idBotonIniciar").setAttribute('disabled',"true");
	document.getElementById("dadoJ1").src = "img/0.png";
	document.getElementById("dadoJ2").src = "img/0.png";
	puntos_j1=puntos_j2=0;

	// Recogida de valores
	nombre_j1=document.getElementById("idInputNombreJ1").value;
	nombre_j2=document.getElementById("idInputNombreJ2").value;
	tiradas_j1=document.getElementById("idNumTiradas").value;
	tiradas_j2=tiradas_j1;

	document.getElementById("idPuntuacionJ1").innerHTML="PUNTUACIÓN: - 00 -";
	document.getElementById("idPuntuacionJ2").innerHTML="PUNTUACIÓN: - 00 -";
	
	//Empieza el juego!!!
	// Cargar información en el tablero de los jugadores
	document.getElementById("idTablero").classList.remove('ocultar');
	
	document.getElementById("idNombreJ1").innerHTML = `JUGADOR 1 : ${nombre_j1}`;
	document.getElementById("idNombreJ2").innerHTML = `JUGADOR 2 : ${nombre_j2}`;

	document.getElementById("idBotonTirarJ1").removeAttribute('disabled');
	document.getElementById("idBotonTirarJ2").removeAttribute('disabled');

	document.getElementById("tiradasJ1").innerHTML="TE QUEDAN " + tiradas_j1 + " TIRADAS";
	document.getElementById("tiradasJ2").innerHTML="TE QUEDAN " + tiradas_j2 + " TIRADAS";


}

function tiradaJ1(){
	// Actualizar Dado
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ1").src = `img/${aleatorio}.png`;
	puntos_j1 = puntos_j1 + aleatorio;

	//Actualizar puntuación
	document.getElementById("idPuntuacionJ1").innerHTML=`PUNTUACIÓN: ${puntos_j1}`;
	
	//Actualizar número de tiradas
	tiradas_j1 = parseInt(tiradas_j1) - 1;
	document.getElementById("tiradasJ1").innerHTML=`TE QUEDAN ${tiradas_j1} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}

function tiradaJ2(){
	// Actualizar Dado
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ2").src =`img/${aleatorio}.png`;
	
	//Actualizar puntuación
	puntos_j2 = puntos_j2 + aleatorio;
	document.getElementById("idPuntuacionJ2").innerHTML=`PUNTUACIÓN: ${puntos_j2}`;
	
	//Actualizar número de tiradas
	tiradas_j2 = tiradas_j2 - 1;
	document.getElementById("tiradasJ2").innerHTML=`TE QUEDAN ${tiradas_j2} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}


function comprobarGanador(){
	
	if (tiradas_j1 == 0){											// ¿Ha terminado jugador 1?
		document.getElementById("idBotonTirarJ1").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0){											// ¿Ha terminado jugador 2?
		document.getElementById("idBotonTirarJ2").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0 && tiradas_j1 == 0) {						// ¿Han terminado ambos jugadores?
		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		if (puntos_j1 > puntos_j2){				
			Swal.fire(
				`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!!`,
				`${puntos_j1} puntos`,
				'success'
			  )
			ganador=document.getElementById("idNombreJ1").value
			perdedor=document.getElementById("idNombreJ2").value	
							;
		} else if (puntos_j1 < puntos_j2) {				
			Swal.fire(
				`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!!`,
				`${puntos_j2} puntos`,
				'success'
			  )
			ganador=document.getElementById("idNombreJ1").value
			perdedor=document.getElementById("idNombreJ2").value
			
		} else{
			
			Swal.fire(
				`Partida Finalizada, ¡¡¡EMPATEEEE!!!`,
				`${puntos_j1} puntos`,
				'success'
			  )
		}

		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		
		gestionJugadores();

		gestionPuntuacion();
		
	}	
	
}
/********************************************************
*  APARTADO 1 : Implementar reloj del juego
	-> Mostrar en la parte superior del juego la fecha actual del sistema. Debe ser actualizada cada segundo. 
*******************************************************/
setInterval(reloj,1000);
function reloj(){
	let alerta=new Date();
	document.getElementById("idReloj").innerHTML=`${rellenaIzq(alerta.getHours())}:${rellenaIzq(alerta.getMinutes())}:${rellenaIzq(alerta.getSeconds())}`;
}

function rellenaIzq(num){
	let numero=num.toString();
	if(numero.length ==1){
		return `0${numero}`;
	}
	return numero;
}
/*
setInterval(hora,1000);
function hora(){
	let alerta;
	alerta=new Date();
	let hora=alerta.getHours();
	let minutos=alerta.getMinutes();
	let segundo=alerta.getSeconds();
	let tiempo=`${hora}:${minutos}:${segundo};
}
	*/

	function generarNumeroAleatorio(){
		return Math.floor(6 * Math.random() +1) ;
	}

	//tiene que estar fuera de la funcion para poder crearlo
	const jugadores=new Set();
	function gestionJugadores(){
		//alamacenar jugadores  en un array set
		jugadores.add(nombre_j1);
		jugadores.add(nombre_j2);
		let campo= document.getElementById("idNombreJugadores");
		campo.innerHTML="";

		jugadores.forEach((e) => campo.innerHTML+=`${e},`
		);
		

	}
	//crear tablas con la putacion 
	function gestionPuntuacion(){

	}


/*************************************************************
 ***********************************************************
 ***********************************************************/
 function validarInformacionInicial(){
	if(document.getElementById("idInputNombreJ1").value == false){	
		//el alert	
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debes indicar el nombre del Jugador 1!'			
		  })
		return false;
	}
	if(document.getElementById("idInputNombreJ2").value == false){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debes indicar el nombre del Jugador 2!'			
		  })
		return false;
	}

	if(document.getElementById("idNumTiradas").value == false){		
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debes indicar el Número de tiradas!'			
		  })
		return false;
	}

	let tiradas = parseInt(document.getElementById("idNumTiradas").value);
	if( isNaN(tiradas) || (!isNaN(tiradas) && (tiradas<=0))){		
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'el número de tiradas debe ser superior a 0!'			
		  })
		return false;
	}

	return true;
}
