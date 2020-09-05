import React, { Component } from "react";
import PostList from "./posts/PostList";
// import TopParent from "./Top-parent";
//
//
//

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
         
          {/* <TopParent /> */}
          <PostList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
