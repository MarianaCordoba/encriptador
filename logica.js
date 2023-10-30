
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");


function encriptar(){
   var texto2 = inputTexto.value
   var tex = mensaje.toLowerCase()
   .replaceAll("e","enter")
   .replaceAll("i","imes")
   .replaceAll("a","ai")
   .replaceAll("o","ober")
   .replaceAll("u","ufat")
   
   mensaje.value = tex
   mensaje.style.backgroundImage = "none"
   inputTexto.value="";
   
   return (tex)

}


function  desencriptar(){
    var texto2 = inputTexto.value
    var tex = mensaje.toLowerCase()
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
   
    mensaje.value = tex
    mensaje.style.backgroundImage = "none"
    inputTexto.value="";
    return (tex)

}


function copiar(){
   mensaje.select();  //selecciona todo lo que hay en muestratexto .select() es una funcion definida en js (propio de js)
    //document.execCommand('copy');//lo copia, es propio de js (ya no se debe usar esto! )
    navigator.clipboard.writeText(muestraTexto.value)
    mensaje.value=""   //cuando copia deja vacio el textarea2 
    inputTexto.focus();  //vuelvo el foco al textarea para que sea mas facil pegar
    mensaje.style.backgroundImage="url('Muñeco.png')" //tuve que poner comillas dobles y adentro simples
    return Swal.fire({
        title: 'Copiado',
        text: 'Texto copiado con exito!',
        icon: 'success',
        confirmButtonText: 'Bien'
      })
}  