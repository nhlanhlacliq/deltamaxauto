import Logo from "@/assets/Logo.svg";
import facebook from "@/assets/Icon_facebook.png";

const Footer = () => {
  return (
    <footer className="bg-black py-8 w-full" >
      <div className="w-5/6 mx-auto flex flex-col sm:flex-row py-5 justify-between">
        
        <div className="flex flex-row sm:basis-2/3">

          <div className="basis-1/2">
            <div className="">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
          </div>

          <div className="my-auto px-0 sm:px-4 basis-1/2 text-right sm:text-center">
            <p className="text-sm md:text-md text-white font-normal">
              Driving Excellence, One Repair at a Time
            </p>
          </div>

        </div>
        
        <div className="flex justify-end sm:my-auto my-5">
          <a href="https://www.facebook.com/people/DeltaMax-Auto-SA/100068906806594/" target="_blank">
            <img src={facebook} alt="facebook-logo" className="h-8" />
          </a>
        </div>
      </div>

      <div className="">
        <p className="text-sm md:text-md text-center text-gray-600 font-normal">
          © DeltaMaxAuto All Rights Reserved
        </p>
      </div>
      
      <div>
      </div>
    </footer>
  )
}

export default Footer