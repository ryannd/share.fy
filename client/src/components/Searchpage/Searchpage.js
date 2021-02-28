import React from 'react';
import './Searchpage.css';

import {
    Input,
    Container
  } from 'reactstrap';

  import { InputGroup, InputGroupAddon,} from 'reactstrap';
 
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Row,
    
  } from 'reactstrap';

export default class Searchpage extends React.Component {
    render() {

        return (
    
        <Container fluid>
          <section id="TopRight" className="d-flex">
            <InputGroup>
              <InputGroupAddon>Search</InputGroupAddon>
              <Input className="input" style={{width: "20%"}}/>
            </InputGroup>
              <div id="Navbar">
                <Navbar light expand ="md">
                  <NavbarBrand href = "http://localhost:3000/search">Home</NavbarBrand>
                  <NavbarBrand href="https://open.spotify.com">Spotify</NavbarBrand>
                  <NavbarBrand href="https://open.spotify.com/collection/playlists">Playlist</NavbarBrand>
                </Navbar>
              </div>
          </section>
        

        </Container>

        
    



        )
    }
}