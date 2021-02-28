import React from 'react'
import axios from 'axios'
import {Row,Col,Card,CardBody,CardTitle,CardSubtitle,CardImg,CardText,Button} from 'reactstrap'
import "./Compare.css"
import ReactLoading from 'react-loading';

export default class Compare extends React.Component {
    constructor(props){
        super(props)
        this.userSearch = this.props.user
        this.handleList = this.handleList.bind(this);  
        this.calculatePercent = this.calculatePercent.bind(this)
        this.renderCompare = this.renderCompare.bind(this)
        this.getRandomTracks = this.getRandomTracks.bind(this)
        this.state = {visibleComponent: <ReactLoading type={"bars"} color={"#000000"} height={400} width={200} />}
    }
    async componentDidMount(){
        this.user = await getUser();
        this.playlist = await getCurrUserPlaylist();
        console.log(this.playlist)
        this.compareList = await getUserPlaylist(this.userSearch);
        this.searchUser = await searchUser(this.userSearch);
        console.log(this.user)
        await this.handleList(this.compareList.body.items, "searchList")
        await this.handleList(this.playlist.body.items, "userList")
        setTimeout(
            function() {
                this.calculatePercent()
                this.setState({trackList: Array.from(this.state.sameSet)}, function() {
                    this.getRandomTracks(this.state.trackList)
                })
            }
            .bind(this),
            3000
        );
        this.forceUpdate()
    }
    async handleList(list, name) {
        let set = new Set();
        await list.forEach((curr) => {
            getPlaylistData(curr.id).then((data) => {
                data.body.items.forEach((track) => {
                    if(track.track !== null) {
                        let trackParsed = JSON.parse(JSON.stringify(track.track))
                        set.add(trackParsed.id)
                    }
                })
            })
        })
        this.setState({[name]: set});
    }
    calculatePercent() {
        let sameSet = new Set();
        let diffSet = new Set();
        for(let elem of this.state.userList){
            if(this.state.searchList.has(elem)){
                sameSet.add(elem)
            }
            else {
                diffSet.add(elem)
            }
        }

        for(let elem of this.state.searchList) {
            if(this.state.userList.has(elem)) {
                sameSet.add(elem)
            }
            else {
                diffSet.add(elem)
            }
        }
        this.setState({sameSet: sameSet, diffSet: diffSet}, () => {
            console.log(this.state.sameSet.size)
            console.log(this.state.diffSet.size)

            let percent;
            if(this.state.diffSet.size == 0){
                percent = 1
            }
            else {
                percent = this.state.sameSet.size / this.state.diffSet.size
            }
            this.setState({percentSame: (percent * 100).toPrecision(4)})
        })
        
    }
    renderCompare() {
        console.log(this.state.topTracks)
        console.log(this.state.sameSet)
        console.log(this.state.diffSet)
        let tracks = this.state.topTracks.body.tracks.map((track) => {
            return <div>
                <Card>
                    <Row>
                        <Col><CardImg top src={track.album.images[0].url} className="album-cover" alt="Card image cap" /></Col>
                        <Col>
                            <CardBody className="d-flex align-items-center justify-content-center flex-column">
                                <CardTitle tag="h5">{track.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                                <CardText>{track.album.name}</CardText>
                                <Button href={track.external_urls.spotify} target="__blank">Open in Spotify</Button>
                            </CardBody>
                        </Col>
                    </Row>
                    
                </Card>
            </div>
        }) 
        return (
            <div className="text-center d-flex align-items-center justify-content-center flex-column">
                <div className="comp-text">
                    <p className="comp-sub">Compared to {this.searchUser.body.display_name},</p>
                    <h1 className="comp-title">You have {this.state.percentSame}% similiary in song choice.</h1>
                    <p className="comp-sub">You share {this.state.sameSet.size} tracks. Here are some tracks that you two share </p>
                </div>
                <div className="full-comp disable-scrollbars">
                    {tracks}
                </div>
            </div>
            
        )
    }
    async getRandomTracks(tracks) {
        let randomTracks = [];
        for(let i = 0; i< 15;i++){
            randomTracks.push(tracks[i])
        }
        console.log(randomTracks)
        this.setState({topTracks: await getTracks(randomTracks)}, () => this.setState({visibleComponent: this.renderCompare()}))
    }
    render() {
        return(
            <div>
                {this.state.visibleComponent}
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

async function searchUser(user) {
    return await axios({
        method: 'POST',
        url: "http://localhost:5000/search/user",
        headers: {},
        data: {
            user: user
        },
        withCredentials: true,
    }).then((req) => req.data).catch((err) => console.log(err))
}

async function getTracks(tracks) {
    return await axios({
        method: 'POST',
        url: "http://localhost:5000/search/tracks",
        headers: {},
        data: {
            tracks: tracks
        },
        withCredentials: true,
    }).then((req) => req.data).catch((err) => console.log(err))
}