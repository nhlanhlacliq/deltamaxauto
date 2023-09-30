import Logo_bmw from "@/assets/Logo_bmw.svg"
import Logo_Jaguar from "@/assets/Logo_Jaguar.svg"
import Logo_landrover from "@/assets/Logo_landrover.svg"
import ActionButton from "@/shared/ActionButton";
import SectionImage from "@/shared/SectionImage";
import SectionLayout from "@/shared/SectionLayout";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const About = ({setSelectedPage}: Props) => {
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam et lobortis erat.
                  Nunc eleifend, ex ac laoreet imperdiet, mi diam efficitur mauris, quis consectetur ipsum leo vel tortor.
                  Donec aliquam, enim ac vehicula rutrum, leo nulla malesuada massa, eu maximus nulla dui a libero.
                  Nulla tortor enim, posuere at dignissim eu, tincidunt nec dolor. 
                  Maecenas mi massa, suscipit vel ante ac, pulvinar commodo massa. 
                  Praesent dictum, metus sed malesuada dapibus, neque erat mollis sem, non sagittis mauris est ac leo.
                  Sed ac dignissim lacus. Aliquam eu diam vitae lorem porttitor cursus sed sit amet urna.
                  Aliquam dignissim arcu et lorem iaculis dictum.
                  </p>
                  <br />
                  <p>
                  Pellentesque gravida nulla id mi lobortis mollis.
                  Maecenas convallis ante vitae velit gravida rhoncus.
                  Nam et nisi dapibus tortor finibus laoreet. Proin mollis est ac mauris faucibus, id semper eros pulvinar.
                  Sed et ipsum lacus. Nullam vel mattis enim, vel volutpat lectus. Integer maximus nibh non nunc suscipit, vitae vestibulum est euismod.
                  </p>
                </div>

                {/* Actions */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: false, amount:0.5}} transition={{delay:0, duration: 0.25}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}>
                  <ActionButton setSelectedPage={setSelectedPage} gotoPage={SelectedPage.Services} >
                    Explore Services
                  </ActionButton>
                </motion.div>
              </div>
              
              {/* Right Side */}
              <SectionImage image='bg-about' />
            </div>

        </motion.div>
    </SectionLayout>
  )
}

export default About