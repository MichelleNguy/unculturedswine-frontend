import React, { Component } from 'react';
import './App.css';

const Hud=(props)=>{
    const gameinfo = props.gamedata

    const displayfamilymembers=()=>{
        return gameinfo.characters !== undefined && gameinfo.characters.map((character)=>{
            return(
                <tr key={character.firstname}>
                    <td >Name: {character.firstname} {character.lastname}  </td>
                    <td > Age: {character.age}  </td>
                    <td > Head of family: {character.familyhead ? "Yes" : "No"} </td>
                    <td > Is dead:  {character.dead? "Nothing to see here" : "No" }</td>
                </tr>
            ) 
        })
    }

    

    return (
        <section  >
            <h2> Family: {gameinfo.surname} </h2>
            <table >
                <th > Overview:  </th>
                <tbody>
                    
                    <tr >
                        <td> Wealth: { gameinfo.wealth } </td>
                        <td> Popularity: { gameinfo.popularity } </td>
                    </tr>
                    <tr >
                        <td> Assets: { gameinfo.assets } </td>
                    </tr>
                    <tr> Family Members: </tr>
                    { displayfamilymembers() } 
                </tbody>
            </table>
        </section>
    )
}

export default Hud
