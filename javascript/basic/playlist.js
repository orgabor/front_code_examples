var playList = [
	['Ha az eletben', 'Kispal es a borz'],
	['Autok egy szerpentinen', ]['Quimby'],
	['Rohand elet', 'Alvin es a mokusok'],
];

function print(message){
	document.write(message);
}

function printSongs(songs){
	var listHTML = '<ol>';

	for (var i = 0; i < songs.length; i +=1) {
		listHTML += '<li>' + songs[i][0] +' by ' + songs[i][1] +'</li>';
	}
	listHTML +='</ol>';
	print(listHTML);
}
printSongs(playList);