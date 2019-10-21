import React from 'react';
import './App.css';
import DangerZone from './DangerZone'
import Login from './Login'
import MainMenu from './MainMenu'
import Game from './Game'
import New from './New'
import { Route, NavLink, Switch } from 'react-router-dom'

export default class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null,
    gameId: null
  }

  componentDidMount() {
	// TEMPORARY FETCH FOR TESTING NEED TO POVIDE USER ID
	fetch("http://localhost:3000/users/1")
		.then(response=>response.json())
		.then((gamedata)=>this.initializeState(gamedata))
  }

  initializeState=(gamedata)=>{
	this.setState({
		loggedInUserId: localStorage.loggedInUserId,
		token: localStorage.token,
		allgamedata: gamedata.games
	  })
  }

  setToken = (token, userId) => {
    localStorage.token = token
    localStorage.loggedInUserId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  
  render() { 
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={({ history }) =>  this.renderLogin(history) } />
          <Route path="/mainmenu" exact render={ this.renderMainMenu }/>
          <Route path="/new" exact render={({ history }) => this.renderNewGameForm(history) } />
          <Route path="/game" exact render={ this.renderGame} />
          <Route component={ DangerZone } />
        </Switch>
      </div>
    )
  }

  renderNewGameForm = (passedHistory) => {
    return <New history={passedHistory} loggedInUserId={this.state.loggedInUserId} chooseGame={this.chooseGame}/>
  }

  chooseGame = (id) => {
    //set gameID here in state
    this.setState({gameId: id})
  }

  renderMainMenu = () => {
    return <MainMenu token={this.state.token} loggedInUserId={this.state.loggedInUserId} chooseGame={this.chooseGame}/>
  }

  renderGame = () => {
    return <Game id={this.state.gameId}/>
  }

  renderLogin = (history) => {
    return (
      <div>
        {this.state.token ? history.push('/mainmenu') : <Login setToken={this.setToken}/>}
      </div>
    )
  }

}
