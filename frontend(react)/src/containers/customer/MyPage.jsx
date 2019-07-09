import React, {Component} from 'react'
import {Table, Figure} from 'react-bootstrap'
import logo from '../../assets/images/logo.svg'

class MyPage extends Component{
    render(){
        return (
            <div>
                <p><strong>마이페이지</strong></p>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={logo}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                        <td rowspan='2' colspan='2'>1</td>
                        <td>ID</td>
                        <td>이름</td>
                        </tr>
                        <tr>
                        <td>hong</td>
                        <td>홍길동</td>
                        </tr>
                        <tr>
                        <td>전화번호</td>
                        <td colspan='3'>010-0000-0000</td>
                        </tr>
                        <tr>
                        <td>주소</td>
                        <td colspan='3'>서울</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MyPage;