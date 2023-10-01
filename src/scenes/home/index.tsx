import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
// import HomePageImage from '@/assets/Home.png';
// import RoverImage from '@/assets/rover.jpeg';
import { motion } from 'framer-motion';
import DetailsView from './components/DetailsView';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="home"
    // className='gap-16 bg-black py-10 md:h-full md:pb-0'>
    className='gap-16 bg-black py-0 sm:py-10 h-full md:pb-0'>
      {/* IMAGE and MAIN HEADER */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>

        {/* BACKGROUND IMAGE */} 
        {/* <div className='h-screen bg-rover bg-cover bg-no-repeat bg-center bg-fixed relative flex flex-col justify-center items-center '> */}
        <div className='h-screen bg-rover bg-cover bg-no-repeat bg-center relative flex flex-col justify-center items-center '>
          {
            isAboveMediumScreens 
              ? ( <div className='absolute left-0 w-4/6 h-full py-[20%] pl-[15%] bg-gradient-to-r from-black from-20% to-transparent '>
                    <DetailsView setSelectedPage={setSelectedPage} />
                  </div>
                ) 
              
              : ( <div className='absolute bottom-0 w-full h-4/6 flex justify-center items-center bg-gradient-to-b from-transparent from-25% via-black to-black to-40% '> 
                    <DetailsView setSelectedPage={setSelectedPage} />
                  </div>
                )
          }
            
            
            

        </div>



        
      
      </motion.div>


    </section>
  )
}

export default Home