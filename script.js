(function(window) {
	var names=["Yaakov","Asish","John","Joe","Yamaha","Anirudh","Jam","Janu","Kunu","Yash"];
	for (var i = 0; i < names.length; i++) {
		var firstletter = ((names[i]).charAt(0)).toLowerCase();
		if (firstletter === 'j') {
			window.byespeaker.speak(names[i]);
		}
		else{
			window.hellospeaker.speak(names[i]);
		}
	}
})(window)