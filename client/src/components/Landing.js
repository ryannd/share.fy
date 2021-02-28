import React from 'react';
import { Button } from 'reactstrap';
import './Landing.css'

export default class Landing extends React.Component {
    render() {
        return (
            <div class="Login d-flex align-items-center justify-content-center flex-column">
                <h1 class="Name">Share.fy</h1>
                <p class="Slogan">Search, Compare, Share</p>
            
                <Button size="lg" style={{ backgroundColor: "#32da8a" }} href = "https://accounts.spotify.com/en/login" target="_blank" >Login</Button>{' '}
                
            </div>
        )
    }
}