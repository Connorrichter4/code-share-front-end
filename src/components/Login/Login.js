import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {
	const { authToken, setAuthToken } = props;
	const initialUser = {
		email: '',
		password: '',
	};
	const [user, setUser] = useState(initialUser);
	const [login, setLogin] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:4000/users/signin', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setAuthToken(data);
				setLogin(true);
			})
			.catch(console.error);
	};

	if (login) {
		return <Redirect to='/' />;
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<form onSubmit={handleSubmit}>
						<h1> Please sign In</h1>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								className='form-control'
								name='email'
								placeholder='Enter Email'
								value={user.email}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>password</label>
							<input
								type='password'
								className='form-control'
								name='password'
								placeholder='Enter Password'
								value={user.password}
								onChange={handleChange}
							/>
						</div>
						<button type='submit' className='btn'>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
