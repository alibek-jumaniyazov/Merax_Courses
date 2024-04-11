import Advantages from "@/components/main/Advantages";
import Banner from "@/components/main/Banner";
import Contact from "@/components/main/Contact";
import Courses from "@/components/main/Courses/Courses";
import GetInfo from "@/components/main/GetInfo";
import AcademiyInfo from "@/components/main/AcademyInfo";

export default function Home() {
  return (
    <div className="Home flex flex-col justify-center items-start ">
      <div className="w-[1440px] my-0 mx-auto ">
        <Banner />
        <AcademiyInfo />
      </div>
      <Courses />
      <div className="w-[1440px] my-0 mx-auto ">
        <GetInfo />
        <Advantages />
        <Contact />
      </div>
    </div>
  );
}
