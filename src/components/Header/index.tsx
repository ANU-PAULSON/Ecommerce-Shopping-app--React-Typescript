import React from "react";
import { useNavigate } from 'react-router-dom';
import { Text, Img, Input } from "components";
import { CloseSVG } from "../../assets/images";
import {Link} from 'react-router-dom';
type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const [inputvalue, setInputvalue] = React.useState<string>("");
  const navigate = useNavigate();
  const goToShop = () => {
  
    // This will navigate to second component
    navigate('/shop'); 
  };
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-7 items-center justify-center w-full">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[19px] w-full">
            <Text
              className="font-dmsans md:ml-[0] ml-[74px] md:mt-0 mt-[3px] text-deep_orange_A200 text-left tracking-[0.20px] w-auto"
              as="h4"
              variant="h4"
            >
              <button>Dealerz.</button>
            </Text>
            <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[762px] md:mt-0 mt-[17px] w-[9%] md:w-full">
              <Img src="images/img_call.svg" className="h-6 w-6" alt="call" />
              <Text
                className="font-dmsans font-medium text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                <button>Call Center</button>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-2 items-start justify-center ml-8 md:ml-[0] md:mt-0 mt-[17px] w-[13%] md:w-full">
              <Img src="images/img_music.svg" className="h-6 w-6" alt="music" />
              <Text
                className="font-dmsans font-medium mt-0.5 text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                <button>Shipping & Returns</button>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[92px] items-center justify-start w-[87%] md:w-full">
            <div className="flex flex-row gap-8 items-start justify-between w-[22%] md:w-full">
              <Text
                className="font-dmsans font-medium text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                
                <button onClick={goToShop}>Shop </button>
              </Text>
              <Text
                className="font-dmsans font-medium text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                <button>Promo</button>
              </Text>
              <Text
                className="font-dmsans font-medium text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
               <button>About</button> 
              </Text>
              <Text
                className="font-dmsans font-medium text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                <button>Blog</button>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[72%] md:w-full">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="bg-white_A700 flex pl-[30px] pr-5 py-[15px] rounded w-[65%] md:w-full"
                className="font-dmsans font-normal not-italic p-0 placeholder:text-bluegray_300 sm:pl-5 text-base text-bluegray_300 text-left tracking-[0.08px] w-full"
                name="searchbar"
                placeholder="Search what you need"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-auto mb-px cursor-pointer ml-[35px]"
                      onClick={() => setInputvalue("")}
                      fillColor="#9a9ab0"
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                    
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="mt-auto mb-px cursor-pointer ml-[35px]"
                      alt="search"
                    />
                  )
                  
                }
              ></Input>
              <div className="flex flex-row items-start justify-between w-[29%] md:w-full">
                <button>
                <Img
                  src="images/img_favorite_black_900.svg"
                  className="h-8 mt-3 w-8"
                  alt="favorite"
                />
                </button>
                <div className="h-11 md:h-8 relative w-[19%]">
                  <Link to='/Cart'>
                  <Img
                    src="images/img_cart_black_900.svg"
                    className="absolute bottom-[0] h-8 left-[0] w-8"
                    alt="cart"
                  />
                  </Link>
                  <Text
                    className="absolute bg-deep_orange_A200 flex font-dmsans font-medium h-6 items-center justify-center right-[0] rounded-[50%] text-center text-white_A700 top-[0] tracking-[0.08px] w-6"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <button>
                <Img
                  src="images/img_user_black_900.svg"
                  className="h-8 mt-3 w-8"
                  alt="user"
                />
                </button>
                <button>
                <Img
                  src="images/img_notification_black_900.svg"
                  className="h-8 mt-3 w-8"
                  alt="notification"
                />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
