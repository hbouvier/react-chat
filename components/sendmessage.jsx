import React from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, DropdownButton, Button, Input, Glyphicon, MenuItem } from 'react-bootstrap';

import Message from './message'
import { sendMessage } from '../actions'


const sendButton = ({onClick}) => (<Button onClick={onClick} bsSize="small" bsStyle="warning">Send</Button>);

var SendMessage = React.createClass({
  getInitialState: function() {
    return {initialPlaceHolder: 'Type your message here...', text: ''};
  },
  handleTextChange: function(event) {
    this.setState({text: event.target.value});
  },
  handleTextKeyUp: function(event) {
    console.log('this:',this)
    if(event.keyCode == 13) {
      this.handleTextChange(event);
      this.handleSubmit(event);
      event.target.value = ''
    }
  },
  handleSubmit: function(event) {
    console.log('this:',this)
    event.preventDefault();
    var text = this.state.text.trim();
    if (!text) {
      return;
    }
    // TODO: send request to the server
    this.setState({text: ''});
    this.props.dispatch(sendMessage({sender:"henri@ruggedcode.com", text: text, date:new Date(), avatar: "d63acca1aeea094dd10565935d93960b"}))
  },
  render: function() {
    return (
      <Input bsSize="small" type="text"
      buttonAfter={sendButton({onClick: this.handleSubmit})}
      placeholder={this.state.initialPlaceHolder}
      onKeyUp={this.handleTextKeyUp}
      onChange={this.handleTextChange}
      value={this.state.text} />
    );
  }
});
export default SendMessage
