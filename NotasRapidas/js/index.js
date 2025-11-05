function naoUrgente(){
    var novaNota, nota
    novaNota=document.createElement("li")
    novaNota.id="listaN"
    novaNota.innerText=nota=document.getElementById("nota").value
    if(nota==""){
        alert("Digite uma nota antes de adicionar")
        return
    }
  var ul=document.getElementById("nurg_list")
    ul.appendChild(novaNota)
}

function Urgente(){
    var novaNota, nota
    novaNota=document.createElement("li")
    novaNota.id="listaUrgente"
    novaNota.innerText=nota=document.getElementById("nota").value
    if(nota==""){
        alert("Digite uma nota antes de adicionar")
        return
    }
    var ul=document.getElementById("urg_list")
    ul.appendChild(novaNota)
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
    var ul = document.getElementById("nurg_list")
    if(ul){
        if(ul.innerHTML == ""){
            alert("Não há texto para remover")    
        }else{
            ul.innerHTML = ""
        }
    }else{
        alert("Não há texto para remover")    
    }
}

function apagarUrgente(){
    var ul = document.getElementById("urg_list")
    if(ul){
        if(ul.innerHTML == ""){
            alert("Não há texto para remover")    
        }else{
            ul.innerHTML = ""
        }
    }else{
        alert("Não há texto para remover")    
    }
}