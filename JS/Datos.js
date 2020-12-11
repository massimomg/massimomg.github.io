var btnBack = document.getElementById('btnBack');
btnBack.onclick = function cmo(){
    document.body.classList.toggle('BgClass');
    document.getElementById("tablaObjetos").classList.toggle("Menu_y_nombre_oscuro")
}
