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

                    <label> :
                        <input name="event1" type="checkbox" checked={this.state.event1} onChange={this.handleCheck}  />
                    </label>
                    <label>Option 2:
                        <input name="event2" type="checkbox" checked={this.state.event2} onChange={this.handleCheck}   />
                    </label>
                    <label> Option 3:
                        <input name="event3" type="checkbox" checked={this.state.event3} onChange={this.handleCheck}  />
                    </label>
                    <label> Option 4:
                        <input name="event4" type="checkbox" checked={this.state.event4} onChange={this.handleCheck}   />
                    </label>
                    <label>Option 5:
                        <input name="event5" type="checkbox"  checked={this.state.event5} onChange={this.handleCheck}  />
                    </label>



                </form>
                
                <div >This is where stuff goes</div>
            </section>
        )
    }
}

