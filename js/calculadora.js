//variable global
var operador = "";
function numeros(num)
{
if(operador == ""){//operando1
	//copncatena los valores de num
   //con los del operando1
   var valorInicial=document.calculadora.operando1.value;
   if(valorInicial == "0")
   {
   	document.calculadora.operando1.value = "";
   }
   document.calculadora.operando1.value=
   document.calculadora.operando1.value + num;  
}else {

   var valorInicial=document.calculadora.operando2.value;
   if(valorInicial == "0"){
   	document.calculadora.operando2.value = "";
   }
   document.calculadora.operando2.value=
   document.calculadora.operando2.value + num;  
}

}
function operador(ope)
{
   operador = ope
   }


function igual()
{
   var valor1=document.calculadora.operando1.value;
   var valor2=document.calculadora.operando2.value;
   document.calculadora.resultado = eval(valor+operador+valor2);
   {

   }

}

function borrar()
{

}