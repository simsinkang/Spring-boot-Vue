import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

class Join extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId:'',
            password:'',
            customerName:'',
            phone:'',
            city:''
        }
    }
    render(){
        return (
            <div>
                <form onSubmit="{this.handleSunbmit}">
                    <Form>
                    <Form.Label><strong>회원가입</strong></Form.Label>
                        <Form.Group controlId="customerId">
                            <Form.Label>CUSTOMER ID</Form.Label>
                            <Form.Control type="email" placeholder="Customer ID" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="customerName">
                            <Form.Label>CUSTOMER NAME</Form.Label>
                            <Form.Control type="customerName" placeholder="Customer Name" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>PHONE</Form.Label>
                            <Form.Control type="phone" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>CITY</Form.Label>
                            <Form.Control type="city" placeholder="City" />
                        </Form.Group>
                    </Form>
                    <Button variant="success">가입</Button>
                    <Button variant="warning">취소</Button>
                </form>
            </div>
        );
    }
}

export default Join;