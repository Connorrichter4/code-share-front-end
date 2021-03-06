import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { APIURL } from '../../config';

import './Signup.css';
//import styles from './Signup.module.css'

// RegExp is a regular expression for testing the most basic email,address structure
// string searching algorithim from codespot.org
// to make sure you input a valid email address// or certain characters
const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Signup extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			userName: null,
			email: null,
			password: null,
			createdUser: false,
			showPassword: false,
			//hold strings for errors that pop up
			// this formErrors I am passing it along to form Valid function
			formErrors: {
				userName: '',
				email: '',
				password: '',
			},
		};
	}

	// event propogation
	// line 54 work on later to create popUp
	handleSubmit = (e) => {
		e.preventDefault();

		fetch(`${APIURL}users/signup`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				username: this.state.userName,
				email: this.state.email,
				password: this.state.password,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ createdUser: true });
				this.props.handleSignUp();
				this.props.handleLogin();
			})
			.catch(console.error);
	};

	handleChange = (e) => {
		e.preventDefault();
		// destructing syntax for line 64
		const { name, value } = e.target;
		let formErrors = { ...this.state.formErrors };

		// switch is just a giant else/if statement
		switch (name) {
			case 'userName':
				// check if the length of the input os more than 3 characters
				formErrors.userName =
					value.length < 3 ? 'minimum 3 characaters required' : '';
				break;
			case 'email':
				formErrors.email = emailRegex.test(value)
					? ''
					: 'invalid email address';
				break;
			case 'password':
				formErrors.password =
					value.length < 6 ? 'minimum 6 characaters required' : '';
				break;
			default:
				break;
		}
		// state updating
		this.setState({ formErrors, [name]: value });
	};

	render() {
		const { formErrors } = this.state;

		return (
			<>
				{this.state.createdUser && <Redirect to='/' />}
				<div className='wrapper'>
					<div className='form-wrapper'>
						<button className='close' onClick={this.props.handleSignUp}>
							X
						</button>
						<h1>Create Account</h1>
						<form onSubmit={this.handleSubmit}>
							<div className='userName'>
								<label htmlFor='userName'>User Name</label>
								<input
									className={formErrors.userName.length > 0 ? 'error' : null}
									placeholder='User Name'
									type='text'
									name='userName'
									noValidate
									onChange={this.handleChange}
								/>
								{formErrors.userName.length > 0 && (
									// if form userName length greater than 0 return this message
									<span className='errorMessage'>{formErrors.userName}</span>
								)}
							</div>
							<div className='email'>
								<label htmlFor='email'>Email</label>
								<input
									className={formErrors.email.length > 0 ? 'error' : null}
									placeholder='Email'
									type='email'
									name='email'
									onChange={this.handleChange}
								/>
								{formErrors.email.length > 0 && (
									<span className='errorMessage'>{formErrors.email}</span>
								)}
							</div>
							<div className='password'>
								<label htmlFor='password'>Password</label>
								<input
									className={formErrors.password.length > 0 ? 'error' : null}
									placeholder='Password'
									type={this.state.showPassword ? 'text' : 'password'}
									name='password'
									onChange={this.handleChange}
								/>
								<span
									className='toggle-password'
									onMouseEnter={() => this.setState({ showPassword: true })}
									onMouseLeave={() => this.setState({ showPassword: false })}>
									{this.state.showPassword ? '🙈' : '👀 Hover + type'}
								</span>
								{formErrors.password.length > 0 && (
									<span className='errorMessage'>{formErrors.password}</span>
								)}
							</div>
							<div className='createAccount'>
								<button type='submit'>Create Account</button>
								<Link to='/' onClick={this.props.handleAlreadyHaveAccount}>
									Already Have an Account?
								</Link>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default Signup;
