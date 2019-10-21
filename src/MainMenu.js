import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {

    //loggedInUserId
    //token

    state = {
        games: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.props.loggedInUserId}`)
            .then(res => res.json())
            .then(playerData => {
                this.setState({games: playerData.games})
            })
    }

    createContinueButton = (data) => {
        return (
            <button key={data.id} onClick={() => this.props.chooseGame(data.id)} >{data.surname}</button>
        )
    }


    render() {
        return (
            <div>
                <Link to='/new'>
                    <button key={"new"}type="button" className="btn btn-info">new</button>
                </Link>
                { this.state.games.map( game => this.createContinueButton(game)) }
            </div>
        )
    }
}

