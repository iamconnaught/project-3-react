import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});

	}
	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/register', {
		      method: 'POST',
		      credentials: 'include',  // on every request we have to send the cookie
		      body: JSON.stringify(this.state),
		      headers:{
		        'Content-Type': 'application/json'
		    		}
		    	})

        	// const parsedResponse = await registerResponse.json();
        	console.log('registered');
      //   	if(parsedResponse.data === 'login successful'){
	    	// 	this.props.history.push('/');
	    	// }
	    }   
		 catch (err){
			console.error(err)
			}
	
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				Username:
				<input type="text" name="username" onChange={this.handleChange}/>
				Password:
				<input type="password" name="password" onChange={this.handleChange}/>

				<button type='submit'> Register </button>
			</form>
			)
	}
}

export default Register;