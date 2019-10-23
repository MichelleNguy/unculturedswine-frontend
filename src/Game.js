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

    handleEventSubmit=(event, selectedEvents)=>{
        event.preventDefault()
        console.log("submitted form", this.state.gamedata.id)

        if(selectedEvents.length > 0){
                console.log("attempting fetch", this.state.gamedata.id)
                fetch("http://localhost:3000/games/" + `${this.state.gamedata.id}`,{
                    method: "PATCH",
                    body: JSON.stringify({
                        "id": this.state.gamedata.id,
                        "events": selectedEvents
                    }),
                    headers:{
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response=>response.json())
                .then(console.log)
        }
        


        return 
    }

    render() {
        // NEED TO CHANGE WAY EVENTDATA IS SELECTED
        return (
            <div>
                <Hud gamedata ={this.state.gamedata} />
                <Input eventdata ={this.state.eventdata.slice(0, 5)} handleEventSubmit={this.handleEventSubmit }  />
            </div>
        )
    }
}
