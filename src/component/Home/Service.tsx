// // import Scrollanimation from "../Scrollanimation/Scrollanimation"
// import { useEffect, useState } from "react";
// import school from "../../assets/Homepage/Services/school.webp"

// const Service = () => {
//     return (
//         <>

//             <div className="w-[100vw] h-[100vh]">
//                 <div className="scroll-div-container overflow-y-scroll">
//                     <section className="bg-black w-[100vw] h-[100vh] flex justify-center items-center">
//                         <h3 className="text-white text-[4rem] ">Industries Served</h3>
//                     </section>
//                     <section className="bg-black w-[100vw] h-[100vh] flex justify-center items-center">
//                         <img src={school} alt="a bare classroom" className="object-cover w-[100vw] h-[100vh]" />
//                     </section>


//                 </div>
//             </div>

//         </>
//     )
// }

// export default Service

import { useEffect, useState } from 'react';
import school from "../../assets/Homepage/Services/school.webp";

const Service = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newScale = 1 + scrollPosition / 2600; // Adjust the divisor to control scaling speed
            setScale(newScale);
            // const newScale2 = 1 + scrollPosition / 9000; // Adjust the divisor to control scaling speed
            // setScale(newScale2);

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* <div className="w-[100vw] h-[100vh]">
                <div className="content w-[100vw] h-[110vh] overflow-hidden bg-black flex justify-center items-center">
                    <h3 className="text-white text-[2rem]" style={{ transform: `scale(${scale})` }}>Industries Served</h3>
                </div>
                <div className='grid  grid-cols-[1.5fr_1fr] mx-[8rem]'>
                    <div className='grid'>
                        <img
                            src={school}
                            alt="Scaling"
                            style={{
                                objectFit: 'cover',
                                filter: 'brightness(70%)'
                            }}
                        />
                        <div className='left-[5%] top-[20%]'
                            style={{ position: 'relative', }}
                        >
                            <h1 className="text-white text-[4rem] leading-[3.75rem] ">
                                Schools
                            </h1>
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="w-[100vw] h-[100vh]">
                <div className="content w-[100vw] h-[110vh] overflow-hidden bg-black flex justify-center items-center">
                    <h3 className="text-white text-[2rem]" style={{ transform: `scale(${scale})` }}>Industries Served</h3>
                </div>
                <div className='content h-[100vh] overflow-hidden'>
                    <img
                        src={school}
                        alt="Scaling"
                        style={{
                            transform: `scale(${scale})`,
                            objectFit: 'cover',
                            filter: 'brightness(70%)'
                        }}
                    />
                    <div className='left-[45%] bottom-[65%]'
                        style={{ position: 'relative', }}
                    >
                        <h1 className="text-white text-[4rem] leading-[3.75rem] ">
                            Schools
                        </h1>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Service;



{/* <div className="w-[100vw] h-[100vh]">
<div className="content w-[100vw] h-[110vh] overflow-hidden bg-black flex justify-center items-center">
    <h3 className="text-white text-[2rem]" style={{ transform: `scale(${scale})` }}>Industries Served</h3>
</div>
<div className='content h-[100vh] overflow-hidden'>
    <img
        src={school}
        alt="Scaling"
        style={{
            transform: `scale(${scale})`,
            objectFit: 'cover',
            filter: 'brightness(70%)'
        }}
    />
    <div className='left-[45%] bottom-[65%]'
        style={{ position: 'relative', }}
    >
        <h1 className="text-white text-[4rem] leading-[3.75rem] ">
           Schools
        </h1>
    </div>
</div>

</div> */}
