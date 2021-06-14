import React, { useState } from "react";
// import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";
import { getYoutubeId } from "../../utils";


const Video = ({video}) => {
  const videoSrc = `https://www.${video.provider}.com/embed/${getYoutubeId(video.url)}`
  console.log(videoSrc)
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        {/* <Plyr source={videoSrc}/> */}
        <iframe
          src={videoSrc}
          allowFullScreen
          allow="autoplay; encrypted-media"
          title="video"
          frameBorder="0"
        ></iframe>
        <h2 className="tracking-widest text-center text-green-900 text-sm font-medium title-font">
          {video.title}
        </h2>
        <p className="leading-relaxed text-base">
          peut être ajouter une description <br />
          <a
            className="text-green-600 text-center"
            rel="noreferrer"
            target="_blank"
            href={video.url}
          >
            Voir ma vidéo sur Youtube
          </a>
        </p>
      </div>
    </div>
  );
};

export default Video;
