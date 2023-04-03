
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Result = () => {
	return <p>Inregistrarea contului tau Hyde's Den s-a realizat cu success!</p>;
};

const Signup = () => {


const [result, setResult] = useState(false);
const sendEmail = (e) => {
	e.preventDefault();
	emailjs
		.sendForm(
			"service_q44b265",
			"template_inregistrare",
			e.target,
			"IXIv4qSYGZ3v-HGYP"
		)
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	e.target.reset();
	setResult(true);
};

return (
	<form action="" onSubmit={sendEmail}>
		<div className="signup__headline">
			<label>Nume</label>
			<input type="text" name="fullName" id="" className="input input__name" />
			<label>Numar telefon</label>
			<input type="text" name="phone" id="" className="input input__phone" />
			<label>Email</label>
			<input type="email" name="email" id="" className="input input__email" />
			<label>Parola</label>
			<input type="password" name="password" id="" className="input input__password" />
		</div>
		<button>Submit</button>
		<div className="result">{result ? <Result /> : null}</div>
	</form>
);
}

export default Signup