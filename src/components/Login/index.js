import { Component } from "react";
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component{
    state={username:'', password: ''}

    onSubmitSuccess = (jwtToken) => {
        Cookies.set(jwtToken, 'jwt_token', {expires: 30});
    }

    submitLoginForm = async (event) => {
        event.preventDefault()
        const {username, password} = this.state
        const userDetails={username, password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url, options);
        const data = await response.json()
        if (response.ok === true){
            this.onSubmitSuccess(data.jwt_token)
        }else{
            
        }
        
        
    }

    onChangeUserName = (event) =>{
        this.setState({username: event.target.value})
    }

    onChangePassword = (event) =>{
        this.setState({password: event.target.value})
    }

    render(){
        const {username, password} = this.state
        return(
            <div className="login-container">
                <div className="login-card">
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="jobby" className="comp-logo"/>
                    <form className="login-form" onSubmit={this.submitLoginForm}>
                        <label className="login-form-label">Username</label><br/>
                        <input id="user-inp" className="login-input-elements" type="input" value={username} placeholder="username" onChange={this.onChangeUserName}/><br/>
                        <label className="login-form-label">Password</label><br/>
                        <input id="user-password" className="login-input-elements" type="password" value={password} placeholder="password" onChange={this.onChangePassword}/><br/>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login