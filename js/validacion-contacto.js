var mensaje_uno= "";
var mensaje=document.getElementById("mensajes");

function validar_nombre_contacto(){
   
    var nombre_y_apellido=document.getElementById("campo-nombre-uno").value;
    var error=false;
    
   if(nombre_y_apellido==""){
       error=true;
       mensaje_uno+="<p> Tiene que escribir su nombre y apellido </p>";
       mensaje.style.color="red"; 
   }

   if(error){
       mensaje.innerHTML=mensaje_uno;
       return false;
   }else{
       return true;
   }
}
     document.getElementById("enviar-boton").addEventListener("click",validar_nombre_contacto);
     

function validar_email(){
    var regexpEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var error=false;
    var email=document.getElementById("campo-email").value;

    if((!regexpEmail.test(email))){
        error=true;
        mensaje_uno+="<p> Tiene que ingresar un email valido </p>";
        mensaje.style.color="red";
    }
    if(error){
        mensaje.innerHTML=mensaje_uno;
        return false;
    }else {
        return true;
    }
}
document.getElementById("enviar-boton").addEventListener("click",validar_email);

function validar_telefono(){
var regexpTelefono=/^[0-9]{4}[-]{1}[0-9]{4}$/;
var regexpTelefono_dos=/^[0-9]{4}[0-9]{4}$/;
var error=false;
var telefono_contacto=document.getElementById("campo-telefono").value;
var mensaje_telefono="";

if((!regexpTelefono.test(telefono_contacto)) && (!regexpTelefono_dos.test(telefono_contacto))){
    error=true;
}else{
    mensaje_telefono+= "<p> Ingreso correctamente un telefono </p>";
    mensaje.style.color="green";
}

if (error) {
    return false;
}else{
    mensaje.innerHTML=mensaje_telefono;
    return true;
}
}

document.getElementById("enviar-boton").addEventListener("click",validar_telefono);

function validar_text_area(){
var maximo =1000;
var error=false;
var text_area= document.getElementById("mensaje-text-area").value.length;
var caracteres_restantes = maximo - text_area;

if(caracteres_restantes <=0){
    mensaje_uno+="<p> Llegaste al limite de caracteres </p>"
    mensaje.style.color="red";
}

if (error) {
    mensaje.innerHTML=mensaje_uno;
    return false;
    
}else{
    mensaje.innerHTML="<p> Caracteres restantes: </p>" +caracteres_restantes;
    return true;
}
}
document.getElementById("mensaje-text-area").addEventListener("keyup",validar_text_area);