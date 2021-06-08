function compra(){
  var confirmacion= prompt("Ingrese el numero de su tarjeta para realizar el pago", "");

  if(confirmacion != null){
     var confir = confirm("¿Estas seguro(a) de realizar la compra?");	  
     if(confir){
       alert("¡gracias por realizar su compra!");
     }
     else{
       alert("¡Vuelva pronto!");
     }
  }
  else{
  alert("Por favor ingrese el numero de su tarjeta");
  }
} 