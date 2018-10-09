var person= {

	name : "Gazdi",
	country : 'HUN',
	age : 31,
	treehosueStudent : true,
	skills : ['JavaScript', 'HTML', 'CSS', 'PHP']

};

for (var prop in person) {
	console.log(prop, ':' , person[prop])
}