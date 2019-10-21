import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class New extends Component {

    state = {
        surname: "",
        errors: []
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        if (this.state.surname === "") {
            this.setState({ errors: [
                "Surname cannot be blank"
            ]})
            return
        }
        let fetchData = {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.loggedInUserId,
                surname: this.state.surname
            })
        }
        fetch(`http://localhost:3000/games`, fetchData)
            .then( res => res.json())
            .then( gameObject => {
                this.props.chooseGame(gameObject.id)
                this.props.history.push('/game')
            })
    }


    render() {
        return (
            <div>
                {!this.state.errors.empty ? this.state.errors : ""}
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <input onChange={evt => this.handleChange(evt)} type="text" name="surname" placeholder="family surname" value={this.state.surname}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }


}

