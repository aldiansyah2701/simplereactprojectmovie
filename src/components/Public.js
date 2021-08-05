import React from 'react';
import logo from '../logo.svg';

class Public extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            province: null,
            city: null,
            cost: null,
        };
    }

    render(){
        return(
        <div>    
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Welcome to my simple app</h1>
        </div>
        );
    }
}

export default Public;