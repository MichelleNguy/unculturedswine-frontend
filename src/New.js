import React, { Component } from 'react'

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
        this.props.createNewGame(this.state.surname)
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

