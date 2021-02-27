import axios from 'axios'
import React from 'react'

export default class User extends React.Component {
    async componentDidMount() {
        this.user = await getUserData()
        console.log(this.user)
    }
    render(){
       return (
        <div>
            <h1>AAA</h1>
        </div>
       )
    }
}

async function getUserData() {
    await axios({
        method: 'GET',
        url: "http://localhost:5000/login/test",
        headers: {},
        data: {},
        withCredentials: true
    }).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err)
    })
}