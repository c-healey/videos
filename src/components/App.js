import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("news");
  }
  onVideoSelect = video => {
    console.log("From the App", video);
    this.setState({ selectedVideo: video });
  };
  onSearchSubmit = async term => {
    console.log(`onsearchsubmit term = ${term}`);

    // call youtube api

    // for some reason the parameters being exported from youtub.js
    // were not being exported.  youtube is.
    const response = await youtube.get(`/search`, {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: "AIzaSyClQETcE-xzBSVeSyVrmUrOvxOnu4VNwnA",
        q: term
      }
    });

    // const response = await unsplash.get(`/search/photos`, {
    //   params: { query: term }
    // });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
