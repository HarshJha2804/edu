// import { Link } from "react-router-dom"

// import { useState } from "react"
import { useState } from "react";
import thumbnail from "../../assets/Homepage/Youtubevideo/Screenshot 2024-08-08 190553.png"
import { Icon } from "@iconify/react/dist/iconify.js";
// import VideoModal from "./videomodal";

const Youtubeevideo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <div className=" rounded-2xl hover:cursor-pointer flex justify-center items-center" style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', height: '40vh' }} >
        <button onClick={openModal} className="p-6 bg-[#FF0000] rounded-[100%]" >
          <Icon icon="ph:play-fill" fontSize={24} style={{ color: 'white' }} />
        </button>
      </div >
      {isModalOpen &&
        <>
          <div className="w-[100vw] h-[100vh] z-[100000000000] bg-black fixed top-0 right-0 left-0 flex justify-center items-center">
            <div className="relative w-[56vw]">
              <button className="absolute close-btn text-white right-[-0.75rem] top-[-0.75rem]" onClick={closeModal} >
                <Icon icon="mingcute:close-line" fontSize={24} />
              </button>

              <div className="w-[100%] flex justify-center items-center h-[60vh] z-[100000000000]">
                {/* <VideoModal /> */}
                {/* <iframe
                  width="1060"
                  height="415"
                  src="https://www.youtube.com/embed/MuEl9ZrwbOY?si=k-NVrC6GYBtF0pT5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}

                <iframe
                  src="https://fast.wistia.net/embed/iframe/4du53yhlul"
                  allow="autoplay; fullscreen"
                  // allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  style={{ width: "100%", height: "100%" }}  // Set your desired height here
                ></iframe>






              </div>
            </div>
          </div>
        </>
      }


    </>
  )
}

export default Youtubeevideo