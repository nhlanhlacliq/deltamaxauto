import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion"
import SectionImage from "@/shared/SectionImage";
import whatsapp from "@/assets/whatsapp.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import SectionLayout from "@/shared/SectionLayout";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const onSubmit =async (e: any) => {
    // const isValid = await trigger()
    console.log(e);
    
  }

  return (
    <SectionLayout id="contact">
        {/* Highlights where we are on navigation */}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            
        <div className="flex flex-col md:flex-row mt-0 sm:mt-20 gap-5 sm:gap-20 my-auto" >
              {/* Left Side */}
              <div className="flex flex-col md:w-[50%] max-w-[600px] gap-5 sm:gap-8">
                {/* Header */}
                <div className=" font-semibold text-2xl">
                  <p>Contact us</p>
                </div>
                
                {/* Form */}
                <div className="flex flex-col justify-between gap-2 sm:gap-6">
                  <form target="_blank" onSubmit={onSubmit} action="">
                    <div className="flex flex-col gap-5 sm:gap-7">
                      <div className="flex flex-col gap-2 sm:gap-7" >
                        <div className="flex flex-col sm:gap-1">
                          <label htmlFor="name">Name</label>
                          <input className="h-8 border rounded-sm border-slate-100 "
                          type="text" value="" />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                          <label htmlFor="name">Contact</label>
                          <input className="h-8 border rounded-sm border-slate-100 "
                          type="text" value=""/>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="name">Message</label>
                          <textarea className="h-16 border rounded-sm border-slate-100 " name="message" id="message"></textarea>
                        </div>
                      </div>
                    
                      {/* Actions */}
                      <motion.div initial="hidden" whileInView="visible" viewport={{once: false, amount:0.5}} transition={{delay:0, duration: 0.25}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} >
                        <ActionButton setSelectedPage={setSelectedPage} gotoPage={SelectedPage.Home} >
                          Send
                        </ActionButton>
                      </motion.div>
                    </div>
                  </form>
                </div>

                {/* Details */}
                <div className="flex justify-between md:flex-col md:gap-6">
                    <div className="flex flex-col gap-6 underline">
                        {/* Phone */}
                        <div className="flex gap-2 sm:gap-6">
                          <div className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                          </div>

                          <div>
                            <p>
                              060 841 8119
                            </p>
                          </div>

                        </div>
                        {/* Whatsapp */}
                        <div className="flex gap-2 sm:gap-6">
                          {!isAboveMediumScreens ? 
                            <>
                              <div className="mt-1">
                                <img src={whatsapp} alt="whatsapp-logo" />
                              </div>
                              <div>
                                <p>
                                  060 841 8119
                                </p>
                              </div>
                            </>
                          :
                          <>
                            <div className="mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                              </svg>
                            </div>
                            <div>
                              <p>
                                info@deltamaxauto.com
                              </p>
                            </div>
                          </>}
                        </div>
                    </div>
                    {/* Location */}
                    <div  className="flex gap-2 sm:gap-6" >
                      <div className="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>

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
              </div>
              
              {/* Right Side */}
              {isAboveSmallScreens && 
                <SectionImage image='bg-contact' />
              }
            
            </div>

        </motion.div>
    </SectionLayout>
  )
}

export default Contact