import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion"
import SectionImage from "@/shared/SectionImage";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({setSelectedPage}: Props) => {
  return (
    <section id="contact" className="mx-auto min-h-full w-5/6 lg:w-4/6 py-20">
        {/* Highlights where we are on navigation */}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            
        <div className="flex flex-col md:flex-row mt-20 gap-20 my-auto" >
              {/* Left Side */}
              <div className="flex flex-col w-[50%] gap-8">
                {/* Header */}
                <div className=" font-semibold text-2xl">
                  <p>Contact us</p>
                </div>
                
                {/* Form */}
                <div className="flex flex-col justify-between gap-5">
                  <form action="">
                    <input className=""
                    type="text" value="name" placeholder="Name" />
                    <input className=""
                    type="text" value="contact" placeholder="Contact" />
                    <textarea name="message" placeholder="Message" id="message"></textarea>
                  </form>
                </div>

                {/* Actions */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: false, amount:0.5}} transition={{delay:0, duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} >
                  <ActionButton setSelectedPage={setSelectedPage} gotoPage={SelectedPage.Home} >
                    Send
                  </ActionButton>
                </motion.div>

                {/* Details */}
                <div className="flex justify-between">
                    <div className="flex flex-col gap-6 underline">
                        {/* Phone */}
                        <div>
                            060 841 8119
                        </div>
                        {/* Whatsapp */}
                        <div>
                            060 841 8119
                        </div>
                    </div>
                    {/* Location */}
                    <div className=" underline">
                        <p>
                            Unit D14/15 <br/>
                            Cnr, Brand Rd & Swart Dr <br/>
                            President Park Ah <br/>
                            Midrand <br/>

                        </p>
                    </div>
                </div>
              </div>
              
              {/* Right Side */}
              <SectionImage image='bg-contact' />
            
            </div>

        </motion.div>
    </section>
  )
}

export default Contact