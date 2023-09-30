// import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.svg";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage(value: SelectedPage): void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexbetween = "flex items-center justify-between";
  const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  // const navbarBackground = isTopOfPage ? "": "bg-primary-300 drop-shadow"
  const navbarBackground = isTopOfPage ? "": "drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexbetween} fixed top-0 z-30 w-full py-3 sm:py-6 bg-black`}>
        {/* <div className={`${flexbetween} mx-auto w-5/6`} > */}
        <div className={`${flexbetween} mx-auto w-5/6`} >
          <div className={`${flexbetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            
            {/* Right SIDE */}
            {/* <div className={`${flexbetween} w-full `}> */}
            {isAboveMediumScreens ? (
            <div className={`${flexbetween} `}>
              <div className={`${flexbetween} text-white gap-8`}>
                <Link 
                  page='Home' 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link 
                  page='About'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                  />
                <Link 
                  page='Services'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                  />
                <Link 
                  page='Contact'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                  />
              </div>
            </div>
            ) : 
            (
              <button className="p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>

                <Bars3Icon className="text-white h-6 w-6"/>

              </button>
            )}
          </div>
        </div>
      </div>
            
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (

        <div className="fixed right-0 bottom-0 z-40 h-full w-full bg-black bg-opacity-90" >
          <div className="fixed right-0 bottom-0 h-full w-[300px] sm:w-[400px] bg-white drop-shadow-xl" >
          {/* CLOSE ICON */}
            <div className="flex justify-end p-10  sm:pr-16 ">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="w-6 h-6 text-black-100" />
              </button>
            </div>
          {/* MENU ITEMS */}
              <div className="px-12 sm:px-16 text-black-100 flex flex-col gap-5 text-xl">
                <Link 
                  page='Home' 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link 
                  page='About'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}/>
                <Link 
                  page='Services'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}/>
                <Link 
                  page='Contact'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}/>
              </div>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar