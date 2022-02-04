console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Summited Successfully!");
}

const compliment = ()=>{
	

	alert("You are sooo coooll!");

}

let form = document.querySelector('form#contact');

let imgChange = document.querySelector("img")

form.addEventListener('submit', handleSubmit);

imgChange.addEventListener("mouseover", compliment)
