import React from "react";
import { FacebookProvider, ShareButton } from "react-facebook";

export default function FacebookShare(props) {
  let { link } = props;
  return (
    <>
      <FacebookProvider appId="2058140294535510">
        <ShareButton href={link}/> 
      </FacebookProvider>
    </>
  );
}
