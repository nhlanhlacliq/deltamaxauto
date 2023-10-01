import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"
import arrow from "@/assets/Menu_arrow.svg";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage(value: SelectedPage): void;
  
  isMenuToggled: boolean;
  setIsMenuToggled(value: boolean): void;
  isAboveMediumScreens: boolean;
}

const Link = ({page, selectedPage, setSelectedPage, isMenuToggled, setIsMenuToggled, isAboveMediumScreens }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;  
  const borderBottom = isAboveMediumScreens ? "" : "border-b-2 border-black-200 pb-4"
  
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition suration-500 hover:text-primary-300`}  
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(!isMenuToggled);
      }}
    >
      <div className={`flex justify-between ${borderBottom} `}>
        {page}
        
        { !isAboveMediumScreens &&
          (lowerCasePage !== selectedPage) && 
            <div className="my-auto">
              <img src={arrow} alt="menu-arrow" />
            </div>  
        }
      </div>
    </AnchorLink>
  )
}

export default Link