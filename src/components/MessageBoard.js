import React from "react"
import SendMessageForm from "./SendMessageForm"

class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      messages: [],
      setShow: false,
    };
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
    e.preventDefault();
    //call the api to get all messages here
  }

  sendMessage() {
    //call api to upload message to db
    //grab message obj using get specific message
    //push message obj to state.messages
    this.setState({
      messages: messages.push(message)
    });
  }

  getHTMLMessages() {
    htmlMessages = [];
    this.state.messages.forEach( message => {
      htmlMessages.push(
        <div className="messageBackground">
          <div className="submittedUser">
            grab user from message obj
          </div>
          <div className="messageText">
            display message sent in obj
          </div>
        </div>
      )
    });
  }

  render() {
    let messages = getHTMLMessages();
    return (
      <>
        <Modal show={true} onHide={handleClose} animation={true} enforceFocus={true}>
          <Modal.Header closeButton>
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
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <>
          <div className="messageBoard">
            <messages />
          </div>
          <div className="messageForm">
            <SendMessageForm />
          </div>
        </>
      </>
    );
    
  }
}
export default MessageBoard;