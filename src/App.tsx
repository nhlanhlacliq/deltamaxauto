import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import Services from "@/scenes/services";
import Contact from "@/scenes/contact";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-black'>
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App