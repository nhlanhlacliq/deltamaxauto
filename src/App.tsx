import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import Services from "@/scenes/services";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer";
import {Helmet} from 'react-helmet';


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
    // <Head title="Hello">

    // />

    <div className='app bg-black'>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>DeltaMax Auto</title>
        <meta name="description" content="Jaguar Landrover Range Rover BMW repairs maintenacne service"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Helmet>
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
  
      <Footer />
    </div>
  )
}

export default App