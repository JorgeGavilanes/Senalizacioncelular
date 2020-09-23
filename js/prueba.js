var inicio = new Audio(), integrantes = new Audio(), gana = new Audio(), pierde = new Audio();
inicio.src="inicio.mp3";
integrantes.src="integrantes.mp3";
gana.src="gana.mp3";
pierde.src="pierde.mp3";

let n = 1, cont = 0;
function btnPlay(){
    document.getElementById("btnPlay").style.display="none";
    moreThanTen();
}
function correct() {
    cont += 1;
    document.getElementById("iH-img"+n).src="media/happy.svg";
    hideAndAdd();
    moreThanTen();
    showHappy();
    winnerOrLoser();
}
function incorrect() {
    document.getElementById("iH-img"+n).src="media/sad.svg";
    hideAndAdd();
    moreThanTen();
    showSad();
    winnerOrLoser();
}
function hideAndAdd(){
    document.getElementById(n).style.display="none";
    n += 1;
}
function moreThanTen(){
    if(n <= 10){
        document.getElementById(n).style.display="flex";
    }
}
function showHappy(){
    if(n <= 10){
        document.getElementById("iH-img"+n).src="media/happy.svg";
    }
}
function showSad(){
    if(n <= 10){
        document.getElementById("iH-img"+n).src="media/sad.svg";
    }
}
function winnerOrLoser(){
    if(n > 10){
        if(cont >= 7){
            document.getElementById("dceW").style.display="block";
            document.getElementById("spanContW").innerHTML = cont;
        }else{
            document.getElementById("dceL").style.display="block";
        }
    }
}