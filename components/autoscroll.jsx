import React from 'react'
import Message from './message'

var AutoScroll = React.createClass({
  render: function() {
  	setTimeout(() =>  {this.getDOMNode().scrollTop = this.getDOMNode().scrollHeight;}, 1);
    return (
      <div className="panel-body chat-panel-body">
        <ul className="chat">
          {this.props.messages.map((message, index) => <Message message={message}/>)}
        </ul>
      </div>
    );
  }
});

export default AutoScroll;