import { useEffect, useState } from "react"
import slider1 from '../../assets/Homepage/Herosection/establish.jpg';
import slider2 from '../../assets/Homepage/Herosection/career-opportunities-1.jpg';
import slider3 from '../../assets/Homepage/Herosection/university-office-1.jpg';
import slider4 from '../../assets/Homepage/Herosection/woman-reading-monitor.jpg';
import slider5 from '../../assets/Homepage/Herosection/representation-user-experience-interface-design (10).jpg';
import slider6 from '../../assets/Homepage/Herosection/slider6.webp';
import slider7 from '../../assets/Homepage/Herosection/slider7.webp';
import slider8 from '../../assets/Homepage/Herosection/Administrative and operational support.jpg';
import slider9 from '../../assets/Homepage/Herosection/Professional-development and training for faculty.jpg';
import slider10 from '../../assets/Homepage/Herosection/slide10.jpg';
import { Icon } from '@iconify-icon/react';


interface SliderData {
    image: string;
    text: string;
    alt: string
}

export function Carousel() {
    const SliderData: SliderData[] = [
        { image: slider1, text: 'Establish a seamless international office on your campus', alt: "" },
        { image: slider3, text: 'Enables you to engage with a network of esteemed university partners', alt: 'Three students are happy on getting degree ' },
        { image: slider2, text: 'Optimize the enrollment process to improve admission prospects', alt: 'Mentor guiding the students about studying in foreign' },
        { image: slider4, text: 'Personalised cloud Based Platform', alt: 'four students walking in the university' },
        { image: slider5, text: 'Amplify your institutions presence on the global stage', alt: 'a mentor showing how our institution can get global presence' },
        { image: slider6, text: 'Access industry-leading insights to stay ahead in the competitive education sector', alt: 'Team brainstorming on how your institution can grow' },
        { image: slider7, text: 'Customized educational strategies aligned with your institution’s goals and vision', alt: "a girl looking happy and having books on hands" },
        { image: slider8, text: 'Administrative and operational support to optimize efficiency and effectiveness', alt: 'Team brainstorming over ideas how our institution can achieve goal' },
        {
            image: slider9, text: 'Professional development and training for faculty and staff aligned with market demands', alt: 'Administration helping student and guiding them on carier'
        },
        { image: slider10, text: 'Ensure data privacy integrity', alt: "Administration guiding faculty in seminar" }
    ];
    const [imageIndex, setImageIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)

        return () => clearInterval(interval);
    }, []);
    // function showNextImage() {
    //     setImageIndex(index => {
    //         if (index === SliderData.length - 1) return 0
    //         return index + 1
    //     })
    // }

    // function showPrevImage() {
    //     setImageIndex(index => {
    //         if (index === 0) return SliderData.length - 1
    //         return index - 1
    //     })
    // }

    return (
        <section
            aria-label="Image Slider"
            style={{ width: "100%", height: "100%", position: "relative" }}
        >

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    overflow: "hidden",
                }}
            >
                {SliderData.map((data, index) => (

                    <div
                        key={index}
                        style={{
                            position: "relative",
                            minWidth: "100%",
                            height: "100%",
                            transform: `translateX(${-100 * imageIndex}%)`,
                            transition: "transform 0.6s ease-in-out",
                        }}
                    >
                        <img
                            src={data.image}
                            alt={data.alt}
                            aria-hidden={imageIndex !== index}
                            className="img-slider-img"
                            style={{ objectFit: 'cover', height: '100vh', width: '100%', filter: 'brightness(70%)' }}
                        />
                        <div
                            className="absolute left-[2rem] md:left-[4rem] bottom-[10%] w-[56%]"

                        >
                            <h1
                                aria-hidden={imageIndex !== index}
                                className="text-white text-[1.75rem] md:text-[3rem] leading-[1.75rem] md:leading-[3.25rem]"
                            >
                                {data.text}
                            </h1>
                        </div>
                    </div>

                ))}
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "45%",
                    right: '2%',
                    translate: "-50%",
                    display: "flex",
                    flexDirection: 'column',
                    gap: ".25rem",
                }}
            >
                {SliderData.map((_, index) => (
                    <button
                        key={index}
                        style={{ padding: '0px' }}
                        className="img-slider-dot-btn flex flex-col "
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <Icon icon="mdi:circle" className="text-white text-[0.75rem] md:text-[1rem]" style={{ color: 'white', }} />
                        ) : (

                            <Icon icon="ic:twotone-circle" className="text-white text-[0.75rem] md:text-[1rem]" style={{ transition: "transform 0.6s ease-in-out" }} />




                            //   <Circle />
                        )}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    )
}