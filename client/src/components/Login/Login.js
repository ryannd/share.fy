import React from 'react'
import {Redirect} from 'react-router-dom'

const queryString = require('query-string');

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.parsedHash = queryString.parse(this.location.hash)
        console.log(this.parsedHash);
    }
    async componentDidMount(){
        
    }
    render(){
        return(
            <div>{this.parsedHash}</div>
        )
    }
}