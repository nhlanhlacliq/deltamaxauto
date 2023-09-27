type Props = {
    image: string 
}

const SectionImage = ({image}: Props) => {
  return (
    <div className="md:w-[50%] max-h-full overflow-y-hidden">
        <img className="md:h-[100%] max-h-[420px] md:max-h-[100%] w-full xl:max-h-[631px] object-cover " src={image} alt="section-image"/>
    </div>
//     <div className="flex md:w-[50%] max-h-[400px] md:max-h-[600px] ">
//     {/* <img className="max-h-[500px] md:max-h-[100%]   md:w-[100%]   object-cover" src={engine} alt="service-image"/> */}
//     <img className="md:h-[100%] md:w-[100%]  object-cover" src={engine} alt="service-image"/>
//   </div>
  )
}

export default SectionImage