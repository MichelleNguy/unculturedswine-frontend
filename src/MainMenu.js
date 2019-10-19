import React, { Component } from 'react'
import New from './New'
import Continue from './Continue'

export default class MainMenu extends Component {
    render() {
        return (
            <div>
                <New />
                <Continue />
            </div>
        )
    }
}

