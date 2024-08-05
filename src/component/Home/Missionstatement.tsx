// import founderImg from '../../assets/Homepage/Missionsection/founder.jpg'

const Missionstatement = () => {
    return (
        <>
            <div className="container mx-auto px-8 flex justify-center items-center">
                <div className=" grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4 md:gap-10 bg-primary p-8 md:p-20  ">
                    <div className=" flex flex-col gap-2 md:gap-4 ">
                        {/* <p className="md:tracking-[0.25rem] tracking-[0.1rem] font-medium text-white text-[0.75rem] md:text-[1rem]">OUR MISSION</p> */}
                        <h2 className="text-[1.75rem] md:text-[3rem] font-normal text-white leading-[1.6rem] md:leading-[3rem]">Expansion to your existing business</h2>

                    </div >

                    <div className="">
                        <p className="text-white text-[1rem] md:text-[1.25rem] font-light tracking-[0.05px] leading-[1.2rem] md:leading-[1.5rem]">
                            At EmpowerEdu, we work hand in hand with educational institutions to offer specialised administrative and operational assistance, paired
                            with tailored training for team members. We optimise efficiency, empowering the team to deliver
                            exceptional educational experiences. Let's embark on a journey to transform education
                            together
                        </p>
                        {/* <img src={founderImg} alt="a confident founder" className='object-cover w-[584px] h-[584px]' /> */}
                    </div>
                </div>
            </div>


        </>

    )
}

export default Missionstatement