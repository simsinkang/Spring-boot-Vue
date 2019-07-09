import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId:'',
            password:''
        }
    }
    render(){
        return (
            <div>
                <form onSubmit="{this.handleSunbmit}">
                    <Form>
                    <Form.Label><strong>로그인</strong></Form.Label>
                        <Form.Group controlId="customerId">
                            <Form.Label>CUSTOMER ID</Form.Label>
                            <Form.Control type="email" placeholder="Customer ID" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <Button variant="success">전송</Button>
                    <Button variant="warning">취소</Button>
                </form>
            </div>
        );
    }
}

export default Login;