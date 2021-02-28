import React from 'react';
import './Searchpage.css';

  import {
    InputGroup, InputGroupAddon,Input,
    Container,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Row,
    Col
    
  } from 'reactstrap';

import Compare from '../Compare/Compare'
import Profile from '../Profile'

export default class Searchpage extends React.Component {
    constructor(props) {
      super(props)
      this.initCompare = this.initCompare.bind(this)
      let comparePlaceholder = this.initCompare()
      this.state = {compareComponent: comparePlaceholder}
      this.renderCompare = this.renderCompare.bind(this)
      this.handleSearchChange = this.handleSearchChange.bind(this)
    }
    handleSearchChange = (event) => {
      this.setState({toSearch: event.target.value})
    }
    componentDidMount() {

      
    }
    initCompare() {
      return (
        <div className="text-center">
          <h1 className="comp-placeholder">Vibe check your friend's music taste.<br></br>Search for a user.</h1>
        </div>
      )
    }
    renderCompare() {
      console.log(this.state.toSearch)
      this.setState({compareComponent: <Compare user={this.state.toSearch}/>})
      this.forceUpdate()
    }
    render() {
        return (
        <Container fluid>
          <Row>
            <Col lg="4" className="left-column">
              <div className="d-flex align-items-center justify-content-center flex-column left-inner">
                <h1 className="product-title">share.fy</h1>
                <Input id="search" onChange={(e) => this.handleSearchChange(e)} className="inputlg align-self-center col-lg-8" placeholder="Spotify User ID (NOT display name!)"></Input>
                <Button onClick={() => this.renderCompare()} style={{marginTop: "3%"}}>Search</Button>
              </div>
              
              <Profile/>
            </Col>
            <Col className="right-column disable-scrollbars d-flex align-items-center flex-column">
              
              <div className="disable-scrollbars right-inner">
                {this.state.compareComponent}
              </div>
            </Col>
          </Row>
        

        </Container>

        
    



        )
    }
}