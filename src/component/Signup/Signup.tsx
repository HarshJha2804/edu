// src/SignInForm.tsx
import React from 'react';
import bgimg from '../../assets/Homepage/Herosection/background-img.jpg'
const Signup: React.FC = () => {



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


    <div className="form-container" style={{backgroundImage:`url(${bgimg})`, height:'100vh', backgroundSize:'cover', }}>
      <form className="form" style={{width:'50vh'}}>

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
      {/* <p>Resend OTP</p> */}
      </div>

        {/* <p>Login with Email</p> */}
        <button type="submit" className="button" style={{marginTop:'1rem'}}>Send OTP</button>

      </form>
 
    </div>

   </>
  );
}; 

export default Signup;














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
