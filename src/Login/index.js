import React, { Component } from 'react';

class Login extends Component {
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
			await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login', {
		      method: 'POST',
		      credentials: 'include', 
		      body: JSON.stringify(this.state),
		      headers:{
		        'Content-Type': 'application/json'
		    		}
		    	})
			console.log("logged in as", this.state.username);
        	// const parsedResponse = await loginResponse.json();

      //   	if(parsedResponse.data === 'login successful'){
	    	// 	this.props.history.push('/');
	    	// }
	    }   
		 catch (err){
			console.error(err)
			}
	
	}
	handleClick = async (e) => {
		e.preventDefault();
		try {
			await fetch(process.env.REACT_APP_BACKEND_URL + 'auth/logout', {
				method: "GET",
				credentials: 'include'
			})
			console.log('logged out');
		} catch (err){
			console.log(err)
		}
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				Username:
				<input type="text" name="username" onChange={this.handleChange}/>
				Password:
				<input type="password" name="password" onChange={this.handleChange}/>

				<button type='submit'> Login </button>
				<button onClick={this.handleClick}> Log Out </button>
			</form>
			)
	}
}

export default Login;