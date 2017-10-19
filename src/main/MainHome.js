import React, { Component } from 'react'
import './Main_Bin.css'
import ShelfService from '../service/ShelfService.js';

import { Link } from 'react-router-dom';

 class MainHome extends Component {
  constructor(props){
    super(props);

    this.shelfService = new ShelfService();

    this.state = {
      shelves: []
    }

    this.getShelves();
  }

  getShelves() {
    this.shelfService.getShelves()
    .then(response => this.setState({shelves: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    let shelfList = this.state.shelves.map(shelf => {
      return (
        <div key={shelf.shelfid}>
          <Link to={'/bins/'+ shelf.shelfid} >
            <div className="shelf">
              <div className="shelf-text">
                <h1>{shelf.shelfname}</h1>
              </div>
            </div>
          </Link>
        </div>
        
      );
    });
    
    return (
      <div>
        { shelfList }
      </div>
    )
  }
}

export default MainHome
