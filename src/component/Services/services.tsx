import serviceHeroImg from "../../assets/Services/service-hero-img.png"
import serviceFirst from "../../assets/Services/service-one.png"
import serviceSecond from "../../assets/Services/service-second.webp"
import serviceThird from "../../assets/Services/service-third.webp"
import serviceFourth from "../../assets/Services/service-fourth.webp"
import serviceFifth from "../../assets/Services/service-fifth.webp"
import serviceSixth from "../../assets/Services/service-sixth.webp"
import serviceBg from "../../assets/Services/service-bg.png"
import Scrollanimation from "../Scrollanimation/Scrollanimation"
const Services = () => {
  const serviceData = [
    {
      bgPastelColor: "#f5efff",
      bgcolor: '#012a4a',
      img: serviceFirst,
      alt: "a woman explaining the how the yours school can be expand globally",
      title: "Establish a Global Presence",
      description: "We establish a seamless international  office on your campus, dedicated to promoting global engagement.This office serves as a central hub for coordinating various international services and academic collaborations with institutions worldwide.It facilitates the efficient management of study abroad programs, enhances cross- cultural communication, and integrates global perspectives into campus and educational initiatives.",
    },
    {
      bgPastelColor: "#edf2fb",
      bgcolor: '#690500',
      img: serviceSecond,
      alt: "School members find the best universities",
      title: "Collaboration with Esteemed Universities",
      description: "We empower institutions to explore a multitude of academic and cultural opportunities through our global network. This facilitates exchange programs, international study opportunities, and enriches the educational experience. Engaging with such a diverse community of institutions allows our partners to broaden academic horizons, gain valuable international perspectives, and develop essential skills for success in today's interconnected world",
    },
    {
      bgPastelColor: "#f8edeb",
      bgcolor: '#F19900',
      img: serviceThird,
      alt: "Student happy to see the enrollment process is easy",
      title: "Streamlined Enrollment and Career prospects",
      description: "We strive to enhance placement/admission prospects by refining procedures from application to admission.We streamline processes and leverage technology to reduce administrative  complexities and ensure efficiency for institutions.We manage all applications through the digital partner dashboard, as well as their communications, in one spot. Our goal is to provide clear  guidance and robust support, empowering our partners to navigate requirements effectively and secure placements that align with their academic and career aspirations",
    },
    {
      bgPastelColor: "#f4f4d5",
      bgcolor: '#AACC00',
      img: serviceFourth,
      alt: "a group of people are seeing the insight in desktop",
      title: "Industry-Leading Insights and Strategies",
      description: "Our team of experts combines deep industry knowledge with cutting-edge research methodologies to provide tailored solutions that meet the unique challenges of today's competitive landscape. We empower institutions to capitalize on emerging trends, anticipate market shifts, and seize growth opportunities. By leveraging our strategic guidance and forward-thinking approach, education providers can achieve sustainable growth and maintain a leadership position in their domain.",
    },
    {
      bgPastelColor: '#fadde1',
      bgcolor: '#346F6A',
      img: serviceFifth,
      alt: "Trainer explaining the process to crowd",
      title: "Comprehensive Support and Training",
      description: "Comprehensive support and training encompass a robust framework designed to empower institutions with the skills, knowledge, and resources they need to succeed. Our approach includes personalized guidance, hands-on training sessions, and access to a diverse range of educational materials. We prioritize continuous learning and development, ensuring that our clients are equipped to navigate challenges, optimize processes, and achieve their goals effectively. With tailored support and ongoing training initiatives, we aim to foster a culture of growth, innovation, and excellence within every facet of our engagement.",
    },
    {
      bgPastelColor: '#ebf4f5',
      bgcolor: '#FF595E',
      img: serviceSixth,
      alt: "a image showing data privacy",
      title: "Ensure data privacy integrity",
      description: "We prioritize data privacy integrity by employing GDPR security measures and best practices. Our approach includes stringent data encryption, regular audits, and compliance with industry standards to protect sensitive information from unauthorized access and breaches. By fostering a culture of data privacy awareness and accountability among our team, we ensure that confidentiality and trustworthiness are upheld in every interaction and operation. Our commitment to data privacy integrity extends to maintaining transparency and proactive measures to mitigate risks, ensuring peace of mind for our clients and stakeholders",
    },

  ]

  return (

    <>
      <div className="relative w-[100%] h-[100%]">
        <img src={serviceHeroImg} alt="" className="object-cover brightness-[50%] h-[100vh] w-[100%]" />
        <h1 className="absolute top-[46%] left-[46%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">Services</h1>
      </div>


      <div className="mt-40 ">
        {serviceData.map((data) => (

          <div className={`sticky top-0 h-[120vh] py-[8rem]`} style={{ backgroundColor: data.bgcolor }}>
            <div className="container mx-auto p-8 md:p-16">
              {/* <p className=" text-[1.75rem] text-white md:text-[2rem] lg:text-[3rem] ">Our Services</p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24">
                <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                  <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                </div>
                <div className="flex flex-col justify-end gap-16">
                  <p className="text-[1.75rem] md:text-[5rem] text-white leading-[2.4rem]">Services</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-[1.75rem] md:text-[2rem] text-white">{data.title}</p>
                    <p className="text-white text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40">
        {serviceData.map((data) => (

          <div className={`sticky top-0 h-[120vh] py-[8rem]`} >
            <div className="container mx-auto p-8 md:p-16  bg-white border-[1px] border-borderColor rounded-2xl">
              {/* <p className=" text-[1.75rem] text-white md:text-[2rem] lg:text-[3rem] ">Our Services</p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                  <Scrollanimation>
                    <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                  </Scrollanimation>
                </div>
                <div className="flex flex-col justify-end gap-16">
                  <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                  <div className="flex flex-col gap-2">
                    <Scrollanimation>
                      <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                    </Scrollanimation>
                    <Scrollanimation>
                      <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                    </Scrollanimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 w-[100vw] h-[90vh] overflow-auto body ">
        <div className="scroll-div-container overflow-y-scroll">
          {serviceData.map((data) => (
            <section>
              <div className={`sticky top-0 h-[100vh] py-[8rem] `} >
                <div className="container p-16 mx-auto flex flex-col gap-8  bg-white border-[1px] border-borderColor rounded-2xl" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                    <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                      <Scrollanimation>
                        <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                      </Scrollanimation>
                    </div>
                    <div className="flex flex-col justify-end gap-16">
                      <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                      <div className="flex flex-col gap-2">
                        <Scrollanimation>
                          <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                        </Scrollanimation>
                        <Scrollanimation>
                          <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                        </Scrollanimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div >

      {/* pastel bg color */}
      <div className="mt-40 w-[100vw] h-[100vh] overflow-auto body ">
        <div className="scroll-div-container overflow-y-scroll">
          {serviceData.map((data) => (
            <section>

              <div className={`sticky top-0 h-[100vh] py-[8rem] `} style={{ backgroundColor: data.bgPastelColor }}>
                <div className="container p-16 mx-auto flex flex-col gap-8  bg-white border-[1px] border-borderColor rounded-2xl" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                    <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                      <Scrollanimation>
                        <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                      </Scrollanimation>
                    </div>
                    <div className="flex flex-col justify-end gap-16">
                      <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                      <div className="flex flex-col gap-2">
                        <Scrollanimation>
                          <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                        </Scrollanimation>
                        <Scrollanimation>
                          <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                        </Scrollanimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div >


      {/* pastel color */}

      <div className="mt-40 w-[100vw] h-[100vh] overflow-auto body ">
        <div className="scroll-div-container overflow-y-scroll">
          {serviceData.map((data) => (
            <section>

              <div className={`sticky top-0 h-[100vh] py-[8rem] `} >
                <div className="container p-16 mx-auto flex flex-col gap-8 border-[1px] border-borderColor rounded-2xl" style={{ backgroundColor: data.bgPastelColor }} >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                    <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                      <Scrollanimation>
                        <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                      </Scrollanimation>
                    </div>
                    <div className="flex flex-col justify-end gap-16">
                      <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                      <div className="flex flex-col gap-2">
                        <Scrollanimation>
                          <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                        </Scrollanimation>
                        <Scrollanimation>
                          <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                        </Scrollanimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div >

      <div className="mt-40">
        {serviceData.map((data) => (

          <div className={`sticky top-0 h-[120vh] py-[8rem]`} style={{ backgroundColor: data.bgcolor }} >
            <div className="container mx-auto p-8 md:p-16  bg-white border-[1px] border-borderColor rounded-2xl">
              {/* <p className=" text-[1.75rem] text-white md:text-[2rem] lg:text-[3rem] ">Our Services</p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                  <Scrollanimation>
                    <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                  </Scrollanimation>
                </div>
                <div className="flex flex-col justify-end gap-16">
                  <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                  <div className="flex flex-col gap-2">
                    <Scrollanimation>
                      <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                    </Scrollanimation>
                    <Scrollanimation>
                      <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                    </Scrollanimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-40 w-[100vw] h-[90vh] overflow-auto body ">
        <div className="scroll-div-container overflow-y-scroll">
          {serviceData.map((data) => (
            <section>
              <div className={`sticky top-0 h-[100vh] py-[8rem] `} style={{ backgroundImage: `url(${serviceBg})`, }}>
                <div className="container p-16 mx-auto flex flex-col gap-8  bg-white border-[1px] border-borderColor rounded-2xl" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                    <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                      <Scrollanimation>
                        <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                      </Scrollanimation>
                    </div>
                    <div className="flex flex-col justify-end gap-16">
                      <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                      <div className="flex flex-col gap-2">
                        <Scrollanimation>
                          <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                        </Scrollanimation>
                        <Scrollanimation>
                          <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                        </Scrollanimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div >






      {/* <div className="mt-16 w-[100vw] h-[90vh] overflow-auto body ">
        <div className="scroll-div-container overflow-y-scroll">
          {serviceData.map((data) => (
            <section>
              <div className={`sticky top-0 h-[120vh] py-[8rem] image-bg`} style={{ backgroundImage: `url(${serviceBg})`, }}>
                <div className="container px-16 mx-auto flex flex-col gap-8  bg-white border-[1px] border-borderColor rounded-2xl" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24  ">
                    <div className="relative overflow-hidden zoom-image-container rounded-3xl">
                      <Scrollanimation>
                        <img src={data.img} alt={data.alt} className="h-[60vh] object-cover zoom-image" />
                      </Scrollanimation>
                    </div>
                    <div className="flex flex-col justify-end gap-16">
                      <p className="text-[1.75rem] md:text-[5rem] text-black leading-[2.4rem]">Services</p>
                      <div className="flex flex-col gap-2">
                        <Scrollanimation>
                          <p className="text-[1.75rem] md:text-[2rem] text-black">{data.title}</p>
                        </Scrollanimation>
                        <Scrollanimation>
                          <p className="text-black text-[1rem] md:text-[1.25rem] font-extralight flex flex-1">{data.description}</p>
                        </Scrollanimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div > */}





    </>
  )
}

export default Services