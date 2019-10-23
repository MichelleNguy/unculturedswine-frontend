import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { directive } from '@babel/types';

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
                <button key={data.id} onClick={() => this.deleteGame(data.id)} >DELETE SAVE</button>
                <Link to='/game'>
                    <button key={data.id} onClick={() => this.props.chooseGame(data.id)} >{data.surname}</button>
                </Link>
            </li>
        )
    }


    render() {
        return (
            <React.Fragment>
                <h1>Please choose an option below:</h1>
                <ul id="main-menu">
                    <Link to='/new'>
                        <button key={"new"}type="button" className="btn btn-info">NEW GAME</button>
                    </Link>
                    { this.state.games.map( game => this.createContinueButton(game)) }
                </ul>
            </React.Fragment>
        )
    }
}

