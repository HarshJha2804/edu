import { Icon } from "@iconify/react/dist/iconify.js"

// import contactBg from "../../assets/Contact/contact-bg.jpg"
const Contact = () => {
  return (
    <>
      {/* <div className="relative w-[100vw] h-[100%] bg-white">
        <img src={contactBg} alt="" className="object-cover brightness-[50%] h-[100vh] w-[100%]" />
        <div className="absolute top-[50%] left-[45%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">
          <h1>
            Contact Us
          </h1>
        </div>
      </div> */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 mx-auto mt-[2rem]  bg-white">
          <div className="flex flex-col justify-between">
            <div className="w-[fit-content]">
              <div className="flex flex-col justify-center items-center gap-1">
                <h2 className="h2 text-primary"> Partner With Us</h2>
                <p className="h-[4px] w-[60%] bg-secondary"></p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Contact Details:</p>
              <div className="flex flex-row gap-1">
                <Icon icon="ph:phone-bold" fontSize={20} className="text-primary" />
                <p> +91 8588897029</p>
              </div>
              <div className="flex flex-row gap-1">
                <Icon icon="material-symbols:mail-outline" fontSize={20} className="text-primary" />
                <p> contact@empoweredu.global</p>
              </div>
            </div>

            {/* 
          <p>I-59/60, Lajpat Nagar-1 <br />
            New Delhi</p> */}

          </div>

          <div className="md:max-w-[60vw] overflow-hidden ">
            <form action="" className="flex flex-col gap-8">

              <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-8">
                <div className="grid grid-rows-2 items-start">
                  <label htmlFor="name" className="text-[1rem]">Full Name</label> 
                  <input type="text" className="p-2 contactus-form-input" placeholder="Enter your full name" />
                </div>

                <div className="grid grid-rows-2 items-start ">
                  <label htmlFor="name" className="text-[1rem]">Email
                    <span className="text-red-500 ml-1">*</span></label>
                  <input required type="email" className="p-2 contactus-form-input" placeholder="Enter your email address" />
                </div>
              </div>

              <div className="grid grid-rows-2 items-start ">
                <label htmlFor="name" className="text-[1rem]">Mobile Number
                  <span className="text-red-500 ml-1">*</span></label>
                <input required type="tel" className="p-2 contactus-form-input " placeholder="Enter your mobile number" />
              </div>

              <div className="grid grid-rows-2 items-start ">
                <label htmlFor="name" className="text-[1rem]">Message
                  <span className="text-red-500 ml-1">*</span></label>

                <textarea name="" id="" className="p-2 contactus-form-input h-[3rem] " placeholder="Enter your message"></textarea>
              </div>

              <div>
                <button className="primary-button border-[1px] p-[2rem] text-[1rem] md:mt-8"> Submit</button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </>
  )
}

export default Contact