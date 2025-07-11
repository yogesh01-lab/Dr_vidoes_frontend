import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import usePageView from "./pageView";


const GetVideos = () => {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  console.log(baseURL);
    

  useEffect(() => {
    const url = `${baseURL}/api/data.json`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedVideo = data.find((video) => video.id === Number(id));
        setVideo(selectedVideo);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

  usePageView(video);

  if (!video) {

    return <div>Video not found</div>;
    
  }

  return (
    <div key={video.id}>
      <h3>{video.name}</h3>
      <video width="320" height="240" controls>
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
};

export default GetVideos;
