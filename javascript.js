document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("btn-acrescimo").disabled = true;
      document.getElementById("btn-acrescimo").style.color = 'gray';

      document.getElementById("btn-gol1").disabled = true;
      document.getElementById("btn-gol1").style.color = 'gray';

      document.getElementById("btn-gol2").disabled = true;
      document.getElementById("btn-gol2").style.color = 'gray';

      document.getElementById("btn-vermelho1").disabled = true;
      document.getElementById("btn-vermelho1").style.color = 'gray';

      document.getElementById("btn-vermelho2").disabled = true;
      document.getElementById("btn-vermelho2").style.color = 'gray';

      document.getElementById("vermelho1").hidden = true;
      document.getElementById("vermelho2").hidden = true;
  });

function iniciarjogo(){

    let contadorsegundo = document.querySelector('#contador-seg');
    let contador = 1;
    let minuto = document.querySelector('#contador-minuto');
    let contadorminuto = 1;

    document.getElementById("btn-inicio").disabled = true;
    document.getElementById("btn-inicio").style.color = 'gray';
    
    document.getElementById("btn-acrescimo").disabled = false;
    document.getElementById("btn-acrescimo").style.color = 'white';
    
    document.getElementById("btn-gol1").disabled = false;
    document.getElementById("btn-gol1").style.color = 'white';

    document.getElementById("btn-gol2").disabled = false;
    document.getElementById("btn-gol2").style.color = 'white';

    document.getElementById("btn-vermelho1").disabled = false;
    document.getElementById("btn-vermelho1").style.color = 'white';

    document.getElementById("btn-vermelho2").disabled = false;
    document.getElementById("btn-vermelho2").style.color = 'white';

    let x = setInterval(function() {
                
        if (contador==20){
                minuto.innerHTML = '0' + contadorminuto++;
                contador = 0;
        }
        if (contador<10){ 
           contadorsegundo.innerHTML = '0' + contador++;
        }else{
            contadorsegundo.innerHTML = + contador++;
        }   
    
    }, 1000);
}

let min =1;
let g1=1;
let g2=1;

function addacrescimo(){
    let add = document.querySelector('#contadoracrescimo');
    add.innerHTML = min++; 
}

function fezgol1(){    
        let gol1 = document.querySelector('#gol1');
        gol1.innerHTML = g1++; 
        document.getElementById('time1').style.backgroundColor = 'blueviolet';
        document.getElementById('time1').style.color = 'white';
        document.getElementById('nometime1').innerText = 'Gooolll';
        document.getElementById('primeiro-placar').style.width = '500px'
        document.getElementById('time1').style.width = '340px';
        
        
    
        w = setInterval(function(){
    
            document.getElementById('time1').style.backgroundColor = 'white';
            document.getElementById('time1').style.color = 'rgba(0, 0, 0, 0.717)';
            document.getElementById('nometime1').innerText = 'VAS';
            document.getElementById('primeiro-placar').style.width = '340px';    
            document.getElementById('time1').style.width = '200px';
        },3000)  
}

function fezgol2(){
    let gol2 = document.querySelector('#gol2');
    gol2.innerHTML = g2++;

    document.getElementById('time2').style.backgroundColor = 'blueviolet';
    document.getElementById('time2').style.color = 'white';
    document.getElementById('nometime2').innerText = 'Gooolll';
    document.getElementById('segundo-placar').style.width = '500px'
    document.getElementById('time2').style.width = '340px';
    
    

    w = setInterval(function(){

        document.getElementById('time2').style.backgroundColor = 'white';
        document.getElementById('time2').style.color = 'rgba(0, 0, 0, 0.717)';
        document.getElementById('nometime2').innerText = 'COR';
        document.getElementById('segundo-placar').style.width = '340px';
        document.getElementById('time2').style.width = '200px';
        document.getElementById('nometime2').style.fontSize = '80px';
    },3000)
}


function vermelho1(){
    document.getElementById('vermelho1').hidden = false;
    document.getElementById('btn-vermelho1').disabled = true;
    document.getElementById('btn-vermelho1').style.color = 'gray';
}

function vermelho2(){
    document.getElementById('vermelho2').hidden = false;    
    document.getElementById('btn-vermelho2').disabled = true;
    document.getElementById('btn-vermelho2').style.color = 'gray';
}