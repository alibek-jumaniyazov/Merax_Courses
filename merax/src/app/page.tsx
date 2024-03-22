import Advantages from "@/components/main/Advantages";
import AkademiyInfo from "@/components/main/AkademiyInfo";
import Banner from "@/components/main/Banner";
import Contact from "@/components/main/Contact";
import Courses from "@/components/main/Courses/Courses";
import GetInfo from "@/components/main/GetInfo";

export default function Home() {
  return (
    <div className="Home flex flex-col justify-center items-start ">  
        <Banner/>
        <AkademiyInfo/>
        <Courses/>
        <GetInfo/>
        <Advantages/>
        <Contact/>
    </div>
  );
}
