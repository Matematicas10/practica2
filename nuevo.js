//alert("hola mundo");
//alert("Estas aprendiendo javascript");
//int 
var number =5;
var number1 =7;
//string
var le="cinco";
var caden="pedro";
//operadores == != < > >= <=
// and && or || not !
var bool=(number<number1)|| (3<2);
//condicionales
if (caden =="pedro"){
    alert("te llamas: "+ caden);
}
else
{
    alert("eres el impostor");
}
//switch
var letras ="ñ";
switch (letras){
    case 'a': 
    alert ("la letra es a");
    break;
    case 'b':
        alert ("la letra es b");
        break;
    default:
        alert ("no se reconoce");
    break;
}
//while 
var x=1;
while (x<3)
{
    alert (x);
    x++;
}
// for 
for ( var z=0; z<=5;z++){

    alert("estamos en "+ z)
}
//funciones 
function mifunci(){
    var name = document.getElementById('polo').value;
    alert ("tu nombre es:"+name);
}