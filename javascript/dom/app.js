// Needed for document.getElementById & document.getElementsByTagName 1-4 Video

/*
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');


myButton.addEventListener('click', () =>{
	myHeading.style.color = myTextInput.value;
});

*/

/* Get Element by Tag Name
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i +=1){
	myList[i].style.color = 'purple';
}
*/

/* Query selector & query selector all
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i +=1){
	errorNotPurple[i].style.color = 'red';
}


const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i +=1){
	evens[i].style.backgroundColor = 'lightgray';
}
*/
 // Text content method
 const toggleList = document.getElementById('toggleList');
 const listDiv = document.querySelector('.list');
 const descriptionInput = document.querySelector('input.description');
 const descriptionP = document.querySelector('p.description');
 const descriptionButton = document.querySelector('button.description');
 const  addItemInput = document.querySelector('input.addItemInput');
 const  addItemButton = document.querySelector('button.addItemButton');
 const listUL = listDiv.querySelector('ul');
 const lis =  listUL.children;
 const firstListItem  = listUL.firstElementChild;
 const lastListItem = listUL.lastElementChild;

 firstListItem.style.backgroundColor='lightskyblue';
 lastListItem.style.backgroundColor='lightsteelblue';

/*Event listener */


/*const listItems = document.getElementsByTagName('li');

for (let i = 0; i< listItems.length; i+=1){

listItems[i].addEventListener('mouseover', () =>{
	listItems[i].textContent = listItems[i].textContent.toUpperCase();
});
listItems[i].addEventListener('mouseout', () =>{
	listItems[i].textContent = listItems[i].textContent.toLowerCase();
});
}*/
 /* Event Listener simpler version with bubbleing */

/*
listDiv.addEventListener('mouseover', (event) =>{

	if(event.target.tagName=='LI'){
		event.target.textContent =  event.target.textContent.toUpperCase();
	}

});
	
listDiv.addEventListener('mouseout', (event) =>{
	if(event.target.tagName=='LI'){
		event.target.textContent =  event.target.textContent.toLowerCase();
	}
});

*/

function attachListItemButtons(li){
	let up = document.createElement('button');
	up.className ='up';
	up.textContent = 'up';
	li.appendChild(up);
	let down = document.createElement('button');
	down.className ='down';
	down.textContent = 'down';
	li.appendChild(down);
	let remove = document.createElement('button');
	remove.className ='remove';
	remove.textContent = 'remove';
	li.appendChild(remove);

}

for (let i = 0; i < lis.length; i+=1) {
	attachListItemButtons(lis[i]);
}

listUL.addEventListener('click', (event) =>{

	if(event.target.tagName=='BUTTON'){
		if(event.target.className=='remove'){
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		if(event.target.className=='up'){
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;

			if(prevLi){
				ul.insertBefore(li, prevLi);
			}
			
		}
		if(event.target.className=='down'){
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			
			if(nextLi){
				ul.insertBefore(nextLi, li);
			}
			
		}
	}

});

/**** EXAMPLE Handler ****/
/*
document.addEventListener('click', (event) =>{
	console.log(event.target);
})
*/
 toggleList.addEventListener('click', ()=>{
 	if (listDiv.style.display =='none'){
 		toggleList.textContent ='Hide List';
 		listDiv.style.display = 'block';

 	}else{
 		toggleList.textContent ='Show List';
 		listDiv.style.display = 'none';
 	}

 });

 descriptionButton.addEventListener('click', () =>{
 	descriptionP.innerHTML = descriptionInput.value + ':';
 	descriptionInput.value='';

 });

addItemButton.addEventListener('click', ()=>{
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent= addItemInput.value;
	attachListItemButtons(li);
	ul.appendChild(li);
	addItemInput.value='';

});



