import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {
    
    state={  }

    displayOptions=()=>{
        let eventdata = this.props.gamedata.events
        if (eventdata  !== undefined ){
            return eventdata.map((event)=>{
                return(
                    <label> 
                        <input type="checkbox" />
                        {event.title}
                        <div > {event.description}  </div>
                    </label>
                )  
            })
        }
        else{
            return
        }
    }



    render() {
        return (
            <section>
                <h2> Choose your family's destiny:  </h2>
                <form >
                    { this.displayOptions()}
                </form>
                
                <div >This is where stuff goes</div>
            </section>
        )
    }
}

