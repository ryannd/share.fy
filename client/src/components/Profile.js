import React from 'react';
import './Profile.css'

export default class Profile extends React.Component {
    render() {
        return (
         <div class= "Username d-flex align-items-center justify-content-leftfc flex-column">
             <p>Username</p>
             <img className="Profile_pic" src="https://memegenerator.net/img/images/72883240/black-default-zoomed-in.jpg"/>
             <div>
                 <p>Followers:</p>
                 <p>Following:</p>
             </div>
        </div>
        )
    }
}