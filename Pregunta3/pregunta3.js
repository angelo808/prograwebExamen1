var num1 = "";
var tipo = "";
function asignarTipoc(tipo){
    tipo=document.getElementsByID('tipoc');

}
function asignarTipof(tipo){
    tipo=document.getElementsByID('tipof');

}
function calcular(){
    var dato = document.getElementsByID('dato').value;
    let res = 0;
    switch(tipo){
        case 'tipoc':_
        res = (parseFloat(num1) * 9/5) + 32;

        break;

        case 'tipof':
        res = (parseFloat(num1) * 32 - 32 )*5/9;
        break;

        default:
            break;
    }



}