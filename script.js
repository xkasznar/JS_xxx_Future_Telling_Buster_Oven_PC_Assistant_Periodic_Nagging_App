console.log("jede to");

var okwouldbe;
var goods = 0;
var total = 0;
var brancher;

function introIX(){
	responsiveVoice.speak("Can you tell future?", "UK English Male", {pitch: 0.5});
}

function goodEnding(){
	responsiveVoice.speak("Great", "UK English Male", {pitch: 0.5});
	document.getElementById('virgin').style.display = 'none';
	document.getElementById('great').style.display = 'block';
	document.getElementById('sorry').style.display = 'none';
}

function badEnding(){
	responsiveVoice.speak("Sorry", "UK English Male", {pitch: 0.5});
	document.getElementById('virgin').style.display = 'none';
	document.getElementById('great').style.display = 'none';
	document.getElementById('sorry').style.display = 'block';
}

function affectPCChoice(okwouldbe){
	document.getElementById('circ').style.display = 'none';
	document.getElementById('star').style.display = 'none';
	document.getElementById('tria').style.display = 'none';
	document.getElementById('umbr').style.display = 'none';
	switch(okwouldbe){
		case 0:
			document.getElementById('circ').style.display = 'block';
			break;
		case 1:
			document.getElementById('star').style.display = 'block';
			break;
		case 2:
			document.getElementById('tria').style.display = 'block';
			break;
		default:
			document.getElementById('umbr').style.display = 'block';
			break;
	}
}
function affectUkaz(){
	total++;
	console.log("okwouldbe: "+okwouldbe.toString()+", goods: "+goods.toString()+", total: "+total.toString());
	brancher = (goods/total)*510*1.25-510*0.25;
	if(brancher < 0)
		brancher = 0;
	document.getElementById('ukaz').style.bottom = (28+brancher).toString()+'px';
}

function circle(){
	okwouldbe = Math.floor(Math.random() * 4);
	affectPCChoice(okwouldbe);
	if(okwouldbe == 0){
		goods++;
		goodEnding();
	}
	else{
		badEnding();
	}
	affectUkaz();
}
function star(){
	okwouldbe = Math.floor(Math.random() * 4);
	affectPCChoice(okwouldbe);
	if(okwouldbe == 1){
		goods++;
		goodEnding();
	}
	else{
		badEnding();
	}
	affectUkaz();
}
function triangle(){
	okwouldbe = Math.floor(Math.random() * 4);
	affectPCChoice(okwouldbe);
	if(okwouldbe == 2){
		goods++;
		goodEnding();
	}
	else{
		badEnding();
	}
	affectUkaz();
}
function umbrella(){
	okwouldbe = Math.floor(Math.random() * 4);
	affectPCChoice(okwouldbe);
	if(okwouldbe == 3){
		goods++;
		goodEnding();
	}
	else{
		badEnding();
	}
	affectUkaz();
}

var preTO;
var postTO;

function goSX(){
	document.getElementById('s0').style.display = "none";
	document.getElementById('s1').style.display = "none";
	document.getElementById('s2').style.display = "none";
	document.getElementById('s2b').style.display = "none";
	document.getElementById('s3').style.display = "none";
	document.getElementById('s4').style.display = "none";
	document.getElementById('s4b').style.display = "none";
}
function goS1(){
	responsiveVoice.speak("Oven is heating up...");
	document.title = "Oven is heating up..."+" - Cooking - Martin Kasznár";
	
	goSX();
	document.getElementById('s1').style.display = "block";
	setTimeout(responsiveVoice.speak, preTO*1000/4, "25 percent thru");
	setTimeout(responsiveVoice.speak, preTO*1000/2, "50 percent thru");
	setTimeout(responsiveVoice.speak, 3*preTO*1000/4, "75 percent thru");
	setTimeout(goS2, preTO*1000); 
}
function goS2(){
	responsiveVoice.speak("Oven is heated up. Filled it?");
	document.title = "Oven is heated up. Filled it?"+" - Cooking - Martin Kasznár";
	
	goSX();
	document.getElementById('s2').style.display = "block";
	document.getElementById('s2b').style.display = "block";
}
function goS3(){
	responsiveVoice.speak("Oven is cooking...");
	document.title = "Oven is cooking..."+" - Cooking - Martin Kasznár";
	
	goSX();
	document.getElementById('s3').style.display = "block";
	setTimeout(responsiveVoice.speak, postTO*1000/4, "25 percent thru");
	setTimeout(responsiveVoice.speak, postTO*1000/2, "50 percent thru");
	setTimeout(responsiveVoice.speak, 3*postTO*1000/4, "75 percent thru");
	setTimeout(goS4, postTO*1000);
}
function goS4(){
	responsiveVoice.speak("Oven finished cooking. Reset?");
	document.title = "Oven finished cooking. Reset?"+" - Cooking - Martin Kasznár";
	
	goSX();
	document.getElementById('s4').style.display = "block";
	document.getElementById('s4b').style.display = "block";
}
function goS0(){
	responsiveVoice.speak("Welcome to Cooking.");
	document.title = "Welcome to Cooking."+" - Cooking - Martin Kasznár";
	
	goSX();
	document.getElementById('s0').style.display = "block";
}

function evaluate_cooking(){
	var preHH = document.getElementById('preH');
	var preMH = document.getElementById('preM');
	var preSH = document.getElementById('preS');
	var postHH = document.getElementById('postH');
	var postMH = document.getElementById('postM');
	var postSH = document.getElementById('postS');
	if(preHH.value == "" || parseInt(preHH.value) < 0)
		preHH.value = "0";
	if(preMH.value == "" || parseInt(preMH.value) < 0)
		preMH.value = "0";
	if(preSH.value == "" || parseInt(preSH.value) < 0)
		preSH.value = "0";
	if(postHH.value == "" || parseInt(postHH.value) < 0)
		postHH.value = "0";
	if(postMH.value == "" || parseInt(postMH.value) < 0)
		postMH.value = "0";
	if(postSH.value == "" || parseInt(postSH.value) < 0)
		postSH.value = "0";
	
	preTO = parseInt(preHH.value)*3600 + parseInt(preMH.value)*60 + parseInt(preSH.value);
	postTO = parseInt(postHH.value)*3600 + parseInt(postMH.value)*60 + parseInt(postSH.value);
	console.log("preTO = ",preTO.toString());
	console.log("postTO = ",postTO.toString());
	
	goS1();
}

var nagTO;
var iIDs = [];

function purgeUH(){
	for (let i = 0; i < iIDs.length; i++) {
		clearTimeout(iIDs[i]);
	}
}

function purgeFL(){
	document.title = "I am currently silent."+" - Nagger - Martin Kasznár";
	document.getElementById('nS0').style.display = "block";
	document.getElementById('nS1').style.display = "none";
	
	purgeUH();
}

function nag(){
	document.title = "Nagging..."+" - Nagger - Martin Kasznár";
	document.getElementById('nS0').style.display = "none";
	document.getElementById('nS1').style.display = "block";
	
	purgeUH();
	var taH = document.getElementById('ta');
	responsiveVoice.speak(taH.value, "UK English Male");
	iIDs.push(setTimeout(nag, nagTO*1000));
}

function evaluate_nagging(){
	var nagHH = document.getElementById('nagH');
	var nagMH = document.getElementById('nagM');
	var nagSH = document.getElementById('nagS');
	if(nagHH.value == "" || parseInt(nagHH.value) < 0)
		nagHH.value = "0";
	if(nagMH.value == "" || parseInt(nagMH.value) < 0)
		nagMH.value = "0";
	if(nagSH.value == "" || parseInt(nagSH.value) < 0)
		nagSH.value = "0";
	
	nagTO = parseInt(nagHH.value)*3600 + parseInt(nagMH.value)*60 + parseInt(nagSH.value);
	console.log("nagTO = ",nagTO.toString());
	
	nag();
}