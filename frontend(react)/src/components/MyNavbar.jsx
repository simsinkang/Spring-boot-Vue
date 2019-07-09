import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap' 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../containers/customer/Login.jsx"
import Join from "../containers/customer/Join.jsx"
import MyPage from "../containers/customer/MyPage.jsx"
import Home from "../containers/common/Home.jsx"
import Hello from "../containers/customer/Hello.jsx"
import LightSwitch from "../containers/customer/LightSwitch"
import Timer from '../containers/common/Timer'
import Schedule from '../containers/customer/Schedule'
import Clock from '../containers/common/Clock'

const MyNavbar = () => {
    return (
        <Router>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <NavDropdown title="기본문법" id="basic-nav-dropdown">
                    <Nav.Link><Link to="/hello">Hello</Link></Nav.Link>
                    <Nav.Link><Link to="/lightswitch">Switch</Link></Nav.Link>
                    <Nav.Link><Link to="/timer">Timer</Link></Nav.Link>
                    <Nav.Link><Link to="/schedule">Schedule</Link></Nav.Link>
                    <Nav.Link><Link to="/clock">Clock</Link></Nav.Link>
                </NavDropdown>
                    <NavDropdown title="회원관리" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#"><Link to="/login">로그인</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#"><Link to="/join">회원가입</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#"><Link to="/mypage">마이페이지</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#"><Link to="/remove">회원탈퇴</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/login" component={Login}/>
        <Route path="/join" component={Join}/>
        <Route path="/mypage" component={MyPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/lightswitch" component={LightSwitch}/>
        <Route path="/timer" component={Timer}/>
        <Route path="/schedule" component={Schedule}/>
        <Route path="/clock" component={Clock}/>
        </Router>
    )
}

export default MyNavbar