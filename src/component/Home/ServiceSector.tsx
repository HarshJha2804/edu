import { useEffect, useState } from 'react';
import school from "../../assets/Homepage/Services/school.webp";
import schoolfirst from "../../assets/service-sector/school-first.png"
import schoolSecond from "../../assets/service-sector/school-second.png"
import schoolThird from "../../assets/service-sector/school-third.png"
import schoolFourth from "../../assets/service-sector/school-fourth.png"
const ServiceSector = () => {
    const [scale, setScale] = useState(1);
    const [opacityScroll, setOpacityScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newScale = 1 + scrollPosition / 3000; // Adjust the divisor to control scaling speed
            setScale(newScale);

            if (scrollPosition <= window.innerHeight) {
                setOpacityScroll(true);
            } else {
                setOpacityScroll(false);
            }
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
                <div className="flex flex-col gap-[1.25rem] content w-[100vw] h-[110vh] overflow-hidden bg-black justify-center items-center">
                    <h3 className="text-white text-[0.75rem] md:text-[1.75rem]" style={{ transform: `scale(${scale})` }}>Service Served</h3>
                    <p style={{ transform: `scale(${scale})`, }} className={`text-[white] text-[0.25rem] md:text-[0.63rem] font-light} ${opacityScroll ? 'opacity-0' : 'opacity-100'}`}> Innovating Education for a Global Future</p>
                </div>

                {/* <div className='content h-[100vh] overflow-hidden'>
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
                </div> */}

                <div className='flex flex-col px-10 py-10 w-[100vw] h-[100vh] gap-4'>
                    <div className='flex flex-col md:flex-row  md:h-[55vh] justify-between gap-4'>
                        <div className='relative flex md:flex-1'>

                            <img src={school} alt="" className='object-cover w-[100%] brightness-75' />
                            <div className='absolute px-8 bottom-8'>
                                <p className='text-[3rem] text-white'>Schools</p>
                                <p className='text-[1.2rem] text-white'>Schools are instrumental in shaping students' futures through foundational education and holistic development. Our services elevate educational offerings by enabling students to explore global education opportunities. Partnering with us empowers schools to broaden their horizon across borders, opening doors to esteemed universities worldwide. This partnership enhances the educational journey, equipping students with skills for an interconnected world and setting them on a successful path in their education and career pursuits</p>
                            </div>
                        </div>
                        <div className='flex md:flex-0.6'>
                            <img src={schoolfirst} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:h-[35vh] justify-between gap-4'>
                        <div className='flex md:flex-1 '>
                            <img src={schoolSecond} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='flex md:flex-1'>
                            <img src={schoolThird} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='flex md:flex-0.5'>
                            <img src={schoolFourth} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='grid grid-rows-[1fr_1.fr] md:grid-rows-[1fr_1fr] h-[100vh] bg-red-400 gap-8 md:px-16 md:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8'>
                    <div className='bg-white'
                        style={{
                            minHeight: '4rem',
                            // backgroundImage:`url(${school})`,
                            //  minHeight:'10rem', minWidth:'30rem'
                        }}
                    >
                        <img src={school} alt="" className=' ' />

                    </div>
                    <div className='bg-white'
                        style={{
                            minHeight: '4rem',
                            // backgroundImage:`url(${schoolfirst})`,
                            //  minHeight:'10rem', minWidth:'30rem'
                        }}
                    >
                        <img src={schoolfirst} alt="" className=' ' />
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-8'>
                    <div className='bg-white'
                        style={{
                            minHeight: '4rem',
                            // backgroundImage:`url(${schoolSecond})`,
                            //  minHeight:'10rem', minWidth:'30rem'
                        }}
                    >
                        <img src={schoolSecond} alt="" className=' ' />

                    </div>
                    <div className='bg-white'
                        style={{
                            minHeight: '4rem',
                            // backgroundImage:`url(${schoolThird})`,
                            //  minHeight:'10rem', minWidth:'30rem'
                        }}
                    >
                        <img src={schoolThird} alt="" className=' ' />
                    </div>
                    <div className='bg-white'
                        style={{
                            minHeight: '4rem',
                            // backgroundImage:`url(${schoolFourth})`, 
                            // minHeight:'10rem', minWidth:'30rem'
                        }}
                    >
                        <img src={schoolFourth} alt="" className=' ' />

                    </div>

                </div>
            </div> */}


        </>
    );
};

export default ServiceSector;

