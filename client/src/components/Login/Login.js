import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const queryString = require('query-string');

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.parsedHash = queryString.parse(window.location.hash)
        console.log(this.parsedHash);
    }
    async componentDidMount(){
        this.loginResponse = await loginUser(this.parsedHash.access_token)
    }
    render(){
        return(
            <div>{this.parsedHash.access_token}</div>
        )
    }
}

async function loginUser(token) {
    return await axios({
        method: 'POST',
        url: "http://localhost:5000/login",
        headers: {},
        data: {
            token: token
        },
        withCredentials: true,
    }).then((response) => {
        return response
    }).catch((error) => {
        console.log(error)
    })
}
