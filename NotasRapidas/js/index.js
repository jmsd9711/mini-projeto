
var notaCor = 0

function naoUrgente(){
    var novaNota, nota
    novaNota=document.createElement("li")
    novaNota.id="listaN"
    novaNota.innerText=nota=document.getElementById("nota").value
    
    if (notaCor % 3 === 0) {
    novaNota.classList.add("azul")
  } else if (notaCor % 3 === 1) {
    novaNota.classList.add("verde")
  } else {
    novaNota.classList.add("roxo")
  }
  var div=document.getElementById("nUrgente")
    div.appendChild(novaNota)
  notaCor++
}

function Urgente(){
    var novaNota, nota
    novaNota=document.createElement("li")
    novaNota.id="listaUrgente"
    novaNota.innerText=nota=document.getElementById("nota").value
    
    if (notaCor % 3 === 0) {
    novaNota.classList.add("azul")
  } else if (notaCor % 3 === 1) {
    novaNota.classList.add("verde")
  } else {
    novaNota.classList.add("roxo")
  }
  var div=document.getElementById("Urgente")
    div.appendChild(novaNota)
  notaCor++
}

function removerN(){
    var li=document.getElementById("listaN")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}

function removerUrgente(){
    var li=document.getElementById("listaUrgente")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}

function apagarN(){
    var li=document.getElementById("nUrgente")
    li.innerHTML=""
}

function apagarUrgente(){
    var li=document.getElementById("Urgente")
    li.innerHTML=""
}
