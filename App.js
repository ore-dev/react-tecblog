import React, { Component } from 'react';
import './App.css';

import YSearch from 'youtube-api-search';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyBkjN0kYaF-YFyf2WqkkoMvF5Drp_yr8ek'

class App extends Component {

  state = { videos: [],
            selectedVideo: null}

  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: 'BGM'}, (data) => {
 　    this.setState({ videos: data, selectedVideo: data[2]})
　  });
  }

  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }




  onKeywordChangedHandler = (keyword,button) => {
    let newTerm ='BGM' + keyword;
    if(keyword === ''){
      newTerm = 'BGM';
    }
    console.log(keyword);

    YSearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
 　    this.setState({ videos: data, selectedVideo: data[0]})
　  });
  }

  render() {
    return (
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler} />
        <Body>
          <Video video={this.state.selectedVideo} />
          <List id = "List"
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={this.state.selectedVideo}
          />
        </Body>
      </div>
    );
  }
}

export default App;
