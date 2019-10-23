import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {
    
    state={ 
        event1: false,
        event2: false,
        event3: false,
        event4: false,
        event5: false,
     }

     componentDidUpdate(){

     }

     handleCheck=(event)=>{ 
        this.setState({
            [event.target.name]:  !!this.state[event.target.name] ? false  : true
        })
     }

     createEventArray=()=>{
        let checkvalueArr = Object.values(this.state);
        let eventArr = [];
        for(let i=0; i < checkvalueArr.length; i++){
            if(checkvalueArr[i]===true){
                eventArr = [...eventArr, this.props.eventdata[i]]
            }
        }
        return eventArr
     }

    render() {
        let eventdata = this.props.eventdata
        
        if(eventdata.length <= 1){
            return( <section>  </section>)
        }
        else{
            return (
                <section>
                    
                    <h2> Choose your family's destiny:  </h2>
                    <form onSubmit={(event)=>this.props.handleEventSubmit(event, this.createEventArray())} >
                    <label>  { this.props.eventdata[0].title }
                            <input name="event1" type="checkbox" checked={this.state.event1} onChange={this.handleCheck}  />
                        </label>
                        <label>  { this.props.eventdata[1].title }
                            <input name="event2" type="checkbox" checked={this.state.event2} onChange={this.handleCheck}  />
                        </label>
                        <label>  { this.props.eventdata[2].title }
                            <input name="event3" type="checkbox" checked={this.state.event3} onChange={this.handleCheck}  />
                        </label>
                        <label>  { this.props.eventdata[3].title }
                            <input name="event4" type="checkbox" checked={this.state.event4} onChange={this.handleCheck}  />
                        </label>
                        <label>  { this.props.eventdata[4].title }
                            <input name="event5" type="checkbox" checked={this.state.event5} onChange={this.handleCheck}  />
                        </label>
                        <label > <div>
                            <input type="submit" value="10 years later....."  />
                        </div>
                        </label>
                    </form>
                </section>
            )
        }
        
        
    }
}

