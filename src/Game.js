import React, { Component } from 'react'
import Hud from './Hud'
import Input from './Input'

export default class Game extends Component {
    state={
        gamedata: {}
    }

    componentDidMount(){
        // GRAB GAME ID PASSED IN FROM APP
        fetch(`http://localhost:3000/games/${this.props.id}`)
            .then(response=>response.json())
            .then((fetchedgamedata)=>{this.setState({  gamedata: fetchedgamedata })})
    }


    render() {
        return (
            <div>
                <Hud gamedata ={this.state.gamedata} />
                <Input />
            </div>
        )
    }
}
