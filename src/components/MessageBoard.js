import React, { Component } from "react"
import Modal from 'react-bootstrap/Modal'
import SendMessageForm from "./SendMessageForm"
import Messages from "./Message"

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      messages: [],
      setShow: true,
      updateShow: false,
    };
    this.api = "http://www.masprojects.site:3000";
    this.getHTMLMessages = this.getHTMLMessages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.apiUpdate = this.apiUpdate.bind(this);
    
  }

  handleClose = () => {
    this.setState({
      setShow: false
    });
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleSubmit(e) {
    fetch(this.api+"/messages")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ messages: result.messages });
      }, (error) => {
        //do something here
      });
      this.handleClose();
  }

  deleteMessage(message) {
    let messageList = this.state.messages;
    let spliceIndex = messageList.findIndex(deletedMessage => deletedMessage.id === message.id)
    fetch(this.api+"/messages/"+message.id, {method: 'DELETE'})
    .then(res => res.json())
    .then(
      (result) => {
        messageList.splice(spliceIndex, 1);
        this.setState({ messages: messageList })
      }
    )
  }

  apiUpdate(message){
    let jsonMessage = "[{ message:"+message.state.message+"}]";
    fetch(this.api+"/messages/"+message.state.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonMessage
    }).then(res => res.json())
    .then(
      (result) => {
        return;
      }
    )
  }

  getHTMLMessages() {
    let htmlMessages = [];
    
    this.state.messages.map( message => {
      let messageComponent = new Messages(message.id, message.message, message.poster, message.dateposted);
      htmlMessages.push(
        <Messages 
          id={message.id}
          message={message.message}
          poster={message.poster}
          dateposted={message.dateposted}
          deleteMessage={this.deleteMessage}
          apiUpdate={this.apiUpdate}
        />
      );
    });
    return htmlMessages;
  }

  render() {
    let messages = this.getHTMLMessages();
    return (
      <>
        <>
          <Modal show={this.state.setShow} animation={true} enforceFocus={true}>
            <Modal.Header>
              <Modal.Title> Please eneter a username. </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <form
                  onSubmit={this.handleSubmit}
                  className="gatherUsernameForm">
                  <input
                    value={this.state.username}
                    placeholder="username"
                    type="text"
                    onChange={this.handleChange}/>
                </form>
              </>
            </Modal.Body>
            <Modal.Footer>
              <button variant="primary" onClick={this.handleSubmit}>
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <div className="messageBoard">
            {messages}
          </div>
          <div className="messageForm">
          </div>
        </>
      </>
    );
    
  }
}
export default MessageBoard;