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
            selectedEvents.forEach((event) => {
                console.log("attempting fetch", this.state.gamedata.id)
                fetch("http://localhost:3000/joingameevents/",{
                    method: "POST",
                    body: JSON.stringify({
                        "game_id": this.state.gamedata.id,
                        "event_id": event.id
                    }),
                    headers:{
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response=>response.json())
                .then(returnedData => {
                    let obj = JSON.parse(returnedData.event.effect, (key, value) => {
                        return key, value
                    })
                    for(const [k, v] of Object.entries(obj)) {
                        if (this.state.gamedata[k]) {
                            console.log("hit")
                            this.setState({
                                [k] : this.state.gamedata[k] += v
                            })
                        }
                    }
                    this.saveGame()
                })
            });
                
        }
        return 
    }

    saveGame = () => {
        let fetchData = {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(this.state.gamedata)
        }
        fetch(`http://localhost:3000/games/${this.props.id}`, fetchData)
            .then(res => res.json())
            .then(newGame => {
                this.setState({
                    gamedata: newGame
                })
            })
    }

    render() {
        // NEED TO CHANGE WAY EVENTDATA IS SELECTED
        console.log(this.state.gamedata.wealth)
        return (
            <div>
                <Hud gamedata ={this.state.gamedata} />
                <Input eventdata ={this.state.eventdata.slice(0, 5)} handleEventSubmit={this.handleEventSubmit}  />
            </div>
        )
    }
}
