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

    deleteGame = (id) => {
        console.log('deleting..', id)
        fetch(`http://localhost:3000/games/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                let newGames = this.state.games.filter( game => {
                    return game.id !== id
                })
                this.setState({ games: newGames })
            })
    }

    createContinueButton = (data) => {
        return (
            <li>
                <Link to='/game'>
                    <button key={data.id} onClick={() => this.props.chooseGame(data.id)} >{data.surname}</button>
                </Link>
                <button key={data.id} onClick={() => this.deleteGame(data.id)} >DELETE</button>
            </li>
        )
    }


    render() {
        return (
            <ul>
                <Link to='/new'>
                    <button key={"new"}type="button" className="btn btn-info">new</button>
                </Link>
                { this.state.games.map( game => this.createContinueButton(game)) }
            </ul>
        )
    }
}

