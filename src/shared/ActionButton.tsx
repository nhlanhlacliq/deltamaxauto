import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
    alternateColor?: boolean; 
    gotoPage: SelectedPage;
}


const ActionButton = ({ children, setSelectedPage, alternateColor = false, gotoPage }: Props) => {
  return (
      <AnchorLink
          className={` ${alternateColor ? ' bg-black outline outline-1 outline-gray-600': ' bg-primary-500 '} rounded-sm px-10 py-2 hover:bg-primary-300 text-white hover:text-white text-center inline-block w-full`}
          onClick={() => setSelectedPage(gotoPage)}
          href={`#${gotoPage}`}
          >
          {children}
      </AnchorLink>
  )
}

export default ActionButton