

function sendDate(name,lastName,dni,address){
  var name=document.getElementById("name").value;
  var lastName=document.getElementById("lastName").value;
  var dni=document.getElementById("dni").value;
  var address=document.getElementById("address").value;
document.getElementById("datos").innerHTML= "<li> Nombre : "+name+"</li><br>"+
                                            "<li> Apellido: "+lastName+"</li><br>"+
                                            "<li> DNI: "+dni+"</li><br>"+
                                            "<li> Dirección: "+address+"</li><br>";

}
