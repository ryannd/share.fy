import React from 'react'
import axios from 'axios'

export default class Compare extends React.Component {
    async componentDidMount(){
        this.user = await getUser();
        this.playlist = await getCurrUserPlaylist();
        this.compareList = await getUserPlaylist('paintba11');
        this.handleList = this.handleList.bind(this);  
        this.diff = new Set();
        this.same = new Set();
        this.userTracks = await this.handleList(this.compareList.body.items)
        this.currTracks = await this.handleList(this.playlist.body.items)

        console.log(this.diff)
        console.log(this.same)
    }
    async handleList(list) {
        let set = new Set();
        await list.forEach((curr) => {
            getPlaylistData(curr.id).then((data) => {
                data.body.items.forEach((track) => {
                    if(track.track !== null) {
                        let trackParsed = JSON.parse(JSON.stringify(track.track))
                        set.add(trackParsed.id)
                        if(!this.diff.has(trackParsed.id)) {
                            this.diff.add(trackParsed.id)
                        }
                        else {
                            this.same.add(trackParsed.id)
                        }
                    }
                })
            })
        })
        console.log(set)
        return set
    }
    render() {
        return(
            <div>
                <h1>LOL</h1>
                <h1>LOL</h1>
                <h1>LOL</h1>
                <h1>LOL</h1>
                <h1>LOL</h1>
                <h1>LOL</h1>
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

async function getCurrUserPlaylist() {
    return await axios({
        method: 'GET',
        url: "http://localhost:5000/user/playlists",
        headers: {},
        data: {},
        withCredentials: true,
    }).then((req) => req.data).catch((err) => console.log(err))
}

async function getUserPlaylist(user) {
    return await axios({
        method: 'POST',
        url: "http://localhost:5000/search/user-playlists",
        headers: {},
        data: {
            user: user
        },
        withCredentials: true,
    }).then((req) => req.data).catch((err) => console.log(err))
}

async function getPlaylistData(id) {
    return await axios({
        method: 'POST',
        url: "http://localhost:5000/playlist/get-list",
        headers: {},
        data: {
            listId: id
        },
        withCredentials: true,
    }).then((req) => req.data).catch((err) => console.log(err))
}