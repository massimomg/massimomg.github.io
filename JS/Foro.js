function CrearFecha() {
    var oggi = new Date();
    var fecha = oggi.getFullYear()+"/"+oggi.getMonth()+"/"+oggi.getDate();
    var hora = oggi.getHours() + ":" + oggi.getMinutes();
    var FechaConHora = fecha+ " " +hora;
    return FechaConHora;
}
    
function inviaMessaggio(){       
    mensaje = new Object();
        mensaje.nome = document.getElementById("nome_usuario").value;      /* */
        mensaje.messaggio = document.getElementById("messaggio").value;    /* se definen los atributos del objeto mensaje*/
        mensaje.cognome = document.getElementById("cognome_usuario").value /* */
    document.getElementById('messaggio').value = " ";
    mensaje.dateSend = CrearFecha();

    if (mensaje.messaggio != "" && mensaje.nome != "" && mensaje.cognome !="") {
        if (  mensaje.messaggio.length <= 300){
            var DivCreado = document.createElement("div"); 
            var br = document.createElement("br");
            var newContentName = document.createTextNode("{" + mensaje.dateSend +"} "+mensaje.nome +" "+ mensaje.cognome + ": " ); 
            DivCreado.appendChild(newContentName);
            var TestoMessaggio = document.createTextNode( mensaje.messaggio ); 
            DivCreado.appendChild(br);
            DivCreado.appendChild(TestoMessaggio);
            DivCreado.appendChild(br);
            document.getElementById("content").appendChild(DivCreado);
            }else{
                alert("Corrija el mensaje, tiene más de 300 caracteres")
            }

        }

    if (mensaje.messaggio == ""){
        alert("Corrija el mensaje, no puede estar vacío");
    }else{        
        if (mensaje.nome == ""){
            alert("Corrija el nombre, no puede estar vacío");
        }else{      
            if (mensaje.cognome ==""){
                alert("Corrija el apellido, no puede estar vacío");
            }
        }           
    }
}

function darFechaEnBoton(){
    var data = CrearFecha();
    var divData = document.getElementById("fecha");
    var Text = document.createTextNode(data);
    divData.appendChild(Text);
}
