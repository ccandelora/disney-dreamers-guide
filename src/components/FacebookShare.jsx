import React from "react";

export default function FacebookShare(props) {
    let { link } = props;
    const url = link + "&src=sdkpreparse";
    const baseFacebookUrl = "https://www.facebook.com/sharer/sharer.php?u=";
    const facebookUrl = baseFacebookUrl + encodeURI(url);
    return (
      <>
        <div
          className="fb-share-button"
          data-href={link}
          data-layout="button_count"
          data-size="small"
        >
        </div>
      </>
    );
  }