import axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
import './Landing.css'
import Compare from './Compare/Compare'
export default class Landing extends React.Component {
    async componentDidMount() {
        this.get = await getUrl()
        this.authUrl = this.get.data
        console.log(this.authUrl)
        this.forceUpdate();
    }
    render() {
        return (
            <div class="Login d-flex align-items-center justify-content-center flex-column">
                <h1 class="Name">Share.fy</h1>
                <p class="Slogan">Search, Compare, Share</p>
                <Button style={{ backgroundColor: "#32da8a" }} href={this.authUrl}>Login</Button>{' '}
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