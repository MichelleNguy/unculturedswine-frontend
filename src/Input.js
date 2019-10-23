import React, { Component } from 'react';
import Event from "./Event";
import './App.css';

export default class Input extends Component {
    
    state={ 
        event1: false,
        event2: false,
        event3: false,
        event4: false,
        event5: false,
     }

     handleCheck=(event)=>{ 
        this.setState({
            [event.target.name]:  !!this.state[event.target.name] ? false  : true
        })
     }

     showEvents=()=>{
        return this.props.eventdata.map((event)=>{
            return <Event  key={ event.id } eventObj ={event}  />
        })
     }


    render() {
        
        return (
            <section>
                <h2> Choose your family's destiny:  </h2>
                <form >
                    { this.showEvents() }
                </form>
                
                <div >This is where stuff goes</div>
            </section>
        )
    }
}

