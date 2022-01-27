import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {Navbar, Container, Nav, Image} from 'react-bootstrap'

import Home from './screen/Home'
import DetailEvent from './screen/DetailEvent'
import Leaderboard from './screen/Leaderboard'
import Explorer from './screen/Explorer'

export default function App() {
  return(
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/">
          <Image width={150} src='https://metaco.gg/icon/logo-metaco.svg' />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Link className='link' to="/event">Event</Link>
            <Link className='link' to="/leaderboard">Leaderboard</Link>
            <Link className='link' to="/explorer">Explorer</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Home />} />
        <Route path="/event/detail" element={<DetailEvent />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>

      <div className='footer'>
        <Image width={75} src='https://metaco.gg/icon/logo-metaco.svg'/>
        <h6 className='footer-txt'>Copyright &copy; 2022 Metaco</h6>
      </div>
    </div>
  )
}