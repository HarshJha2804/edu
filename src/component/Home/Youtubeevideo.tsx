// import { Link } from "react-router-dom"

// import { useState } from "react"


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
      <div className="w-[100%]">
        <div className=" video-container h-[500px]" >
          <button onClick={handleClick}>
            Open YouTube Video
          </button>
        </div>
      </div >


    </>
  )
}

export default Youtubeevideo