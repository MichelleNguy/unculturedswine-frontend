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
    allgamedata: []
  }

  componentDidMount() {
	// TEMPORARY FETCH FOR TESTING NEED TO POPULATE ARRAY
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
          <Route path="/new" exact render={ this.renderNewGameForm } />
          <Route path="/game" exact render={ this.renderGame } />
          <Route component={ DangerZone } />
        </Switch>
      </div>
    )
  }

  createNewGame = (surname) => {
    console.log("creating new game with data.. ", surname)
    //need to fetch a post here to create
  }

  renderNewGameForm = () => {
    return <New createNewGame={this.createNewGame}/>
  }

  chooseGame = (gameId) => {
    //set gameID here in state
    console.log(gameId)
  }

  renderMainMenu = () => {
    return <MainMenu token={this.state.token} loggedInUserId={this.state.loggedInUserId} chooseGame={this.chooseGame}/>
  }

  renderGame = () => {
    return <Game />
  }

  renderLogin = (history) => {
    return (
      <div>
        {this.state.token ? history.push('/mainmenu') : <Login setToken={this.setToken}/>}
      </div>
    )
  }

}
