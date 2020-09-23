var inicio = new Audio(), integrantes = new Audio(), gana = new Audio(), pierde = new Audio();
inicio.src="inicio.mp3";
integrantes.src="integrantes.mp3";
gana.src="gana.mp3";
pierde.src="pierde.mp3";
function btnPlay(){
    document.getElementById("btnPlay").style.display="none";
    return document.getElementById(1).style.display="flex";
}
let n = 1, cont = 0;
function correct() {
    cont += 1;
    document.getElementById("iH-img"+n).src="media/happy.svg";
    document.getElementById(n).style.display="none";
    n += 1;
    moreThanTen();
    showHappy();
    winnerOrLoser();
}
function incorrect() {
    document.getElementById("iH-img"+n).src="media/sad.svg";
    document.getElementById(n).style.display="none";
    n += 1;
    moreThanTen();
    showSad();
    winnerOrLoser();
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