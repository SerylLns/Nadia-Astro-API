import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import youtubeIcon from "../../assets/youtube.svg";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`api/v1/getvideos`)
      .then((res) => {
        console.log(res.data);
        setVideos(res.data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <div className="flex ml-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Mes vidéos
            </h1>
            <img className="w-10 ml-4" src={youtubeIcon} alt="youtube-icon" />
            </div>
            <div className="h-1 w-20 bg-green-700 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 mt-5">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Video ici */}
          {videos.map((video) => {
            return <Video key={video.id} video={video} />;
          })}
          {/* fin video  */}
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
