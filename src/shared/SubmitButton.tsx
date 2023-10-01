
type Props = {
    children: React.ReactNode;
    alternateColor?: boolean; 
}


const SubmitButton = ({ children, 
    alternateColor = false, 
    }: Props) => {
    return (
        <button type="submit" 
            className={` ${alternateColor ? ' bg-black outline outline-1 outline-gray-600': ' bg-primary-500 '} px-10 py-2 hover:bg-primary-300 text-white hover:text-white text-center inline-block w-full`}
        >
            {children}
        </button>
  )
}

export default SubmitButton