function validar_formulario(){

var error=false;
var nombre_y_apellido=document.getElementById("nombre-apellido").value;
var dni = document.getElementById("dni").value;
var telefono = document.getElementById("telefono").value;
var mensajeError="";
var mensaje=document.getElementById("mensaje");
var opciones_uno=document.getElementsByName("respuesta-uno");
var opciones_dos=document.getElementsByName("respuesta-dos");
var opciones_tres=document.getElementsByName("respuesta-tres");
var opciones_cuatro=document.getElementsByName("respuesta-cuatro");
var opciones_cinco=document.getElementsByName("respuesta-cinco");

var acumulador_total=0;

if(nombre_y_apellido==""){
    mensajeError+="<p> Tiene que escribir su nombre y apellido </p>";
    error=true;
    mensaje.style.color="red";
}
if(dni==""){
    mensajeError+="<p> Tiene que escribir su dni </p>";
    error=true;
    mensaje.style.color="red";
}
if(telefono==""){
    mensajeError+="<p> Tiene que escribir su telefono </p>";
    error=true;
    mensaje.style.color="red";
}
var seleccionado=false;
for(i in opciones_uno){
    if(opciones_uno[i].checked){
       
        if (opciones_uno[i].value=="si") {
            acumulador_total++;
            
        }
        seleccionado=true;
    }
}
if (!seleccionado) {
    mensajeError+="<p>Tiene que seleccionar una opcion de la pregunta fiebre</p>"
    error=true;
}
var seleccionado=false;
for(i in opciones_dos){
    if(opciones_dos[i].checked){
       
        if (opciones_dos[i].value=="si") {
            acumulador_total++;
            
        }
        seleccionado=true;
    }
}
if (!seleccionado) {
    mensajeError+="<p>Tiene que seleccionar una opcion de la pregunta dolor de cabeza </p>"
    error=true;
}
var seleccionado=false;
for(i in opciones_tres){
    if(opciones_tres[i].checked){
       
        if (opciones_tres[i].value=="si") {
            acumulador_total++;
            
        }
        seleccionado=true;
    }
}
if (!seleccionado) {
    mensajeError+="<p>Tiene que seleccionar una opcion de la pregunta tos persistente </p>"
    error=true;
}
var seleccionado=false;
for(i in opciones_cuatro){
    if(opciones_cuatro[i].checked){
       
        if (opciones_cuatro[i].value=="si") {
            acumulador_total++;
            
        }
        seleccionado=true;
    }
}
if (!seleccionado) {
    mensajeError+="<p>Tiene que seleccionar una opcion de la pregunta dolor de garganta</p>"
    error=true;
}
var seleccionado=false;
for(i in opciones_cinco){
    if(opciones_cinco[i].checked){
        if (opciones_cinco[i].value=="si") {
            acumulador_total++;
            
        }
        seleccionado=true;
    }
}
if (!seleccionado) {
    mensajeError+="<p>Tiene que seleccionar una opcion de la pregunta dificultad para respirar</p>"
    error=true;
}
if(error){
    mensaje.innerHTML=mensajeError;
    return false;
}else{
    mensaje.innerHTML+="<p>El formulario fue completado correctamente "+acumulador_total+" Sintomas de covid fueron registrados </p>";
    return true;
}
}

document.getElementById("boton-enviar").addEventListener("click",validar_formulario);
    
function validar_paises(){
    var opcion_viaje_si=document.getElementById("si-pais");
    var opcion_viaje_no=document.getElementById("no-pais");
    var contenedor_pais=document.getElementById("contenedor-pais");

    if(opcion_viaje_si.checked){
        contenedor_pais.style.display="flex";
        return true;

    }else if (opcion_viaje_no.checked) {
        contenedor_pais.style.display="none";
        return true;
    }

}
document.getElementById("no-pais").addEventListener("click",validar_paises);
document.getElementById("si-pais").addEventListener("click",validar_paises);

function validar_dificultad_respirar(){
    var opcion_respira_si=document.getElementById("si-respirar");
    var opcion_respira_no=document.getElementById("no-respirar");
    var contenedor_direccion=document.getElementById("contenedor-direccion");

    if(opcion_respira_si.checked){
        contenedor_direccion.style.display="flex";
    }else if(opcion_respira_no.checked){
        contenedor_direccion.style.display="none";
    }
}
document.getElementById("no-respirar").addEventListener("click",validar_dificultad_respirar);
document.getElementById("si-respirar").addEventListener("click",validar_dificultad_respirar);