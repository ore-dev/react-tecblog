

import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  state = {keyword: '',
   　　　　　button: ''}

  onInputChangeHandler = (event) => {
    this.setState({keyword: event.target.value});
    this.props.onKeywordChanged(event.target.value);
  }

  render(){
    return(
      <div className="header-style">
        <div >
          <h2 className="header-top">BGM検索</h2>
        </div>
        <div className="input-style">
          <input type="text" onChange={this.onInputChangeHandler} value ={this.state.keyword} placeholder="検索条件"/>
        </div>
        <p>{this.state.keyword}</p>
      </div>
    );
  }
}

export default Header;
