import founderImg from '../../assets/Homepage/Missionsection/founder.jpg'

const Missionstatement = () => {
    return (
        <>
            <div className="container mx-10 lg:mx-48">
                <div className=" grid grid-cols-[1.5fr_1fr] gap-20 ">
                    <div className="bg-[#E6EAFE] p-20 flex flex-col gap-4 rounded-2xl">
                        <p className="tracking-[0.25rem] font-medium">OUR MISSION</p>
                        <h2 className="text-[3rem] text-textColorHeading font-semibold leading-[3rem]">Expansion to your extending <br />business</h2>
                        <p className="text-textColor text-[1.5rem] font-light tracking-[0.05px] leading-[1.9rem]">
                            Empowering educational institutions to envision greater possibilities. With comprehensive administrative and operational support, along with tailored training for faculty and staff, we optimize efficiency and effectiveness, empowering your team to deliver exceptional educational experiences. Join us in transforming education and expanding possibilities for students worldwide
                        </p>
                    </div >

                    <div className="bg-black rounded-2xl">
                        <img src={founderImg} alt="a confident founder" className='object-cover w-[584px] h-[584px] rounded-2xl' />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Missionstatement