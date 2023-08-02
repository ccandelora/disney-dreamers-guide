import React from "react";

export default function FacebookLike(props) {
    let { link } = props;
    return (
      <>
        <div
          className="fb-like"
          data-href={link}
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
      </>
    );
  }