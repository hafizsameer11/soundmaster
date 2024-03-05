// import BoxSection from "./components/BoxSection";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThirdSectionHome from "./components/ThirdSectionHome";
import TopSection from "./components/TopSection";
import TrendingSound from "./components/TrendingSound";


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
        <TrendingSound />
        <ThirdSectionHome />
      </div>
    </main>
  );
}

