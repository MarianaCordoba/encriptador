
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"


//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value = "";
    btnCopy.style.display = "block";

}

 function encriptar(stringEncriptada) {
    let matrizCodigo = [ ["e"], ["i"], ["o"], ["u"], ["a"]];
    let matrizEncriptada = [ ["enter"], ["imes"], ["ober"], ["ufat"], ["ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
        for(let p=0; p < matrizCodigo.length; p++) {
            if(stringEncriptada.includes(matrizCodigo[p][0]))  {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[p][0], matrizEncriptada[p][0])
            }
        }
        return stringEncriptada;
    
    
    }
//Desencriptar mensaje

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value = "";
    btnCopy.style.display = "block";

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter"], ["imes"], ["ober"], ["ufat"], ["ai"]];
    let matrizDesencriptada = [ ["e"], ["i"], ["o"], ["u"], ["a"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let p=0; p < matrizCodigo.length; p++) {
        if(stringDesencriptada.includes(matrizCodigo[p][0]))  {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[p][0], matrizDesencriptada[p][0])
        }
    }
    return stringDesencriptada;


}
//botón copiar

function copiar() {

    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}





