import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, ButtonGroup, DropdownButton, Button, Input, Glyphicon, MenuItem } from 'react-bootstrap';

import AutoScroll from './autoscroll'
import SendMessage from './sendmessage'
import { sendMessage } from '../actions'

const Messages = ({messages, dispatch}) => (
  <Grid>
    <Row className="row">
      <Col xs={12} md={5}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <Glyphicon glyph="comment"/> Chat
            <ButtonGroup bsClass="pull-right">
              <DropdownButton id="dropdown" bsSize="xs">
                <MenuItem eventKey="1"><Glyphicon glyph="refresh"/> Refresh</MenuItem>
                <MenuItem eventKey="2"><Glyphicon glyph="ok-sign"/> Available</MenuItem>
                <MenuItem eventKey="3"><Glyphicon glyph="remove"/> Busy</MenuItem>
                <MenuItem eventKey="4"><Glyphicon glyph="time"/> Away</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="5"><Glyphicon glyph="off"/> Sign out</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </div>
          
          <AutoScroll messages={messages} />

          <div className="panel-footer">
            <SendMessage dispatch={dispatch} />
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
)

function mapStateToProps(messages) {
  return {
    messages
  }
}
export default connect(mapStateToProps)(Messages)
