import React from 'react';
import logo from '../logo.svg';
import Auth from '../Auth';

const showAlert = () =>{
    const isLogin = Auth.getAuth();
    if(!isLogin){
        alert("You Have To Login");
    }
}

const PublicAlert =() => {
    showAlert();
    return (
        <div>    
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Welcome to my simple app</h1>

        </div>
    );
}

export default PublicAlert;