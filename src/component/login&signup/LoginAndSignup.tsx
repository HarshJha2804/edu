// src/SignInForm.tsx
import React, { useEffect, useState } from "react";
import bgimg from "../../assets/Homepage/Herosection/background-img.jpg";
import { useLocation } from "react-router-dom";
const LoginAndSignup: React.FC = () => {


  const location = useLocation();
  const isLoginPath = location.pathname.includes('./login')
  const isSignupPath = location.pathname.includes('./signup')
  const [activeTab, setActvieTab] = useState<'tab1' | 'tab2'>('tab1');
  useEffect(() => {
    if (location.pathname === '/login') {
      setActvieTab('tab1')
    } else if (location.pathname === '/signup') {
      setActvieTab('tab2')
    }
  }, [location.pathname]);

  const handleClick = (tabName: 'tab1' | 'tab2') => {
    setActvieTab(tabName)
  }

  return (
    <>
      {/* <div className="form-container" style={{display:'grid', gridTemplateColumns:'60vw 40vw' }}>
    <div style={{backgroundImage:`url(${bgimg})`, height:'100vh', backgroundSize:'cover'}}>

    </div>
      <form className="form" style={{}}>

        <h2 className="title" style={{marginBottom:'4px'}}>Sign Up</h2>
        <p style={{}}>Create your account by filling the information</p>
       <div style={{marginTop:'0.75rem', width:"100%"}}>
       <p >Mobile Number</p>
        <input  
          type="text"
          placeholder="Mobile Number"
          className="input"
        />
       </div>
      <div style={{display:'flex', width:'100%', justifyContent:'end'}}>
      <p>Resend OTP</p>
      </div>

      
        <button type="submit" className="button" style={{marginTop:'1rem'}}>Send OTP</button>

      </form>
 
    </div> */}






















      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.75fr_1fr] p-8 gap-4 h-[100vh] lg:pt-28'>

        <div className=''>
          <img src={bgimg} alt="" className='object-cover h-[100%] rounded-2xl' />
        </div>
        <div className="form-container rounded-lg p-10 bg-white">
          <form className="form flex flex-col gap-16">
            <div>
              <svg height="2.5rem" viewBox="0 0 687 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1C2354" d="M250.71 34.7H265.39L285.67 80.34L307.82 34.7H317.7L337.98 80.34L369.74 12.82H358.26L338.25 56.32L332.11 41.91L350.79 0H389.76L343.85 98.76H333.18L312.36 53.12L291.81 98.76H280.87L250.71 34.7ZM10.26 124.787H4.07998V133.537H9.76998V135.377H4.07998V146.027H1.72998V122.967H10.27V124.787H10.26ZM57.63 145.577C57.98 145.267 58.16 144.877 58.16 144.397V124.607C58.16 124.127 57.99 123.727 57.63 123.427C57.28 123.117 56.82 122.967 56.27 122.967H48.85C48.3 122.967 47.85 123.127 47.5 123.427C47.15 123.737 46.97 124.127 46.97 124.607V144.397C46.97 144.877 47.15 145.277 47.5 145.577C47.84 145.887 48.3 146.037 48.85 146.037H56.27C56.82 146.037 57.27 145.887 57.63 145.577ZM55.81 124.787V144.217H49.32V124.787H55.81ZM106.18 144.397C106.18 144.877 106.01 145.267 105.66 145.577C105.31 145.887 104.87 146.037 104.31 146.037H97.63C97.08 146.037 96.62 145.887 96.27 145.577C95.91 145.277 95.74 144.877 95.74 144.397V138.547H98.09V144.217H103.82V138.717L96.5 131.027C95.99 130.497 95.74 129.917 95.74 129.277V124.607C95.74 124.127 95.92 123.737 96.27 123.427C96.63 123.127 97.08 122.967 97.63 122.967H104.31C104.86 122.967 105.31 123.117 105.66 123.427C106 123.727 106.18 124.127 106.18 124.607V129.967H103.83V124.777H98.1V129.637L105.45 137.327C105.94 137.837 106.18 138.417 106.18 139.047V144.397ZM148.83 124.787H152.93V122.977H142.34V124.787H146.48V146.027H148.83V124.787ZM197.85 146.027H189.14V122.967H197.75V124.777H191.5V133.377H197.19V135.217H191.5V144.207H197.85V146.027ZM243.79 146.027H246.26C244.75 142.337 243.23 138.657 241.7 134.967C241.716 134.967 241.734 134.967 241.752 134.967L241.788 134.968C241.827 134.969 241.871 134.97 241.919 134.971C241.982 134.973 242.052 134.975 242.129 134.978L242.254 134.982L242.41 134.987C242.495 134.99 242.575 134.992 242.65 134.995C242.864 135.002 243.034 135.007 243.16 135.007C244.88 135.007 245.74 134.457 245.74 133.347V124.597C245.74 124.117 245.57 123.717 245.22 123.417C244.87 123.107 244.41 122.957 243.86 122.957H234.98V146.017H237.33V124.777H243.38V133.267H239.18L238.86 133.677L243.79 146.027ZM285.72 146.027H283.37V122.967H285.72V146.027ZM332.89 146.027H334.52V122.967H332.3V139.627L325.35 122.967H323.59V146.027H325.81V129.067L332.89 146.027ZM382.93 144.397C382.93 144.877 382.75 145.267 382.4 145.577C382.05 145.887 381.6 146.037 381.05 146.037H374.09C373.54 146.037 373.08 145.887 372.74 145.577C372.39 145.277 372.21 144.877 372.21 144.397V124.607C372.21 124.127 372.39 123.737 372.74 123.427C373.09 123.127 373.54 122.967 374.09 122.967H381.05C381.6 122.967 382.06 123.117 382.4 123.427C382.75 123.727 382.93 124.127 382.93 124.607V129.967H380.56V124.777H374.56V144.207H380.56V136.237H377.73V134.467H382.93V144.397ZM430.75 146.037C432.36 146.037 433.17 145.327 433.17 143.927H433.18V133.687H426.25V136.617H429.2V143.067H424.03V125.937H429.2V130.017H433.18V125.097C433.18 123.687 432.37 122.977 430.76 122.977H422.47C420.86 122.977 420.06 123.687 420.06 125.097V143.927C420.06 145.337 420.84 146.037 422.41 146.037H430.75ZM483.36 146.027H479.23L474.86 135.317V133.237H478.76V125.927H473.76V146.027H469.8V122.967H480.32C481.91 122.967 482.71 123.677 482.71 125.087V133.467C482.71 134.437 482.33 135.067 481.57 135.357C481.16 135.507 480.3 135.577 478.99 135.577L483.36 146.027ZM530.19 146.037C531.8 146.037 532.6 145.327 532.6 143.927V125.097C532.6 123.687 531.79 122.977 530.19 122.977H521.58C520.01 122.977 519.23 123.687 519.23 125.097V143.927C519.23 145.337 520.01 146.037 521.58 146.037H530.19ZM528.64 125.937V143.067H523.2V125.937H528.64ZM588.81 122.977L584.93 146.067H581.05L578.68 132.997C578.66 132.527 578.61 131.827 578.54 130.887C578.54 131.357 578.49 132.057 578.4 132.997L576.05 146.067H572.15L568.27 122.977H572.28L574.33 136.647C574.342 136.841 574.358 137.074 574.377 137.346C574.403 137.735 574.435 138.204 574.47 138.757C574.48 138.287 574.53 137.587 574.62 136.647L576.91 122.977H580.16L582.45 136.647L582.461 136.817L582.472 136.986C582.481 137.108 582.49 137.24 582.5 137.383L582.511 137.535C582.526 137.75 582.543 137.986 582.562 138.245L582.6 138.757C582.61 138.287 582.66 137.587 582.74 136.647L584.79 122.977H588.81ZM631.63 126.017H636V122.967H623.31V126.017H627.68V146.027H631.63V126.017ZM684.8 146.027H680.8V135.687H675.43V146.027H671.47V122.967H675.43V132.467H680.8V122.967H684.8V146.027ZM46.66 43.0276V34.3477H0V99.0176H46.66V90.4876H8.97V69.7577H45.67V61.5476H8.97V43.0276H46.66ZM425.92 33.7188V42.3987H388.24V60.9187H424.93V69.1288H388.24V89.8587H425.92V98.3987H379.27V33.7188H425.92ZM558.37 42.3987V33.7188H511.72V98.3987H558.37V89.8587H520.69V69.1288H557.38V60.9187H520.69V42.3987H558.37ZM56.0098 99.0176V34.3477H69.2598L90.3598 88.3676L111.34 34.3576H124.71V99.0576H115.72V46.5077L95.4598 99.0576H85.4098L64.9998 46.5776L65.0298 99.0576L56.0098 99.0176ZM176.72 35.5677C177.63 35.8376 178.48 36.1476 179.26 36.4677C185.89 39.2776 185.69 47.6476 185.69 47.6476V60.4377C185.76 68.0677 181.61 71.0776 181.61 71.0776C177.39 74.8876 167.17 74.7577 167.17 74.7577H147.13V99.0576H138.07L138.16 34.3477C148.58 34.3777 159.01 34.3976 169.44 34.4176C171.5 34.4676 173.99 34.7477 176.72 35.5677ZM176.42 60.2676V49.5576C176.42 49.5576 176.75 44.3976 172.8 43.6676C172.8 43.6676 169.9 43.0176 168 43.0776L147.09 42.9677V66.1277H167.31C167.31 66.1277 173.4 66.1277 175.11 64.1176C175.11 64.1176 176.09 63.1776 176.42 60.2676ZM231.96 33.8594H210.91C201.4 33.8594 193.62 41.6394 193.62 51.1494V82.3294C193.62 91.8394 201.4 99.6194 210.91 99.6194H231.96C241.47 99.6194 249.25 91.8394 249.25 82.3294V51.1494C249.25 41.6394 241.47 33.8594 231.96 33.8594ZM239.91 81.8194C239.91 86.9194 235.74 91.0894 230.64 91.0894H212.24C207.14 91.0894 202.97 86.9194 202.97 81.8194V51.2994C202.97 46.1994 207.14 42.0294 212.24 42.0294H230.64C235.74 42.0294 239.91 46.1994 239.91 51.2994V81.8194ZM484.84 47.7779V59.8279C484.84 59.8279 484.7 67.6579 479.03 69.6679C479.03 69.6679 484.85 71.6079 484.85 80.6479V98.3979H475.41L475.51 84.0979C475.49 83.1079 475.43 82.2779 475.38 81.6379C475.302 80.6734 475.208 80.1241 475.166 79.8721C475.159 79.834 475.154 79.8028 475.15 79.7779L475.139 79.7191L475.139 79.7187C475.052 79.2666 474.962 78.7944 474.78 78.2579L474.774 78.2395C474.573 77.6481 474.252 76.7 473.5 75.9379C472.84 75.2579 472.14 75.0279 470.94 74.6379C470.2 74.3979 469.12 74.1179 467.78 74.0179C459.94 73.9879 452.11 73.9679 444.28 73.9479L444.21 98.3879H435.17V33.7179H467.2C467.2 33.7179 481.16 33.3279 483.57 41.3579C483.57 41.3579 484.77 44.0279 484.84 47.7779ZM474.24 62.8879C474.24 62.8879 475.44 60.9279 475.44 58.5579V48.6579C475.44 48.6579 475.22 44.6879 472.81 43.6179C472.81 43.6179 470.93 42.6779 466.47 42.3679H444.34V65.4579H465.4C465.4 65.4579 472.9 65.2979 474.24 62.8879ZM616.17 37.9388C616.17 37.9388 612.02 33.9188 601.64 33.7188H567.77V98.3987H602.31C602.31 98.3987 614.36 98.3888 618.51 91.5688C618.51 91.5688 622.12 87.2888 622.12 77.9788V53.9488C622.13 53.9388 622.39 42.8987 616.17 37.9388ZM612.82 77.4688C612.65 82.2888 611.64 84.6687 611.64 84.6687C610.08 90.9587 598.74 90.1588 598.74 90.1588H576.74L576.7 41.9587H600.98C608.28 42.2887 610.22 44.9688 610.22 44.9688C612.43 47.2487 612.83 53.3387 612.83 53.3387V77.4688H612.82ZM642 33.7188H632.9V79.5887C632.96 84.4688 634.77 89.1588 634.77 89.1588C638.18 99.1588 652.04 99.1588 652.04 99.1588L665.9 99.1288C668.37 99.3888 675 97.7188 675 97.7188C687.25 94.3087 686.2 77.9287 686.2 77.9287V33.7188H677.04V79.1787C676.84 82.8587 676.4 84.2687 676.4 84.2687C675.2 89.8287 667.23 89.8287 667.23 89.8287H652.3C645.94 89.7587 644.27 87.1487 644.27 87.1487C641.46 84.8987 641.93 76.3687 641.93 76.3687L642 33.7188Z" />
              </svg>
            </div>

            <div className="flex flex-col gap-8">
              <div className="tab-nav border-[1px] p-1.5 rounded-[6rem] flex flex-row gap-2 w-[fit-content]">
                <div className={`${activeTab === 'tab1' ? 'primary-button border-[1px] border-primary' : 'primary-button-outline rounded-3xl'} tab-link hover:cursor-pointer`} onClick={() => handleClick("tab1")}>Login </div>
                <div className={`${activeTab === 'tab2' ? 'primary-button border-[1px] border-primary' : 'primary-button-outline rounded-3xl'} tab-link hover:cursor-pointer`} onClick={() => handleClick("tab2")}>Sign up</div>
              </div>
              { }


              {activeTab === "tab1" &&
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="text-[2rem] font-medium " >
                      Login
                    </h1>
                    <p>Please enter the details to continue</p>
                  </div>
                  <div className="flex flex-col">
                    <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                      <p>Mobile Number</p>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="input-style w-[100%]"
                      />
                    </div>

                    <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                      <p>Password</p>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="input-style w-[100%]"
                      />
                    </div>
                  </div>

                  <div className="w-[100%] mt-8">
                    <button
                      type="submit"
                      className="primary-button w-[100%]"
                      area-label="Send OTP"
                    >
                      Submit
                    </button>
                  </div>


                </div>
              }

              {activeTab === "tab2" &&
                <div className="flex flex-col">

                  <div className="flex flex-col">
                    <h1 className="text-[2rem] font-medium " >
                      Sign Up
                    </h1>
                    <p style={{}}>Create your account by filling the information</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                      <p>Mobile Number</p>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="input-style w-[100%]"
                      />
                    </div>
                    <div className="flex w-[100%] justify-end">
                      <p className="font-semibold text-primary">Resend OTP</p>
                    </div>
                  </div>

                  <div className="w-[100%] mt-8">
                    <button
                      type="submit"
                      className="primary-button w-[100%]"
                      area-label="Send OTP"
                    >
                      Send OTP
                    </button>
                  </div>

                </div>
              }
            </div>


            {/* <div className="flex flex-col">

              <div className="flex flex-col">
                <h1 className="text-[2rem] font-medium " >
                  Sign Up
                </h1>
                <p style={{}}>Create your account by filling the information</p>
              </div>
              <div className="flex flex-col gap-4">
                <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
                  <p>Mobile Number</p>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="input-style w-[100%]"
                  />
                </div>
                <div className="flex w-[100%] justify-end">
                  <p className="font-semibold text-primary">Resend OTP</p>
                </div>
              </div>

              <div className="w-[100%] mt-8">
                <button
                  type="submit"
                  className="primary-button w-[100%]"
                  area-label="Send OTP"
                >
                  Send OTP
                </button>
              </div>

            </div> */}
            {/* <p>Login with Email</p> */}

          </form>
        </div>

      </div>

    </>
  );
};

export default LoginAndSignup;



// // src/SignInForm.tsx
// import React from 'react';

// interface FormValues {
//   mobile: string;
// }

// const SignupForm: React.FC = () => {

//   return (
//    <>
//     <div className="form-container" style={{display:'grid', gridTemplateColumns:'2fr 1fr', justifyContent:'start', alignItems:'start', }}>

//     <div>

//     </div>
//       <form className="form" style={{ marginRight:'10vh', marginTop:'10vh'}}>

//         <h2 className="title" style={{marginBottom:'4px'}}>Sign Up</h2>
//         <p style={{}}>Create your account by filling the information</p>
//        <div style={{marginTop:'0.75rem', width:"100%"}}>
//        <p >Mobile Number</p>
//         <input
//           type="text"
//           placeholder="Mobile Number"
//           className="input"
//         />
//        </div>
//       <div style={{display:'flex', width:'100%', justifyContent:'end'}}>
//       <p>Resend OTP</p>
//       </div>

//         {/* <p>Login with Email</p> */}
//         <button type="submit" className="button" style={{marginTop:'1rem'}}>Send OTP</button>

//       </form>

//     </div>

//    </>
//   );
// };

// export default SignupForm;





<div className="m-4 h-[96vh] overflow-hidden rounded-2xl">
  <div className="relative">
    <img src={bgimg} alt="" className="object-cover blur-[2px]" />
  </div>

  <div className="absolute top-[25%] left-[40%]">
    <div className="form-container rounded-lg p-10 bg-white" >
      <form className="form flex flex-col gap-2">

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-[2rem] font-medium " >
              Sign Up
            </h1>
            <p style={{}}>Create your account by filling the information</p>
          </div>
          <div className="flex flex-col gap-2">
            <div style={{ marginTop: "0.75rem", width: "100%" }} className="flex flex-col gap-1">
              <p>Mobile Number</p>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="input-style w-[100%]"
              />
            </div>
            <div className="flex w-[100%] justify-end">
              <p className="font-semibold text-primary">Resend OTP</p>
            </div>
          </div>

        </div>
        {/* <p>Login with Email</p> */}
        <div className="w-[100%]">
          <button
            type="submit"
            className="primary-button w-[100%]"
            area-label="Send OTP"
          >
            Send OTP
          </button>
        </div>
      </form>
    </div>
  </div>
</div>