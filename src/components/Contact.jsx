import React, { useState } from 'react';

const Contact = () => {
	const [data, setData] = useState({
		name:"",
		email:"",
		phone:"",
		message:""
	});

	const InputEvent = (event) => {
		const {name, value} = event.target;
		setData((prevVal) => {
			return{
				...prevVal,
				[name]:value
			}
		})
	}

	const formSubmit = (e) => {
		e.preventDefault();
		alert(`My name is ${data.name}, email is ${data.email}, you can call me on ${data.phone}, my message ${data.message}`)
	}
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">
					Contact Us
				</h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Name</label>
								<input type="text" className="form-control" id="name" name="name" value={ data.name } onChange={InputEvent} placeholder="Enter your name" required />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">Email address</label>
								<input type="email" className="form-control" id="email" name="email" value={ data.email } onChange={InputEvent} placeholder="name@example.com" required />
							</div>
							<div className="mb-3">
								<label htmlFor="phone" className="form-label">Phone</label>
								<input type="text" className="form-control" id="phone" name="phone" value={ data.phone } onChange={InputEvent} placeholder="Enter your phone number" required />
							</div>
							<div className="mb-3">
								<label htmlFor="Message" className="form-label">Write your review or any suggestions...</label>
								<textarea className="form-control" id="msg" name="message" value={ data.message } onChange={InputEvent} rows="3"></textarea>
							</div>
							<button type="submit" className="btn btn-outline-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
