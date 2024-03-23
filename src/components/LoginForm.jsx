import React, { Component } from "react";
import { logIn } from "../utilities/users-service";

export default class LoginForm extends Component {
    state ={
        email: "",
        password: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };


    handleLogin = async (event) => {
        event.preventDefault();
        console.log("Logging in with:", this.state.email, this.state.password);
        
        try {
           
            const loginData = {...this.state};
           console.log('this is log in form logindata = ', loginData)
  
            const user = await logIn(loginData);
            console.log('form awaitng user return = ' , user)
            this.props.setUser(user);
  
            
          } catch {
            // An error occurred 
            this.setState({ error: 'Sign Up Failed - Try Again' });
          }

    };
    
    render () {
        return (
        <>
        <div className='form-container'>
        <form name="log-in" onSubmit={this.handleLogin}> 
        <label>Email</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
        <label>Password</label>
        <input type="text" name="password" value={this.state.password} onChange={this.handleChange}></input>
        <button type="submit">LOG IN</button>
        </form>
        </div>
        </>
    );
};

};
