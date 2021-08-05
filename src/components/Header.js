import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import { Row, Col, Card, Dropdown, Button, Table } from 'react-bootstrap';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
        this.state = {
            loginStatus: 'Already Logout' 
        };
    }

    login(){
        this.setState({ loginStatus: 'Already Login' });
        Auth.authenticate();
        console.log(Auth.getAuth())
    }

    logout(){
        this.setState({ loginStatus: 'Already Logout' });
        Auth.signout();
    }

    render(){
        const {loginStatus} = this.state;
        return(
            <Card className="table-card">
                <Row>
                    <Col sm={1}>
                    <Card
                        style={{
                        background: '#0f192f',
                        'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                        padding: 20, margin: 10,
                        }}>
                        <Link to='Public'> <b style={{color:'white'}}>PUBLIC</b> </Link>
                    </Card>    
                    </Col>
                    <Col />
                    <Col sm={1}>
                        <Card
                            style={{
                            background: '#0f192f',
                            'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                            padding: 20, margin: 10,
                            }}>
                            <Link to='protected'> <b style={{color:'white'}}>PROTECTED</b> </Link>
                        </Card>
                    </Col>
                    <Table>
                        <thead>
                            <th>
                                <Card
                                    style={{
                                    background: '#0f192f',
                                    'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                                    padding: 20, margin: 10,
                                    }}>
                                    <button onClick={this.login}>Login</button>
                                </Card>
                            </th>
                            <th>
                                <Card
                                    style={{
                                    background: '#0f192f',
                                    'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                                    padding: 20, margin: 10,
                                    }}>
                                    <button onClick={this.logout}>Logout</button>
                                </Card>
                            </th>
                            <th>
                                <Card
                                    style={{
                                    background: 'black',
                                    'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.08)',
                                    padding: 20, margin: 10,
                                    }}>
                                    <b style={{color:'white'}}>STATUS : </b> <span style={{color:'white'}}>{loginStatus}</span>
                                </Card>
                            </th>
                        </thead>
                    </Table>               
                </Row>
            </Card>
        );
    }
}

export default Header;
