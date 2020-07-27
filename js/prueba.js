var total = 1;
function btnPlay(){
    document.getElementById("btnPlay").style.display="none";
    document.getElementById("1").style.display="flex";
}
function correct(){
    document.getElementById("iH1").src="media/happy.svg";
    document.getElementById("iH2").src="media/happy.svg";
    document.getElementById("iH3").src="media/happy.svg";
    document.getElementById("iH4").src="media/happy.svg";
    document.getElementById("iH5").src="media/happy.svg";
    document.getElementById("iH6").src="media/happy.svg";
    document.getElementById("iH7").src="media/happy.svg";
    document.getElementById("iH8").src="media/happy.svg";
    document.getElementById("iH9").src="media/happy.svg";
    document.getElementById("iH10").src="media/happy.svg";
}
function incorrect(){
    document.getElementById("iH1").src="media/sad.svg";
    document.getElementById("iH2").src="media/sad.svg";
    document.getElementById("iH3").src="media/sad.svg";
    document.getElementById("iH4").src="media/sad.svg";
    document.getElementById("iH5").src="media/sad.svg";
    document.getElementById("iH6").src="media/sad.svg";
    document.getElementById("iH7").src="media/sad.svg";
    document.getElementById("iH8").src="media/sad.svg";
    document.getElementById("iH9").src="media/sad.svg";
    document.getElementById("iH10").src="media/sad.svg";
}