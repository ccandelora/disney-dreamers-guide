import React from 'react'

export default function Feature(props) {
    const backgroundImage = "/"+ props.park + ".jpg";
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
  return (
    <div className="jumbotron p-3 p-md-5 text-white rounded magic-kingdom" style={backgroundStyle}>
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{props.title}</h1>
          <p className="lead my-3">Check here to see if your favoride ride is going to be "a walk on"!</p>
            <small><a href="https://queue-times.com/en-US">Powered by Queue-Times.com</a></small>
        </div>
      </div>
  )
}
