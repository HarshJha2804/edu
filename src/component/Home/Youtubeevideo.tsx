// import { Link } from "react-router-dom"

// import { useState } from "react"
import { useState } from "react";
import thumbnail from "../../assets/Homepage/Youtubevideo/newThumbnail.png"
import { Icon } from "@iconify/react/dist/iconify.js";

const Youtubeevideo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <div className=" rounded-2xl hover:cursor-pointer flex justify-center items-center" style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', }} >
        <button onClick={openModal} className="p-6 bg-[#FF0000] rounded-[100%]" >
          <Icon icon="ph:play-fill" fontSize={24} style={{ color: 'white' }} />
        </button>
      </div >
      {isModalOpen &&
        <>
          <div className="w-[100vw] h-[100vh] bg-black fixed z-1000000 top-0 right-0 left-0 flex justify-center items-center">
            <div className="relative w-[80vh]">
              <button className="absolute close-btn text-white right-[-2rem] top-[-2rem]" onClick={closeModal} >
                <Icon icon="mingcute:close-line" fontSize={24} />
              </button>

              <div className="w-[100%] flex justify-center items-center">
                <iframe
                  width="1060"
                  height="415"
                  src="https://www.youtube.com/embed/MuEl9ZrwbOY?si=k-NVrC6GYBtF0pT5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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