import galleryBg from "../../assets/Gallery/gallery-bg.png"
import gallery1 from "../../assets/Gallery/gallery-1.jpg"
import gallery2 from "../../assets/Gallery/gallery-2.jpg"
import gallery3 from "../../assets/Gallery/gallery-3.jpg"
import gallery4 from "../../assets/Gallery/gallery-4.jpg"
import gallery5 from "../../assets/Gallery/gallery-5.jpg"
import gallery6 from "../../assets/Gallery/gallery-6.jpg"
import gallery7 from "../../assets/Gallery/gallery-7.jpg"
import gallery8 from "../../assets/Gallery/gallery-8.jpg"
import { useEffect, useRef, useState } from "react"
// import { Icon } from "@iconify/react/dist/iconify.js"

const Gallery = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    setMouseDownAt(clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    if (mouseDownAt === 0) return;

    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const mouseDelta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 2;

    const percentageChange = (mouseDelta / maxDelta) * -120;
    const nextPercentageUnconstrained = prevPercentage + percentageChange;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -120);

    setPercentage(nextPercentage);

    const track = trackRef.current;
    if (track) {
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      Array.from(track.getElementsByClassName('draggable-img')).forEach((image) => {
        (image as HTMLElement).animate({
          objectPosition: `${120 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      });
    }
  };
  useEffect(() => {
    const handleMouseMove = (e: any) => handleOnMove(e);
    const handleTouchMove = (e: any) => handleOnMove(e);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', handleOnUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', handleOnUp);
    };
  }, [mouseDownAt, percentage, prevPercentage]);

  return (
    <>

      <div>
        <div>
          <div className="relative w-[100vw] h-[100vh]">
            <img src={galleryBg} alt="" className="object-cover brightness-[50%] h-[100vh] w-[100%]" />
            <h1 className="absolute top-[46%] left-[48%] right-[50%]text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">Gallery</h1>
          </div>

        </div>

        <div className="w-[100vw] h-[100vh] m-0 overflow-hidden bg-black">

          <div className="image-track" ref={trackRef}>
            <div className="draggable-img text-white w-[2000px] mr-[10rem] flex flex-col justify-between"  >
              <h2 className="text-[7rem] leading-[6rem]">
                {/* Empowering, */}
                Meet Our Team
              </h2>
              <span className="tooltiptext-dark"> Drag to right</span>
              {/* <div className="tooltip-dark">
                <div className="p-6 border-[1px] border-white w-[fit-content] rounded-full">
                  <Icon icon="ci:arrow-up-md" className="text-white rotate-90" fontSize={32} />
                </div>
              </div> */}

            </div>
            <img src={gallery1} alt="" draggable="false" className="draggable-img" />
            <img src={gallery2} alt="" draggable="false" className="draggable-img" />
            <img src={gallery3} alt="" draggable="false" className="draggable-img" />
            <img src={gallery4} alt="" draggable="false" className="draggable-img" />
            <img src={gallery5} alt="" draggable="false" className="draggable-img" />
            <img src={gallery6} alt="" draggable="false" className="draggable-img" />
            <img src={gallery7} alt="" draggable="false" className="draggable-img" />
            <img src={gallery8} alt="" draggable="false" className="draggable-img" />


          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery