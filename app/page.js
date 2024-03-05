// import BoxSection from "./components/BoxSection";
import { Explora } from "next/font/google";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rotatingcirlce from "./components/Rotaingcirlce";
import Sidebar from "./components/Sidebar";
import ThirdSectionHome from "./components/ThirdSectionHome";
import TopSection from "./components/TopSection";
import TrendingSound from "./components/TrendingSound";
import Explore from "./components/Explore";
import Footer from "./components/Footer";


// pages/index.js
// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="main">
<Navbar/>    
        <TopSection />
        <ThirdSectionHome />
        <TrendingSound />
        <Explore />
        <Footer/>
        {/* <Rotatingcirlce/> */}
      </div>
    </main>
  );
}

