
import { Link } from 'react-router-dom'
// import eventBg from '../../assets/Events/event-bg.jpg'
import eventImg from "../../assets/Events/eventImg.png"
// import eventImgSecond from "../../assets/Events/eventImg-2.jpg"
// import eventImgThird from "../../assets/Events/eventImg-3.jpg"
import { Icon } from '@iconify/react/dist/iconify.js'
const Eventpopover = () => {
    return (
        <>
            <div className="border-[1px] border-borderColor rounded-md md:rounded-xl px-4 pt-4 pb-8 bg-white flex flex-col">
                <div className='zoom-image-container overflow-hidden rounded-md md:rounded-xl max-h-[14.5rem] hover:cursor-pointer'>
                    <img src={eventImg} alt="" className='object-cover zoom-image' />
                </div>
                <div className='flex flex-col gap-4'>

                    <div className='flex justify-between px-1 py-4'>
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
                        <p className="text-[1.25rem] leading-[1.25rem] md:text-[1.5rem] md:leading-[1.6rem] font-medium text-textColor">How to get
                            Scholarship?</p>
                        <p className="text-textColor font-normal ">Meet our top carrier counsellor who will guide you to get scholarship...</p>
                    </div>

                    <Link to="#">
                        <button className="flex flex-row gap-0.5 items-center justify-end primary-button p-0 "> Book your seat
                            {/* <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} /> */}
                        </button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default Eventpopover