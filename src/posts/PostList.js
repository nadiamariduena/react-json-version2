import React, { Component } from "react";
import Data from "../data.json";

class PostList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="middle-section">
          <h1>IMG json version 2</h1>
          <div className="container-images">
            {/* ------- */}
            {Data.map((postDetail, index) => {
              return (
                <div className="quote" key={postDetail.id}>
                  <h4>{postDetail.name}</h4>
                  <p>{postDetail.content}</p>
                  <img src={postDetail.img} className="img-box" alt="images" />
                </div>
              );
            })}
            {/* ------- */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostList;
