// import { Link } from "react-router-dom"


const Youtubeevideo = () => {
  return (
    <>
      <div className="container mx-auto px-8 md:px-16">
        <div className=" video-container pb-[64%] md:pb-[34%]">
          <iframe
            src="https://www.youtube.com/embed/MuEl9ZrwbOY?si=o4Hri1iVC4-aX931"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </div>


    </>
  )
}

export default Youtubeevideo