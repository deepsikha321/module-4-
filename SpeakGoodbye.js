
(function(window){
	var byespeaker ={};

var speakword ="Goodbye";
byespeaker.speak = function(name) {
	console.log(speakword+""+name);
}
window.byespeaker=byespeaker;
})(window);