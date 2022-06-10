console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has bee submitted succeessfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let imgEvent = document.querySelector('img')

function imageEvent() {
	alert('You are handsome')
}

imgEvent.addEventListener('mouseover', imageEvent)