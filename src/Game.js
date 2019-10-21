import React, { Component } from 'react'
import Hud from './Hud'
import Input from './Input'

export default class Game extends Component {
    // SLICE IN INPUT COMPONENT IS TEMP
    state={
        gamedata: {},
        eventdata: []
    }

    componentDidMount(){
        // GRAB GAME ID PASSED IN FROM APP
        fetch(`http://localhost:3000/games/${this.props.id}`)
            .then(response=>response.json())
            .then((fetchedgamedata)=>{this.setState({  gamedata: fetchedgamedata })})

            fetch("http://localhost:3000/events/")
            .then(response=>response.json())
            .then((fetchedeventdata)=>{this.setState({  eventdata: fetchedeventdata })})
    }




    render() {
        return (
            <div>
                <Hud gamedata ={this.state.gamedata} />
                <Input eventdata ={this.state.eventdata.slice(0, 5)} />
            </div>
        )
    }
}
