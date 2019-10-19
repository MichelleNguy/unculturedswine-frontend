import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        newUser: false,
        buttonText: "Login",
        errors: [],
        username: "",
        password: ""
    }

    changeToSignUp = () => {
        let newText
        this.state.buttonText === "Sign Up" ? newText = "Login" : newText = "Sign Up"
        this.setState({
            newUser: this.state.newUser ? false : true,
            buttonText: newText
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        if (this.state.username === "" || this.state.password === "") { 
            this.setState({ errors: "Please do not leave any fields blank"})
            return
        }
        this.authenticateUser()
    }

    authenticateUser = () => {
            // fetch("http://localhost:3000/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         username: this.state.username,
            //         password: this.state.password
            //     })
            // }).then(res => res.json())
            //     .then(data => {
            //         if (data.errors) {
            //             this.setState({
            //                 errors: data.errors
            //             })
            //         } else {
            //             this.props.setToken(data.token, data.user_id)
            //         }
            //     })
        this.props.setToken("blahblah", 1)
    }

    handleCHange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                { !this.state.errors.empty ? this.state.errors : ""}
                <button onClick={this.changeToSignUp}>{this.state.buttonText}</button>
                <form  onSubmit={evt => this.handleSubmit(evt)}>
                    <input onChange={evt => this.handleCHange(evt)} type="text" name="username" placeholder="username" value={this.state.username}></input>
                    <input onChange={evt => this.handleCHange(evt)} type="password" name="password" placeholder="password" value={this.state.password}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
