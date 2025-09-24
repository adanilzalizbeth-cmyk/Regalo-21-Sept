document.getElementById('btnMostrar').addEventListener('click', function () {
    document.getElementById('texto-inicial').style.display = 'none';
    const cont = document.getElementById('oculto');
    if(cont) cont.style.display = 'grid';
    this.style.display = 'none';
});

const claveCorrecta = "5956";
let claveIngresada = "";

const cubos = document.querySelectorAll('.cubo');
const display = document.getElementById('display');
const contenidoBloqueado = document.getElementById('contenidoBloqueado');
const mensajeError = document.querySelector('.mensajeError');
const mensajeFelicitaciones = document.querySelector('.mensajeFelicitaciones');
const btnAceptarFelicitaciones = document.getElementById('btnAceptarFelicitaciones');
const btnAceptar = document.getElementById('btnAceptar');
const puertas = document.querySelectorAll('.Carta');
const cartas = document.querySelectorAll('.Carta');
const btnContinuar = document.getElementById('btnContinuar');
const SegundaVentana = document.getElementById('SegundaVentana');
document.querySelector('.puertas')

cubos.forEach(cubo => {
    cubo.addEventListener('click', () => {
        const valor = cubo.dataset.num;
        claveIngresada += valor;
        display.textContent = "*".repeat(claveIngresada.length);

        if(claveIngresada.length === claveCorrecta.length){
            if(claveIngresada === claveCorrecta){
                document.getElementById('oculto').style.display = 'none';
                display.style.display = 'none';
                document.getElementById('texto-inicial').style.display = 'none';
                document.getElementById('btnMostrar').style.display = 'none';

                // Mostrar mensaje de felicitaciones
                mensajeFelicitaciones.style.display = 'block';

            } else {
                mensajeError.style.display = 'block';

                
                // bloquear todos los cubos
                cubos.forEach(c => c.style.pointerEvents = 'none');
            }

            // resetear para siguiente intento
            claveIngresada = "";
            display.textContent = "";
        }
    });
});

// Botón aceptar error
btnAceptar.addEventListener('click', () => {
    mensajeError.style.display = 'none';

     // habilitar cubos nuevamente
    cubos.forEach(c => c.style.pointerEvents = 'auto');
});

// Botón aceptar felicitaciones
btnAceptarFelicitaciones.addEventListener('click', () => {
    mensajeFelicitaciones.style.display = 'none';
    contenidoBloqueado.style.display = 'block';
});
 
//puertas.forEach(puerta => {
    //puerta.addEventListener('click', () =>{
     //   puerta.classList('girada');//  agrega la clase que hace girar
       
   // });
//});

//const cartas = document.querySelectorAll('.Carta'); // usar plural
 // asegúrate que coincide con el HTML

let giradas = 0;

// recorrer todas las cartas
cartas.forEach(carta => {
  carta.addEventListener('click', () => {
    // solo girar si no estaba girada
    if (!carta.classList.contains('girada')) {
      carta.classList.add('girada'); 
      giradas++;

      if (giradas === 3) {
        btnContinuar.style.display = 'inline-block'; // aparece solo cuando giras 3
      }
    }
  });
});

// evento del botón
btnContinuar.addEventListener('click', () => {
  document.querySelector('.puertas').style.display = 'none'; // oculta cartas
  btnContinuar.style.display  = 'none'; // oculta botón

  //oculta los textos dentro de contenidoBloqueado
  document.querySelector('#contenidoBloqueado h2').style.display ='none';
  document.querySelector('#contenidoBloqueado p ').style.display = 'none';
  SegundaVentana.style.display = 'block'; // muestra segunda ventana
});

