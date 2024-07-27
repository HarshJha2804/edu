// import { Link } from "react-router-dom"

// import { useState } from "react"
import thumbnail from "../../assets/Homepage/Youtubevideo/thumbnail.png"

const Youtubeevideo = () => {
  const handleClick = () => {
    const url = "https://www.youtube.com/embed/MuEl9ZrwbOY?si=k-NVrC6GYBtF0pT5";
    const width = 'auto';
    const height = 500;

    window.open(
      url,
      `toolbar=0,location=0,menubar=0,width=${width},height=${height},top=0,left=0`
    );
  };
  return (
    <>
      <div className="w-[100%], h-[100%] rounded-lg" style={{ backgroundImage: `url(${thumbnail})`, objectFit: 'cover', }}>
        <div className=" video-container"  >
          <button onClick={handleClick}>
            Open YouTube Video
          </button>
        </div>
      </div >


    </>
  )
}

export default Youtubeevideo