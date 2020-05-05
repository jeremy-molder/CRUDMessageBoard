import React from "react"

class SendMessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.getMessages = this.getMessages.bind(this);
    }

    componentDidMount() {

    }

    sendMessage(text) {

    }

    
} 
export default SendMessageForm