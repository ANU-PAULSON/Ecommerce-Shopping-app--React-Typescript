import React from "react";

import { Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex items-center justify-center mb-[55px] mt-[58px] mx-auto w-[86%]">
          <div className="flex md:flex-col flex-row md:gap-14 items-center justify-between w-full">
            <div className="bg-gray_303 h-[360px] mb-0.5 w-[360px]"></div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="font-dmsans text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                  as="h1"
                  variant="h1"
                >
                  <button>Dealerz.</button>
                </Text>
                <div className="flex sm:flex-1 flex-row gap-4 items-center justify-between w-[26%] sm:w-full">
                  <Text
                    className="bg-deep_orange_A200 flex font-bold font-merriweather h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                    variant="body1"
                  >
                    <button>Yt</button>
                  </Text>
                  <Text
                    className="bg-deep_orange_A200 flex font-bold font-merriweather h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                    variant="body1"
                  >
                    <button>Fb</button>
                  </Text>
                  <Text
                    className="bg-deep_orange_A200 flex font-bold font-merriweather h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                    variant="body1"
                  >
                    <button>Tw</button>
                  </Text>
                  <Text
                    className="bg-deep_orange_A200 flex font-bold font-merriweather h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                    variant="body1"
                  >
                   <button>Ig</button> 
                  </Text>
                </div>
              </div>
              <Text
                className="font-bold font-dmsans mt-[30px] text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                <button>Privacy Policy</button>
              </Text>
              <Text
                className="font-bold font-dmsans mt-5 text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                <button>Terms and Condition</button>
              </Text>
              <Text
                className="font-bold font-dmsans md:ml-[0] ml-[3px] mt-[158px] text-gray_900 text-left tracking-[0.08px] w-auto"
                variant="body1"
              >
                @2020 TanahAir Studio. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
