import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom"
import MessageBoard from "./components/MessageBoard"
import SendMessageForm from './SendMessageForm'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        this.updateMessage = this.updateMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.getMessages = this.getMessages.bind(this);
    }

    componentDidMount() {

    }

    getMessages() {

    }

    updateMessage(message) {

    }

    deleteMessage(message) {

    }
    
    render() {
        return (
            <Switch>
                <Route path="/messageboard" component={MessageBoard} />
            </Switch>
        );
    } 
}

export default App;