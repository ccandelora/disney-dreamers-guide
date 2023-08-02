import React from "react";

export default function FacebookShare(props) {
    let { link } = props;
    return (
      <>
        <div
          className="fb-share-button"
          data-href={link}
          data-layout="button_count"
        ></div>
      </>
    );
  }