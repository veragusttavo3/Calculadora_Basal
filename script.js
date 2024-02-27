const PESO = document.getElementById("peso");
const BOTON = document.getElementById("calcular");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const ERROR = document.getElementById("error")
const MAN_DIVIDIDO_24 = document.getElementById("man_dividido_24")
const DECISION = document.getElementById("doctor")


BOTON.addEventListener("click",calcularFlujo);let decision = 2000;
function calcularFlujo(){
let peso = PESO.value;
let decision = DECISION.value
if(peso<1 || peso==undefined){
    ERROR.style.display = "block";
    FLU.style.display = "none";
    MAN.style.display = "none";
    MAN_DIVIDIDO_24.style.display = "none";console.log(DECISION.value);
}
else{ERROR.style.display = "none";
}
if(peso>0){
    console.log(peso)
    if(peso < 30){
        let volumen_diario =  holliday(peso);
        let m = mantenimiento(volumen_diario);
        let mantenimiento_y_medio = m*1.5;
        imprimir(volumen_diario,m,mantenimiento_y_medio);
    }else{
        let volumen_diario = superficie(peso,decision)
        let m = mantenimiento(volumen_diario);
        let mantenimiento_y_medio = m*1.5;
        imprimir(volumen_diario,m,mantenimiento_y_medio);
    }

}
}

 function imprimir(volumen_diario,m,mantenimiento_y_medio){
    FLU.innerHTML = Math.round(volumen_diario) + " cc/diario";
    FLU.style.display = "block";
    console.log(volumen_diario);
    MAN.innerHTML = Math.round(m) + " cc/hs";
    MAN.style.display = "block";
    console.log(m);
    MAN_DIVIDIDO_24.innerHTML ="m+m/2 " + Math.round(mantenimiento_y_medio) + " cc/hs";
    MAN_DIVIDIDO_24.style.display = "block";
    console.log(mantenimiento_y_medio);
 }
function mantenimiento(volumen_diario){
    return volumen_diario/24;
}

function holliday(peso){
    console.log("holliday")
    const volumen_diario = peso<=10            ? peso * 100:
                      peso>10 && peso <=20? ((peso-10)*50) + 1000:
                      peso>20             ?( (peso-20)*20 )+ 1500:"";
                      console.log(volumen_diario);
    return volumen_diario;
}
function superficie(peso,decision){
    console.log("superficie")
    let superficie_corporal = (( (peso * 4) + 7) / (peso + 90));
    console.log(superficie_corporal);
const volumen_diario = decision == 1500? superficie_corporal * 1500:
                       decision == 2000? superficie_corporal * 2000:
                       console.log("fuera de rango");
                       return volumen_diario;
}