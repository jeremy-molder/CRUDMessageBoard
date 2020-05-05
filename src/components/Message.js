import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditableLabel from 'react-inline-editing'

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      message: this.props.message,
      poster: this.props.poster,
      dateposted: this.props.dateposted
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleMessageChange = evt => {
    console.log(evt);
    this.setState({ message: evt });
  };


  render() {
    return (
      <div className="messageBackground">
        <div className="submittedUser">
          <h4>{this.state.poster}</h4>
        </div>
        <EditableLabel
          text={this.state.message}
          labelClassName='myLabelClass'
          inputClassName='myInputClass'
          inputWidth='200px'
          inputHeight='25px'
          inputMaxLength='50'
          onFocus={this.handleMessageChange}
          onFocusOut={() => {this.props.apiUpdate(this)}}
        />
        <div className="datePosted">
          <h5>{this.state.dateposted}</h5>
        </div>
        <button onClick={() => this.props.deleteMessage(this)}>
          Delete
        </button>
      </div>
    );
  }
}

Messages.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  poster: PropTypes.string,
  dateposted: PropTypes.string
}

export default Messages;