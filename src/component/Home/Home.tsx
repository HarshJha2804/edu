import { useEffect } from "react";
import Herosection from "./Herosection"
import Missionstatement from "./Missionstatement"
import Scrollanimation from "../Scrollanimation/Scrollanimation";


const Home = () => {


  useEffect(() => {
    document.title = "Home Page - Your Website Name";
    setMetaDescription("Welcome to the home page of Your Website Name. Discover our features and services.");
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
<div className="flex flex-col gap-40">


<Herosection/>

<Scrollanimation>
<Missionstatement/>
</Scrollanimation>

</div>
</>
  )
}

export default Home