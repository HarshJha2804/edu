


// import { useEffect, useState } from "react";
// import slider1 from '../../assets/Homepage/Herosection/envision1.jpg';
// import slider2 from '../../assets/Homepage/Herosection/slider2.webp';
// import slider3 from '../../assets/Homepage/Herosection/slider3.webp';
// import slider4 from '../../assets/Homepage/Herosection/slider4.webp';
// import slider5 from '../../assets/Homepage/Herosection/slider5.webp';
// import slider6 from '../../assets/Homepage/Herosection/slider6.webp';
// import slider7 from '../../assets/Homepage/Herosection/slider7.webp';
// import slider8 from '../../assets/Homepage/Herosection/slider8.webp';
// import slider9 from '../../assets/Homepage/Herosection/slider9.webp';
// import slider10 from '../../assets/Homepage/Herosection/slider10.webp';
import { Carousel } from "./Carousel";
import Youtubeevideo from "./Youtubeevideo";


const Herosection = () => {
    // interface SliderData {
    //     image: string;
    //     text: string;
    // }

    // const [scrollProgress, setScrollProgress] = useState<number>(0);

    // const updateScrollProgress = () => {
    //     const scrollPosition = window.scrollY;
    //     const windowHeight = window.innerHeight;
    //     const documentHeight = 100;
    //     const maxScroll = documentHeight - windowHeight;
    //     const scrollFraction = (scrollPosition / maxScroll) * 100;
    //     setScrollProgress(scrollFraction);
    // };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         updateScrollProgress();
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const sliderData: SliderData[] = [
    //     { image: slider1, text: 'We empower you to look beyond the present moment and envision greater possibilities' },
    //     { image: slider2, text: 'Streamline the enrollment process and enhance student placement opportunities' },
    //     { image: slider3, text: 'Establish an international University office at your campus effortlessly' },
    //     { image: slider4, text: 'Connect your students with over 300 prestigious university partners worldwide' },
    //     { image: slider5, text: 'Amplify your institutions presence on the global stage' },
    //     { image: slider6, text: 'Strategic marketing support tailored to boost visibility and attract diverse student demographics' },
    //     { image: slider7, text: 'Access industry-leading insights to stay ahead in the competitive education sector' },
    //     { image: slider8, text: 'Customized educational strategies aligned with your institution’s goals and vision' },
    //     { image: slider9, text: 'Administrative and operational support to optimize efficiency and effectiveness' },
    //     { image: slider10, text: 'Support and training for faculty and staff as per the market requirements' }
    // ];

    return (
        <>
            {/* <div style={{ backgroundColor: 'black' }}>
        <div className="bg-black"> */}

            {/* <div className="w-[100vw] h-[100vh] overflow-auto body">
                <div className="scroll-div-container overflow-y-scroll">    
                    {sliderData.map((data, index) => (
                        <section key={index} style={{ objectFit: 'cover', height: '100%' }}>
                            <img
                                className="w-[100%] h-[100vh] object-cover sticky image"
                                src={data.image}
                                alt="Three children looking at their dreams over screen"
                            />
                            <div
                                style={{ position: 'relative', left: '60px', bottom: '16rem' }}
                            >
                                <h1 className="text-white text-[48px] w-[50%] leading-[3.25rem]">
                                    {data.text}
                                </h1>
                            </div>
                        </section>
                    ))}
                </div>
            </div>


            <div className="fixed right-[50px] top-[40%] w-[20px] h-[6%] flex justify-between transition-all duration-300 ease-out bg-transparent">
                <div className="relative w-[8px] bg-[#333333] rounded-[60px]">
                    <div
                        className="absolute w-[8px] h-[100%] top-[0] bg-[white] rounded-[60px]"
                        style={{ height: `${scrollProgress}%` }}
                    ></div>
                </div>
            </div> */}

            {/* </div>
         </div> */}
            <div className="w-[100vw] h-auto lg:h-[80vh] bg-primary pt-[5rem]">
                <div className="container px-8 md:px-16 mx-auto">
                    <div className="grid grid-rows-[auto_auto] gap-[3rem] lg:grid-cols-[30rem_1fr]">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">

                                {/* <p className="md:tracking-[0.25rem] tracking-[0.1rem] font-medium text-white text-[0.75rem] md:text-[1rem]">OUR MISSION</p> */}
                                {/* <h1 className="display text-white">Expansion to your existing business</h1> */}
                                <h1 className="h1 text-white">Expansion to your existing business</h1>
                                {/* <h2 className="h2 text-white">Expansion to your existing business</h2>
                            <h3 className="h3 text-white">Expansion to your existing business</h3> */}
                                {/* <h4 className="h4">Expansion to your existing business</h4>
                            <h5 className="h5">Expansion to your existing business</h5>
                            <h6 className="h6">Expansion to your existing business</h6> */}





                                <p className="p text-white">
                                    At EmpowerEdu, we work hand in hand with educational institutions to offer specialised administrative and operational assistance, paired
                                    with tailored training for team members. We optimise efficiency, empowering the team to deliver
                                    exceptional educational experiences. Let's embark on a journey to transform education
                                    together
                                </p>
                                {/* <img src={founderImg} alt="a confident founder" className='object-cover w-[584px] h-[584px]' /> */}

                            </div>
                            {/* <div>
                                <button className="primary-button">
                                    Learn More
                                </button>
                            </div> */}
                        </div>
                        <div className="flex items-end">
                            <Youtubeevideo />
                        </div>

                    </div>
                </div>

            </div>
            {/* <Carousel /> */}
        </>
    );
};

export default Herosection;
