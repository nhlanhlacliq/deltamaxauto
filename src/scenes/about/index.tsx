import Logo_bmw from "@/assets/Logo_bmw.svg"
import Logo_Jaguar from "@/assets/Logo_Jaguar.svg"
import Logo_landrover from "@/assets/Logo_landrover.svg"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import SectionImage from "@/shared/SectionImage";
import SectionLayout from "@/shared/SectionLayout";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const About = ({setSelectedPage}: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

  return (
    <SectionLayout id="about">
        {/* Highlights where we are on navigation */}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>

            <div className="flex flex-col md:flex-row mt-14 sm:mt-20  gap-5 sm:gap-20 my-auto" >
              
              {/* Left Side */}
              <div className="flex flex-col md:w-[50%] gap-4 sm:gap-8">
                {/* Header */}
                <div className=" font-semibold text-2xl">
                  <p>Dealership level service</p>
                </div>
                
                {/* Logos */}
                <div className="flex justify-between items-center gap-2">
                  <div className="">
                    <img src={Logo_Jaguar} alt='logo' />
                  </div>
                  <div>
                    <img src={Logo_bmw} alt='logo' />
                  </div>
                  <div>
                    <img src={Logo_landrover} alt='logo' />
                  </div>
                </div>
                
                {/* Text */}
                <div className="text-sm sm:text-base leading-4 sm:leading-normal text-gray-800">
                  <p>
                  At DeltaMax Auto, we're passionate about delivering exceptional service. 
                  Our journey began as Jaguar Landrover specialists with a commitment to excellence. 
                  With guidance from JLR's Global Technical Reference Manual, we're evolving 
                  into a modern automotive repair center that offers a wide range of services.
                  </p>
                  <br />
                  <p>
                  Our team of skilled technicians specializes in engine and transmission repairs, 
                  brake and rotor replacements, electrical diagnosis, and general car maintenance. 
                  We're dedicated to maintaining dealership-level standards while making our services affordable. 
                  We're more than just an auto shop - we're a locally-owned business deeply connected to our community.
                  </p>
                  <br />
                  <p>
                  We prioritize customer satisfaction and community involvement, 
                  actively seeking opportunities for sponsorships and charitable contributions. 
                  </p>
                </div>

                {!isAboveSmallScreens && 
                  <SectionImage image='bg-about' />
                }


                {/* Actions */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: false, amount:0.5}} transition={{delay:0, duration: 0.25}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}>
                  <ActionButton setSelectedPage={setSelectedPage} gotoPage={SelectedPage.Services} alternateColor={true} >
                    Explore Services
                  </ActionButton>
                </motion.div>
              </div>
              
              {/* Right Side */}
              {isAboveSmallScreens &&
                <SectionImage image='bg-about' />
              }
            </div>

        </motion.div>
    </SectionLayout>
  )
}

export default About