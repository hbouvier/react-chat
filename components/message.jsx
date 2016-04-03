import React from 'react'
import { connect } from 'react-redux'
import { Button, Input, Glyphicon } from 'react-bootstrap';
import TimeAgo from 'react-timeago'

function isBot(sender) { console.log('sender:', sender);return sender === "not_me@ruggedcode.com"; }


const AvatarNotFound = ({src}) => (
  <img src={src} alt="User Avatar" className="img-circle"/>
)
const Avatar = ({src}) => (
  <img src={src} alt="User Avatar" className="img-circle"/>
)

const RightMessage = ({message}) => (
  <li className="right clearfix">
    <span className="chat-img pull-right">
      <AvatarNotFound src={"http://placehold.it/50/55C1E7/fff&text=" + message.sender.split('@')[0]}/>
    </span>

    <div className="chat-body clearfix">
      <div className="header">
        <small className=" text-muted">
          <span className="glyphicon glyphicon-time"></span>
          <TimeAgo date={message.date} />
        </small>
        <strong className="pull-right primary-font">{message.sender.split('@')[0]}</strong>
      </div>
      <p className="pull-right">
        {message.text}
      </p>
    </div>
  </li>
)

const LeftMessage = ({message}) => (
  <li className="left clearfix">
    <span className="chat-img pull-left">
      <AvatarNotFound src={"http://placehold.it/50/55C1E7/fff&text=" + message.sender.split('@')[0]}/>
    </span>

    <div className="chat-body clearfix">
      <div className="header">
        <strong className="primary-font">{message.sender.split('@')[0]}</strong>
        <small className="pull-right text-muted">
          <span className="glyphicon glyphicon-time"></span>
          <TimeAgo date={message.date} />
        </small>
      </div>
      <p>
        {message.text}
      </p>
    </div>
  </li>
)

const Message = ({message}) => {
  if (isBot(message.sender))
    return (<LeftMessage message={message} />)
  else
    return (<RightMessage message={message} />)
}

export default Message
