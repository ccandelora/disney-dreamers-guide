import React from "react";
import { FacebookProvider, Like } from 'react-facebook';

export default function FacebookLike(props) {
    let { link } = props;
  return (
    <FacebookProvider appId="2058140294535510">
      <Like href={link} colorScheme="dark" showFaces share />
    </FacebookProvider>
  );
}