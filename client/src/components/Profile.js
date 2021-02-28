import axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
import './Profile.css'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "Loading",
            profilePicUrl: "",
            followers: 0,
            profileUrl: ""
        }
    }
    async componentDidMount() {
        let user = await getUser()
        this.setState({userName: user.body.display_name, followers: user.body.followers.total,profilePicUrl: user.body.images[0].url,profileUrl: user.body.external_urls.spotify}, () => console.log(user))
    }
    render() {
        return (
         <div class="d-flex align-items-center flex-column full-height">
            <div class= "d-flex align-items-center flex-column User">
             <img className="Profile_pic" src={this.state.profilePicUrl}/>
                <p className="profile-text" style={{marginTop: "15%"}}>{this.state.userName}</p>
                <p className="profile-text">Followers: {this.state.followers}</p>
                <Button href={this.state.profileUrl} target="__blank">Link to Spotify</Button>
            </div>
         </div>
        )
    }
}

async function getUser() {
    return await axios({
        method: 'GET',
        url: "http://localhost:5000/user/info",
        headers: {},
        data: {},
        withCredentials: true,
    }).then((req) => req.data).catch((err) => console.log(err))
}