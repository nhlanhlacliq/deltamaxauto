import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import engine from '@/assets/engine.jpeg';
import SectionImage from '@/shared/SectionImage';
// import gear from '@/assets/Icon_gear.svg';
// import laptop from '@/assets/Icon_laptop.svg';
// import tools from '@/assets/Icon_tools.svg';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({setSelectedPage}: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 lg:w-4/6 py-20">
        {/* Highlights where we are on navigation */}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
            
        <div className="flex flex-col md:flex-row mt-20 gap-20 my-auto" >
              {/* Left Side */}
              <div className="flex flex-col md:w-[50%] gap-10">
                {/* Header */}
                <div className=" font-semibold text-2xl">
                  <p>Comprehensive Auto Repairs</p>
                </div>
                
                {/* Services */}
                <div className="flex flex-col justify-between gap-5">
                  {/* Logos
                  <div className="flex justify-between items-center gap-2">
                    <div>
                      <img src={laptop} alt='logo' />
                    </div>
                    <div>
                      <img src={gear} alt='logo' />
                    </div>
                    <div>
                      <img src={tools} alt='logo' />
                    </div>
                  </div> */}

                  <div>
                    {/* Header */}
                    <p className='font-semibold text-xl'>
                        Diagnostics
                    </p>
                    {/* Text */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lobortis erat. Nunc eleifend, ex ac laoreet imperdiet, mi diam efficitur mauris, quis consectetur ipsum leo vel tortor. Donec aliquam, enim ac vehicula rutrum, leo nulla malesuada massa, eu maximus nulla dui a libero. Nulla tortor enim, posuere at dignissim eu, tincidunt nec dolor.
                    </p>
                  </div>

                  <div>
                    {/* Header */}
                    <p className='font-semibold text-xl'>
                        Maintenance
                    </p>
                    {/* Text */}
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lobortis erat. Nunc eleifend, ex ac laoreet imperdiet, mi diam efficitur mauris, quis consectetur ipsum leo vel tortor. Donec aliquam, enim ac vehicula rutrum, leo nulla malesuada massa, eu maximus nulla dui a libero. Nulla tortor enim, posuere at dignissim eu, tincidunt nec dolor.
                    </p>
                  </div>

                  <div>
                    {/* Header */}
                    <p className='font-semibold text-xl'>
                        Repair
                    </p>
                    {/* Text */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lobortis erat. Nunc eleifend, ex ac laoreet imperdiet, mi diam efficitur mauris, quis consectetur ipsum leo vel tortor. Donec aliquam, enim ac vehicula rutrum, leo nulla malesuada massa, eu maximus nulla dui a libero. Nulla tortor enim, posuere at dignissim eu, tincidunt nec dolor.
                    </p>
                  </div>
                  
                </div>

                {/* Actions */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: false, amount:0.5}} transition={{delay:0, duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}>
                  <ActionButton setSelectedPage={setSelectedPage} gotoPage={SelectedPage.Contact} >
                    Contact us
                  </ActionButton>
                </motion.div>
              </div>
              
              {/* Right Side */}
              <SectionImage image={engine} />
            
            </div>

        </motion.div>
    </section>
  )
}

export default Services