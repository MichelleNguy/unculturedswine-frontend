import React, { Component } from 'react'
import Hud from './Hud'
import Input from './Input'

export default class Game extends Component {
    render() {
        return (
            <div>
                <Hud />
                <Input />
            </div>
        )
    }
}
