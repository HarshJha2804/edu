import { useEffect, useState } from 'react';
import school from "../../assets/Homepage/Services/school.webp";
import schoolfirst from "../../assets/Homepage/service-sector/school-first.webp"
import schoolSecond from "../../assets/Homepage/service-sector/school-second.webp"
import schoolThird from "../../assets/Homepage/service-sector/school-third.webp"
import schoolFourth from "../../assets/Homepage/service-sector/school-fourth.webp"
import college from "../../assets/Homepage/service-sector/college.webp"
import collegeFirst from "../../assets/Homepage/service-sector/college-first.webp"
import collegeSecond from "../../assets/Homepage/service-sector/college-second.webp"
import collegeThird from "../../assets/Homepage/service-sector/college-third.webp"
import collegeFourth from "../../assets/Homepage/service-sector/college-fourth.webp"
import learningCenter from "../../assets/Homepage/service-sector/learningCenter.png"
import learningFirst from "../../assets/Homepage/service-sector/learning-first.webp"
import learningSecond from "../../assets/Homepage/service-sector/learning-second.webp"
import learningThird from "../../assets/Homepage/service-sector/learning-third.webp"
import learningFourth from "../../assets/Homepage/service-sector/learning-fourth.webp"
const ServiceSector = () => {
    const [scale, setScale] = useState(1);
    const [opacityScroll, setOpacityScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newScale = 1 + scrollPosition / 2600; // Adjust the divisor to control scaling speed
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
            <div className=''>

                <div className="flex flex-col gap-[0.2rem] content justify-center items-center mb-8">
                    <h4 className="text-[1.75rem] md:text-[3rem] lg:text-[3.5rem] font-medium leading-tight">Industries Served</h4>
                    <p className={`text-[black] text-[0.5rem] md:text-[1.5rem] font-light leading-tight} ${opacityScroll ? 'opacity-0' : 'opacity-100'}`}> Innovating Education for a Global Future</p>
                </div>


                {/* Schools */}

                <div className='flex flex-col px-6 py-6 md:px-10 md:py-10 w-[100%] h-[100%] md:w-[100vw] md:h-[100vh] gap-4 bg-black'>
                    <div className='flex flex-col md:flex-row md:h-[55vh] justify-between gap-4'>
                        <div className='relative flex flex-1 md:flex-[1.5] shrink-0'>

                            <img src={school} alt="" className='object-cover w-[100%] brightness-[40%]' />
                            <div className='absolute px-2 bottom-2 sm:px-4 sm:bottom-4 '>
                                <p className='xs:text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] text-white'>Schools</p>
                                <p className='text-[0.5rem] md:leading-[1.35rem] font-light sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-white '>Schools are instrumental in shaping students' futures through foundational education and holistic development. Our services elevate educational offerings by enabling students to explore global education opportunities. Partnering with us empowers schools to broaden their horizon across borders, opening doors to esteemed universities worldwide.
                                    This partnership enhances the educational journey, equipping students with skills for an interconnected world and setting them on a successful path in their education and career pursuits
                                </p>
                            </div>
                        </div>
                        <div className='md:flex hidden flex-1'>
                            <img src={schoolfirst} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>
                    <div className='md:flex hidden flex-col md:flex-row md:h-[35vh] justify-between gap-4'>
                        <div className='flex md:flex-1 '>
                            <img src={schoolSecond} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='md:flex hidden md:flex-1'>
                            <img src={schoolThird} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='md:flex hidden md:flex-0.5'>
                            <img src={schoolFourth} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>

                </div>


                {/* college  */}

                <div className='flex flex-col px-6 py-6 md:px-10 md:py-10 gap-4 bg-black w-[100%] h-[100%] md:w-[100vw] md:h-[100vh]'>
                    <div className='flex flex-col md:flex-row md:h-[55vh] justify-between gap-4'>
                        <div className='relative flex flex-1 md:flex-[1.5] shrink-0'>

                            <img src={college} alt="" className='object-cover w-[100%] brightness-[60%]' />
                            <div className='absolute px-2 bottom-2 sm:px-8 sm:bottom-4 lg:bottom-8 '>
                                <p className='xs:text-[1rem] sm:text-[1.5rem] md:text-[3rem] text-white'>Colleges</p>
                                <p className='text-[0.5rem] md:leading-[1.35rem] font-light sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-white '>Higher education institutions are crucial in fostering specialized knowledge and preparing students for professional careers. Global expansion opens doors to diverse cultural experiences, innovative teaching methodologies, and cutting-edge research collaborations. Partnering with us allows colleges to attract a diverse pool of international students
                                    , enriching campus life and creating a vibrant academic community.
                                    Our services facilitate seamless integration into global education networks, enhancing the institution's reputation and global influence.
                                </p>
                            </div>
                        </div>
                        <div className='md:flex hidden flex-1'>
                            <img src={collegeFirst} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>
                    <div className='md:flex hidden flex-col md:flex-row md:h-[35vh] justify-between gap-4'>
                        <div className='flex md:flex-1 '>
                            <img src={collegeSecond} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='md:flex hidden md:flex-1'>
                            <img src={collegeThird} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='md:flex hidden md:flex-0.5'>
                            <img src={collegeFourth} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>

                </div>


                {/* Learning Centers */}

                <div className='flex flex-col px-6 py-6 md:px-10 md:py-10 w-[100%] h-[100%] md:w-[100vw] md:h-[105vh] gap-4 bg-black'>
                    <div className='flex flex-col md:flex-row md:h-[55vh] justify-between gap-4'>
                        <div className='relative flex flex-1 md:flex-[1.5] shrink-0'>

                            <img src={learningCenter} alt="" className='object-cover w-[100%] brightness-[60%]' />
                            <div className='absolute px-2 bottom-2 sm:px-8 sm:bottom-4 lg:bottom-8 '>
                                <p className='xs:text-[1rem] sm:text-[1.5rem] md:text-[3rem] text-white'>Learning Centers</p>
                                <p className='text-[0.5rem] md:leading-[1.35rem] font-light sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-white '>Learning centers are vital contributors that can greatly benefit from partnering with us. By referring students to study abroad programs, learning centers can diversify their services and attract a wider clientele interested in international educational opportunities. Moreover, we offer comprehensive support, including the establishment of international offices</p>
                            </div>
                        </div>
                        <div className='md:flex hidden flex-1'>
                            <img src={learningFirst} alt="" className='object-cover w-[100%]' />
                        </div>
                    </div>
                    <div className='md:flex hidden flex-col md:flex-row md:h-[35vh] justify-between gap-4'>
                        <div className='md:flex hidden md:flex-1 '>
                            <img src={learningSecond} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='md:flex hidden md:flex-1'>
                            <img src={learningThird} alt="" className='object-cover w-[100%]' />
                        </div>
                        <div className='md:flex hidden md:flex-0.5'>
                            <img src={learningFourth} alt="" className='object-cover w-[100%]' />
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

