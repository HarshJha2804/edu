import contactBg from "../../assets/Contact/contact-bg.jpg"
const Contact = () => {
  return (
    <>
      <div className="relative w-[100vw] h-[100%]">
        <img src={contactBg} alt="" className="object-cover brightness-[50%] h-[100vh] w-[100%]" />
        <div className="absolute top-[50%] left-[45%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">
          <h1>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 container p-8 md:p-16 mx-auto mt-[2rem] gap-8">
        <div className="flex flex-col justify-between">
          <h2 className="text-[1.75rem] leading-[2rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[4rem] lg:leading-[4rem] font-semibold">Have an enquiry <br /> Let's talk</h2>

          {/* 
          <p>I-59/60, Lajpat Nagar-1 <br />
            New Delhi</p> */}

        </div>

        <div className="md:max-w-[60vw] overflow-hidden ">
          <form action="" className="flex flex-col gap-8">

            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-8">
              <div className="grid grid-rows-2 items-start">
                <label htmlFor="name" className="text-[1rem]">Full Name</label>
                <input type="text" className="p-2 border-b-[2px] border-black contactus-form-input w-[100%] bg-transparent font-light text-[1.25rem]" placeholder="Enter your full name" />
              </div>

              <div className="grid grid-rows-2 items-start ">
                <label htmlFor="name" className="text-[1rem]">Email
                  <span className="text-red-500 ml-1">*</span></label>
                <input required type="email" className="p-2 border-[2px] border-black contactus-form-input w-[100%] bg-transparent font-light text-[1.25rem]" placeholder="Enter your email address" />
              </div>
            </div>

            <div className="grid grid-rows-2 items-start ">
              <label htmlFor="name" className="text-[1rem]">Mobile Number
                <span className="text-red-500 ml-1">*</span></label>
              <input required type="tel" className="p-2 border-[2px] border-black contactus-form-input w-[100%] bg-transparent font-light text-[1.25rem]" placeholder="Enter your mobile number" />
            </div>

            <div className="grid grid-rows-2 items-start ">
              <label htmlFor="name" className="text-[1rem]">Message
                <span className="text-red-500 ml-1">*</span></label>

              <textarea name="" id="" className="p-2 border-[2px] border-black contactus-form-input h-[3rem] w-[100%] bg-transparent font-light text-[1.25rem]" placeholder="Enter your message"></textarea>
            </div>

            <div>
              <button className="primary-button border-[1px] p-[2rem] text-[20px] md:mt-8"> Submit</button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default Contact