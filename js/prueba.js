var cont;
function btnPlay(){
    document.getElementById("btnPlay").style.display="none";
    return document.getElementById("1").style.display="flex";
}
function correct1(){
    document.getElementById("iH1").src="media/happy.svg";
    document.getElementById("1").style.display="none";
    document.getElementById("2").style.display="flex";
}
function incorrect1(){
    document.getElementById("iH1").src="media/sad.svg";
    document.getElementById("1").style.display="none";
    document.getElementById("2").style.display="flex";
    document.getElementById("iH2").src="media/sad.svg";
}
function correct2(){
    document.getElementById("iH2").src="media/happy.svg";
    document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="flex";
}
function incorrect2(){
    document.getElementById("iH2").src="media/sad.svg";
    document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="flex";
    document.getElementById("iH3").src="media/sad.svg";
}

function correct3(){
    document.getElementById("iH3").src="media/happy.svg";
    document.getElementById("3").style.display="none";
    document.getElementById("4").style.display="flex";
}
function incorrect3(){
    document.getElementById("iH3").src="media/sad.svg";
    document.getElementById("3").style.display="none";
    document.getElementById("4").style.display="flex";
    document.getElementById("iH4").src="media/sad.svg";
}
function correct4(){
    document.getElementById("iH4").src="media/happy.svg";
    document.getElementById("4").style.display="none";
    return document.getElementById("5").style.display="flex";
}
function incorrect4(){
    document.getElementById("iH4").src="media/sad.svg";
    document.getElementById("4").style.display="none";
    document.getElementById("5").style.display="flex";
    document.getElementById("iH5").src="media/sad.svg";
}

function correct5(){
    document.getElementById("iH5").src="media/happy.svg";
    document.getElementById("5").style.display="none";
    document.getElementById("6").style.display="flex";
}
function incorrect5(){
    document.getElementById("iH5").src="media/sad.svg";
    document.getElementById("5").style.display="none";
    document.getElementById("6").style.display="flex";
    document.getElementById("iH6").src="media/sad.svg";
}
function correct6(){
    document.getElementById("iH6").src="media/happy.svg";
    document.getElementById("6").style.display="none";
    document.getElementById("7").style.display="flex";
}
function incorrect6(){
    document.getElementById("iH6").src="media/sad.svg";
    document.getElementById("6").style.display="none";
    document.getElementById("7").style.display="flex";
    document.getElementById("iH7").src="media/sad.svg";
}

function correct7(){
    document.getElementById("iH7").src="media/happy.svg";
    document.getElementById("7").style.display="none";
    document.getElementById("8").style.display="flex";
}
function incorrect7(){
    document.getElementById("iH7").src="media/sad.svg";
    document.getElementById("7").style.display="none";
    document.getElementById("8").style.display="flex";
    document.getElementById("iH8").src="media/sad.svg";
}
function correct8(){
    document.getElementById("iH8").src="media/happy.svg";
    document.getElementById("8").style.display="none";
    document.getElementById("9").style.display="flex";
}
function incorrect8(){
    document.getElementById("iH8").src="media/sad.svg";
    document.getElementById("8").style.display="none";
    document.getElementById("9").style.display="flex";
    document.getElementById("iH9").src="media/sad.svg";
}

function correct9(){
    document.getElementById("iH9").src="media/happy.svg";
    document.getElementById("9").style.display="none";
    document.getElementById("10").style.display="flex";
}
function incorrect9(){
    document.getElementById("iH9").src="media/sad.svg";
    document.getElementById("9").style.display="none";
    document.getElementById("10").style.display="flex";
    document.getElementById("iH10").src="media/sad.svg";
}
function correct10(){
    document.getElementById("iH10").src="media/happy.svg";
}
function incorrect10(){
    document.getElementById("iH10").src="media/sad.svg";
}
function changeWin(){
    if("cont()">7){
        document.getElementById("10").style.display="none";
    document.getElementById("dceW").style.display="flex";
    }else{
        document.getElementById("10").style.display="none";
    document.getElementById("dceL").style.display="flex";
    }
}