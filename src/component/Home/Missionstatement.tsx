// import founderImg from '../../assets/Homepage/Missionsection/founder.jpg'

const Missionstatement = () => {
    return (
        <>
            <div className="flex justify-center items-center mx-8 lg:mx-48">
                <div className=" grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4 md:gap-10 bg-[#1A2041] p-8 md:p-20  ">
                    <div className="bg-[#1A2041] flex flex-col gap-2 md:gap-4 ">
                        <p className="md:tracking-[0.25rem] tracking-[0.1rem] font-medium text-white text-[0.75rem] md:text-[1rem]">OUR MISSION</p>
                        <h2 className="text-[1.75rem] md:text-[3rem] font-normal text-white leading-[1.6rem] md:leading-[3rem]">Expansion to your extending business</h2>
                     
                    </div >

                    <div className="">
                    <p className="text-white text-[1rem] md:text-[1.5rem] font-light tracking-[0.05px] leading-[1.2rem] md:leading-[1.9rem]">
                            Empowering educational institutions to envision greater possibilities. With comprehensive administrative and operational support, along with tailored training for faculty and staff, we optimize efficiency and effectiveness, empowering your team to deliver exceptional educational experiences. Join us in transforming education and expanding possibilities for students worldwide
                        </p>
                        {/* <img src={founderImg} alt="a confident founder" className='object-cover w-[584px] h-[584px]' /> */}
                    </div>
                </div>
            </div>


        </>

    )
}

export default Missionstatement