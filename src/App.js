import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Faq from './components/faq';
// import Register from './components/register';
//import Header from './components/header';
import Contact from './components/contact';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function App() {
  return (
    <>
    <body>
    <Router>
      <div >
      <Navbar bg="dark" variant="dark" class="d-flex flex-row-reverse">

           <Navbar.Brand >
              <Nav.Link href="/">Color Fun Run</Nav.Link>
            </Navbar.Brand>        
            <Nav activeKey="/" >   
             <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/faq">F.A.Q</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <div class="d-flex flex-row-reverse" >
            <Nav.Item class="d-flex flex-row-reverse">
              <Nav.Link href="/register" class="p-2">Register</Nav.Link>
            </Nav.Item>
            </div>
        </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container className="justify-content-md-center">
        <Row className=".align-items-start">

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Row>
        </Container>
      </div>
    </Router>
    </body>
    </>
  );
}



