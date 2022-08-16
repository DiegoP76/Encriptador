var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var contMunieco = document.querySelector(".cont-munieco");
var contTitulo = document.querySelector(".cont-titulo");
var contParrafo = document.querySelector(".cont-parrafo");
var resultado = document.querySelector(".texto-resultado");
var btnCopiar = document.querySelector(".btn-copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

function encriptar(){
    ocultarSeccion2();
    var area = capturarTexto();
    resultado.textContent = encriptarTexto(area);
    
}

function desencriptar(){
    ocultarSeccion2();
    var area = capturarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function capturarTexto(){
    var area = document.querySelector(".textArea");
    return area.value;
}

function ocultarSeccion2(){
    contMunieco.classList.add("ocultar");
    contTitulo.classList.add("ocultar");
    contParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textTotal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i]=="a"){
            textTotal = textTotal + "ai";
        }
        else
        {
            if(texto[i]=="e"){
                textTotal = textTotal + "enter";
            }
            else
            {
                if(texto[i]=="i"){
                    textTotal = textTotal + "imes";
                }
                else
                {
                    if(texto[i]=="o"){
                        textTotal = textTotal + "ober";
                    }
                    else
                    {
                        if(texto[i]=="u"){
                            textTotal = textTotal + "ufat";
                        }
                        else
                        {
                            textTotal = textTotal + texto[i];
                        }
                    }
                }
            }
        }

    }
    return textTotal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textTotal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i]=="a"){
            textTotal = textTotal + "a";
            i=i+1;
        }
        else
        {
            if(texto[i]=="e"){
                textTotal = textTotal + "e";
                i=i+4;
            }
            else
            {
                if(texto[i]=="i"){
                    textTotal = textTotal + "i";
                    i=i+3;
                }
                else
                {
                    if(texto[i]=="o"){
                        textTotal = textTotal + "o";
                        i=i+3;
                    }
                    else
                    {
                        if(texto[i]=="u"){
                            textTotal = textTotal + "u";
                            i=i+3;
                        }
                        else
                        {
                            textTotal = textTotal + texto[i];
                        }
                    }
                }
            }
        }

    }
    return textTotal;
}

function copiar(){
    var textoCopiado = resultado.textContent;
    var area = document.querySelector(".textArea");
    area.value = textoCopiado;
}