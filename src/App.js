// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import React, { Component } from 'react'
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';



const API_KEY = 'AIzaSyAdKIDMLrJhIC1vqChmH3SLGyQ6BiO-ydI';

class App extends Component {
  

  constructor(props) {
    super(props)
  
    this.state = {
       videos : [],
       selectedVideo : null
    }
    this.videoSearch('');
  }
  
  videoSearch(searchTerm){
    YTSearch({key:API_KEY , term : searchTerm}, (data) => {
      console.log(data)
      this.setState({
        videos: data
		})
    })

  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList  onVideoSelect={userSelected => this.setState({selectedVideo : userSelected})} 
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <SearchBar />
//     </div>
//   );
// }

// export default App;
