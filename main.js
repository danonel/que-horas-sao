
function load(){
    var msg = document.getElementById("msg")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    console.log(hora)
   
}