import axios from 'axios';
import React from 'react';
import {Button} from 'reactstrap'

export default class Landing extends React.Component {
    async componentDidMount() {
        this.get = await getUrl()
        this.authUrl = this.get.data
        console.log(this.authUrl)
    }
    render() {
        return (
            <div className="">
                <a href={this.authUrl}><Button>Login</Button></a>
            </div>
        )
    }
}

async function getUrl() {
    return await axios({
        method: 'GET',
        url: "http://localhost:5000/login/url",
        headers: {},
        data: {},
        withCredentials: true,
    }).then((response) => {
        return response
    }).catch((error) => {
        console.log(error)
    })
}