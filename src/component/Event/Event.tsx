import { Link } from 'react-router-dom'
// import eventBg from '../../assets/Events/event-bg.jpg'
import eventImg from "../../assets/Events/eventImg.png"
import eventImgSecond from "../../assets/Events/eventImg-2.jpg"
import eventImgThird from "../../assets/Events/eventImg-3.jpg"
import { Icon } from '@iconify/react/dist/iconify.js'

const Event = () => {
    return (
        <>
            {/* <div className="relative w-[100%] h-[100%] bg-white">
                <img src={eventBg} alt="" className="object-cover brightness-[40%] h-[100vh] w-[100%] " />
                <h1 className="absolute top-[46%] left-[49%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">Event</h1>
            </div> */}
            <div className="px-2 md:px-16 flex flex-col my-16 md:my-32 blog-div bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 grid-flow-row gap-8 justify-center">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.75fr] border-[1px] border-borderColor rounded-md md:rounded-xl px-4 py-4 bg-white gap-4 h-[100%] md:h-[40vh]">
                        <div className='zoom-image-container relative overflow-hidden rounded-md md:rounded-xl hover:cursor-pointer h-[20vh] md:h-[36vh]'>
                            <img src={eventImg} alt="" className='object-cover zoom-image h-[100%] w-[100%]' />
                        </div>
                        <div className='flex flex-col justify-between md:p-6 gap-4'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Icon icon="gravity-ui:calendar" className="text-textColor " fontSize={20} />
                                        <p>22 July 2024 - 16:00</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Icon icon="tabler:clock" className="text-textColor rotate-45" fontSize={20} />
                                        <p>3hr</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className=" text-black">How to get Scholarship?</h3>
                                    <p className="text-textColor">Meet our top carrier counsellor who will guide you to get scholarship and how to get a top foreign universities...</p>
                                </div>
                            </div>



                            <Link to="#">
                                <button className="primary-button-outline "> Book your seat
                                    {/* <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} /> */}
                                </button>
                            </Link>

                        </div>
                    </div>




                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.75fr] border-[1px] border-borderColor rounded-md md:rounded-xl px-4 py-4 bg-white gap-4 h-[100%] md:h-[40vh]">
                        <div className='zoom-image-container relative overflow-hidden rounded-md md:rounded-xl hover:cursor-pointer h-[20vh] md:h-[36vh]'>
                            <img src={eventImgSecond} alt="" className='object-cover zoom-image h-[100%] w-[100%] ' />
                        </div>
                        <div className='flex flex-col justify-between md:p-6 gap-4'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Icon icon="gravity-ui:calendar" className="text-textColor " fontSize={20} />
                                        <p>22 July 2024 - 16:00</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Icon icon="tabler:clock" className="text-textColor rotate-45" fontSize={20} />
                                        <p>3hr</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className=" text-black">How to get into top university?</h3>
                                    <p className="text-textColor">Meet our top carrier counsellor who will guide you to get scholarship and how to get a top foreign universities...</p>
                                </div>
                            </div>



                            <Link to="#">
                                <button className="primary-button-outline "> Book your seat
                                    {/* <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} /> */}
                                </button>
                            </Link>

                        </div>
                    </div>





                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.75fr] border-[1px] border-borderColor rounded-md md:rounded-xl px-4 py-4 bg-white gap-4 h-[100%] md:h-[40vh]">
                        <div className='zoom-image-container relative overflow-hidden rounded-md md:rounded-xl hover:cursor-pointer h-[20vh] md:h-[36vh]'>
                            <img src={eventImgThird} alt="" className='object-cover zoom-image  h-[100%] w-[100%]' />
                        </div>
                        <div className='flex flex-col justify-between md:p-6 gap-4'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Icon icon="gravity-ui:calendar" className="text-textColor " fontSize={20} />
                                        <p>22 July 2024 - 16:00</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Icon icon="tabler:clock" className="text-textColor rotate-45" fontSize={20} />
                                        <p>3hr</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className=" text-black">How to get Scholarship?</h3>
                                    <p className="text-textColor">Meet our top carrier counsellor who will guide you to get scholarship and how to get a top foreign universities...</p>
                                </div>
                            </div>



                            <Link to="#">
                                <button className="primary-button-outline "> Book your seat
                                    {/* <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} /> */}
                                </button>
                            </Link>

                        </div>
                    </div>









                </div>
            </div>
        </>
    )
}

export default Event