import React from 'react'
import { render } from 'react-dom'
import { Nav, Navbar, NavDropdown, NavItem, Button, Input, MenuItem, Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/application.css';
import './css/chat.css';
import { Provider } from 'react-redux'
import store from '../store'
import Messages from './messages'

let mainElement = document.getElementById('main-react-div')
render(
    <div className="container">
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Rugged Code Web Chat</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavDropdown eventKey={2} title="Environment" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Production</MenuItem>
              <MenuItem eventKey={2.2}>Integration</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.3}>Development</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Navbar.Form pullLeft>
              <Input type="text" placeholder="Email" className="form-control"/>
              {' '}
              <Input type="password" placeholder="Password" className="form-control"/>
              {' '}
              <Button type="submit" bsStyle="success">Sign in</Button>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>    
      </Navbar>
      <Grid className="bodyWithSpacing">
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Provider store={store}>
              <Messages />
            </Provider>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <hr/>
            <footer>
              <p>&copy; 2016 Rugged Code, Inc.</p>
            </footer>
          </Col>
        </Row>
      </Grid>
    </div>
  ,mainElement
)

