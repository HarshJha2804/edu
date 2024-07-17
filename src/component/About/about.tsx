import AboutHerosection from "../../assets/About/herosection-about.webp"
import founderImg from "../../assets/About/founder-img.png"
import Scrollanimation from "../Scrollanimation/Scrollanimation"
import Vision from "../../assets/About/vision.png"
import Mission from "../../assets/About/mission.png"
const About = () => {
  return (
    <>
      <div className="flex flex-col gap-8 md:gap-32">

        <div className="relative w-[100%] h-[100%]">
          <img src={AboutHerosection} alt="" className="object-cover brightness-[50%] h-[100vh] w-[100%]" />
          <h1 className="absolute top-[46%] left-[46%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">About Us</h1>
        </div>

        <Scrollanimation>
          <div className="bg-primary mx-16 md:mx-16 lg:mx-48 xl:mx-64 p-8 md:px-16 md:py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10">
            <p className="flex md:hidden text-[2rem] md:text-[3rem] xl:text-[5rem] text-white leading-[1.5rem] md:leading-[2rem] lg:leading-[4rem]">Who we are?</p>
            <p className="hidden md:flex text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-white leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2.75rem] xl:leading-[4rem]">Who <br /> we are?</p>
            <p className="text-white">
              Welcome to EmpowerEdu, where empowerment converges with educational
              expansion. We aim to revolutionize the educational landscape by providing
              strategic support and innovative solutions that foster growth and excellence.We
              empower educational institutions to envision new frontiers and capitalize on
              opportunities for advancement beyond traditional norms.

              Through strategic partnerships with over prestigious universities worldwide,
              including in the UK, USA, Australia, Canada, and New Zealand, we create
              pathways to excellence and career readiness. Our commitment lies in
              empowering schools, learning centres, and colleges to discover new avenues
              and enhance global educational offerings. At EmpowerEdu, our goal is to
              innovate education by fostering international connections and equipping our
              partners for success in an increasingly interconnected global environment
            </p>
          </div>
        </Scrollanimation>

        <Scrollanimation>
          <div className="grid grid-cols-1 items-center lg:grid-cols-[1fr_1fr] gap-0 lg:gap-24 mx-8 md:mx-16 lg:mx-16 xl:mx-64 ">
            <div className="shrink-0 p-16">
              <img src={founderImg} alt="" className="object-cover overflow-hidden rounded-xl max-h-[80%]" />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <p className="font-semibold text-[1.75rem] md:text-[2rem] lg:text-[3rem]">Founder’s Message</p>
              <p className="text-textColor md:text-[1.5rem] md:leading-7 font-light">EmpowerEdu is a part of Infinite Group, established in 2007 with a vision to become the most trusted brand for study abroad solutions, has swiftly emerged as the fastest-growing entity in the international education market. At EmpowerEdu, we empathize with the challenges faced by education providers in supporting students’ aspirations of studying abroad. Our gradual expansion across the globe underscores our commitment to delivering tangible results and empowering education partners to take control of their development</p>

            </div>
          </div>
        </Scrollanimation>


        <div>
          <Scrollanimation>
            <div className="px-8 md:px-16 lg:px-48 xl:px-40 flex-col gap-2 lg:grid lg:grid-cols-[1fr_1fr] grid-row-2 items-start bg-[#FC6B28] h-[100%] lg:h-[68vh] overflow-hidden">
              <div className="flex flex-col justify-start items-start gap-2 pt-16 md:pt-24">
                <p className="text-[0.8rem] md:text-[1.2rem] font-medium lg:leading-[1.75rem] tracking-[0.3rem] text-white">OUR VISION</p>
                <p className=" text-[1.5rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.5rem] md:leading-[2.75rem] font-normal flex flex-2 text-white">
                  EmpowerEdu enables you to <br /> envision possibilities beyond <br /> your current perspective
                </p>
              </div>
              <img src={Vision} alt="" className="h-[100%] w-[auto] shrink-0" />
            </div>
          </Scrollanimation>

          <Scrollanimation>
            <div className="px-8 md:px-16 lg:px-24 xl:px-40 flex flex-col-reverse gap-2 lg:grid lg:grid-cols-[2fr_1fr] grid-row-2 items-start bg-[#011627] h-[100%] lg:h-[68vh] overflow-hidden">
              <img src={Mission} alt="" className="h-[100%] w-[auto] shrink-0" />
              <div className="flex flex-col justify-start items-start gap-2 pt-16 md:pt-24">
                <p className="text-[0.8rem] md:text-[1.2rem] font-medium leading-[1.75rem] tracking-[0.3rem] text-white">OUR VISION</p>
                <p className=" text-[1.5rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.5rem] md:leading-[2.75rem] font-normal flex flex-2 text-white">
                  Building community and fostering growth
                </p>
              </div>
            </div>
          </Scrollanimation>
        </div>








      </div>

      {/* <div className=" mx-16 md:mx-16 lg:mx-48 xl:mx-72 p-8 md:px-24 md:py-16 flex flex-col gap-4 items-start border-[1px] bg-secondaryColor rounded-md">
          <p className="text-[1.2rem] leading-[1.5rem] font-light text-white flex flex-1 tracking-[0.3rem]">OUR VISSION</p>
          <p className=" text-[1.75rem] md:text-[3rem] font-normal leading-[3.25rem] text-white flex flex-2">
            EmpowerEdu enables you to envision possibilities beyond your current perspective
          </p>
        </div> */}



      {/* <div className="mx-16 md:mx-16 lg:mx-48 xl:mx-64 p-8 md:px-12 md:py-8 flex flex-row gap-4 md:gap-32 items-start border-[1px] border-borderColor rounded-md">
          <p className="text-[1.75rem] text-primary leading-[1.5rem] font-medium">Our Vission</p>
          <p className=" text-[1.75rem] md:text-[3rem] font-medium leading-[2.9rem]">
            EmpowerEdu enables you to envision possibilities beyond your current perspective
          </p>
        </div> */}
      {/* 
      <div className="bg-primary mx-16 md:mx-16 lg:mx-48 xl:mx-64 p-8 md:px-16 md:py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10">
        <p className="flex md:hidden text-[2rem] md:text-[3rem] xl:text-[5rem] text-white leading-[1.5rem] md:leading-[2rem] lg:leading-[4rem]">Who we are?</p>
        <p className="hidden md:flex text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-white leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2.75rem] xl:leading-[4rem]">Who <br /> we are?</p>
        <p className="text-white">
          Welcome to EmpowerEdu, where empowerment converges with educational
          expansion. We aim to revolutionize the educational landscape by providing
          strategic support and innovative solutions that foster growth and excellence.We
          empower educational institutions to envision new frontiers and capitalize on
          opportunities for advancement beyond traditional norms.

          Through strategic partnerships with over prestigious universities worldwide,
          including in the UK, USA, Australia, Canada, and New Zealand, we create
          pathways to excellence and career readiness. Our commitment lies in
          empowering schools, learning centres, and colleges to discover new avenues
          and enhance global educational offerings. At EmpowerEdu, our goal is to
          innovate education by fostering international connections and equipping our
          partners for success in an increasingly interconnected global environment
        </p>
      </div> */}
    </>
  )
}

export default About