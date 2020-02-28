document.getElementById('Falar').addEventListener("click",()=>{
	Fale(document.getElementById("texto").value);
});

function Fale(texto){
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
	var pergunta = document.getElementById("texto").value;
	//alert(pergunta);
	var chat = [];
	chat.push(pergunta);
	var pergunta="";
	alert(chat);
}

