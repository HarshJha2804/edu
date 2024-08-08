import { useEffect } from "react";
import Herosection from "./Herosection"
// import Missionstatement from "./Missionstatement"
import Scrollanimation from "../Scrollanimation/Scrollanimation";
// import Universitysection from "./Universitylogos";

import ServiceSector from "./ServiceSector";
// import Numbers from "./Numbers";
// import Youtubeevideo from "./Youtubeevideo";
// import Blog from "../Blog/Blog";
import HomeServices from "./homeServices";
// import HomeBlog from "./Homeblog";
import Statements from "./mission&vision";
import HomeBlog from "./Homeblog";



const Home = () => {


  useEffect(() => {
    document.title = "Empower Edu";
    setMetaDescription("");
  }, []);

  const setMetaDescription = (description: string): void => {
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  };


  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12 bg-white">


        <Herosection />



        <Scrollanimation>
          <Statements />
        </Scrollanimation>

        <Scrollanimation>
          <HomeServices />
        </Scrollanimation>

        <Scrollanimation>
          <ServiceSector />
        </Scrollanimation>

        <Scrollanimation>
          <HomeBlog />
        </Scrollanimation>

        {/* 
        <Scrollanimation>
          <Universitysection />
        </Scrollanimation>

        <Scrollanimation>
          <Numbers />
        </Scrollanimation> */}


      </div>
    </>
  )
}

export default Home