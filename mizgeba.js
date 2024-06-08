
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwbRWZ4urTQUMLNL1ePA-SPhhWLR_ZoJLIrn_Wr2J-TH1rsPVNhvfl8lWZkbky4iBAFRg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
	e.preventDefault()
	fetch(scriptURL, {method: 'POST', body: new FormData(form)})
	.then(response => alert("Thank you! your form is submitted successfully."))
	.then(() => { window.location.reload();})
	.catch (error => console.error('Error!', error.message))
})