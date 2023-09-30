import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const DetailsView = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <div className='flex md:w-2/3 '>
            <div className='flex flex-col justify-start'>
                {/* HEADINGS */}
                <motion.div className='' initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} > 
                    {isAboveMediumScreens && (
                    <div className='text-white font-bold text-5xl'>
                        <p>
                        DeltaMax Auto
                        </p>
                    </div>
                    )} 
                    <div className={`flex items-center justify-evenly mx-auto gap-8 w-5/6 relative text-white font-semibold text-2xl`}>
                    <p>
                        Diagnostics
                    </p>
                    <p>
                        Service
                    </p>
                    <p>
                        Repair
                    </p>
                    </div>
                </motion.div>
            
                <motion.div className={`flex items-center justify-between flex-col relative mt-6 mb-8 text-slate-300 font-normal mx-8`} initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}>
                    <p>
                        Driven by excellence,
                    </p>
                    <p>
                        quality service and
                    </p>
                    <p>
                        affordable prices
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div className='flex flex-col mx-auto w-5/6 gap-5' initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}} transition={{delay:0.4, duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} >
                    
                    <ActionButton setSelectedPage={setSelectedPage} gotoPage={SelectedPage.Contact}>
                        Schedule an appointment
                    </ActionButton>

                    <ActionButton setSelectedPage={setSelectedPage} alternateColor={true} gotoPage={SelectedPage.Services} >    
                        <p className='text-sm  text-black500'>
                            Explore Services
                        </p>
                    </ActionButton>

                </motion.div>
            </div>
        </div>
  )
}

export default DetailsView
