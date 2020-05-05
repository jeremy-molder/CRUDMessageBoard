import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MessageBoard from "./components/MessageBoard"

class App extends Component {
    render() {
        return <MessageBoard />
    } 
}

ReactDOM.render(<App />, document.getElementById('root'));