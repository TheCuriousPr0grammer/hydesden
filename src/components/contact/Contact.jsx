import React, { useState } from 'react'
import emailjs from "@emailjs/browser";

const Result = () => {
    return (
        <p>
            Mesajul tau a fost trimis cu success! Multumim pentru feedback!
        </p>
    )
}

const Contact = () => {

      const [result,setResult] = useState(false)
      const sendEmail = (e) => {
				e.preventDefault();
				emailjs
					.sendForm(
						"service_q44b265",
						"template_contact",
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
			<div className="form__headline">
				<h2>Say Hello!</h2>
				<label>Nume</label>
				<input
					type="text"
					name="fullName"
					id=""
					className="input input__name"
				/>
				<label>Numar telefon</label>
				<input type="text" name="phone" id="" className="input input__phone" />
				<label>Email</label>
				<input type="email" name="email" id="" className="input input__email" />
			</div>
			<div className="form__message">
				<span>Message</span>
				<textarea name="message" required></textarea>
			</div>
			<button>Submit</button>

			<div className="result">{result ? <Result /> : null}</div>
		</form>
	);
}

export default Contact