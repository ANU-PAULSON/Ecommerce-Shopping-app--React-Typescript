import React from "react";

import Header from "components/Header";
import { Text, Img, Button } from "components";
import Footer from "components/Footer";

const GalleryPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white_A700 flex items-center justify-start mt-7 w-full">
          <div
            className="bg-cover bg-no-repeat flex h-[512px] items-end justify-start p-[100px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group3.svg')" }}
          >
            <div className="flex flex-col gap-8 items-center justify-start mb-[51px] mt-[35px] w-auto md:w-full">
              <Text
                className="leading-[120.00%] text-gray_900 text-left tracking-[0.19px]"
                as="h1"
                variant="h1"
              >
                <>
                  Our Gallery, <br />
                  Your Dreams!
                </>
              </Text>
              <Text
                className="font-normal leading-[125.00%] not-italic text-gray_800 text-left tracking-[0.08px]"
                variant="body1"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start max-w-[1232px] mt-[121px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-center text-gray_900 tracking-[0.24px] w-auto"
              as="h3"
              variant="h3"
            >
              Our Gallery
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-12 w-[96%] md:w-full">
              <Text
                className="mb-0.5 text-deep_orange_A200 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                All Products
              </Text>
              <Text
                className="mb-0.5 text-bluegray_300 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                Coats & Jacket
              </Text>
              <Text
                className="mb-0.5 text-bluegray_300 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                Dressed
              </Text>
              <Text
                className="md:mt-0 mt-0.5 text-bluegray_300 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                Playsuit
              </Text>
              <Text
                className="mb-0.5 text-bluegray_300 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                Short
              </Text>
              <Text
                className="mb-0.5 text-bluegray_300 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                Skirt
              </Text>
              <Text
                className="mb-0.5 text-bluegray_300 text-left tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                T-Shirt
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start mt-[68px] w-full">
              <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-10 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[366px] text-bluegray_300 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Category Dress
                  </Text>
                  <Text
                    className="mt-3.5 text-gray_900 text-left tracking-[0.24px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Tropical Suit
                  </Text>
                  <div className="bg-deep_orange_A200 flex h-10 items-center justify-start mb-[29px] mt-[25px] p-2 rounded-[50%] w-10">
                    <div className="flex h-6 items-center justify-start w-6">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-10 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[366px] text-bluegray_300 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Category Dress
                  </Text>
                  <Text
                    className="mt-3.5 text-gray_900 text-left tracking-[0.24px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Tropical Suit
                  </Text>
                  <div className="bg-deep_orange_A200 flex h-10 items-center justify-start mb-[29px] mt-[25px] p-2 rounded-[50%] w-10">
                    <div className="flex h-6 items-center justify-start w-6">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-10 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[366px] text-bluegray_300 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Category Dress
                  </Text>
                  <Text
                    className="mt-3.5 text-gray_900 text-left tracking-[0.24px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Tropical Suit
                  </Text>
                  <div className="bg-deep_orange_A200 flex h-10 items-center justify-start mb-[29px] mt-[25px] p-2 rounded-[50%] w-10">
                    <div className="flex h-6 items-center justify-start w-6">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-10 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[366px] text-bluegray_300 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Category Dress
                  </Text>
                  <Text
                    className="mt-3.5 text-gray_900 text-left tracking-[0.24px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Tropical Suit
                  </Text>
                  <div className="bg-deep_orange_A200 flex h-10 items-center justify-start mb-[29px] mt-[25px] p-2 rounded-[50%] w-10">
                    <div className="flex h-6 items-center justify-start w-6">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-10 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[366px] text-bluegray_300 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Category Dress
                  </Text>
                  <Text
                    className="mt-3.5 text-gray_900 text-left tracking-[0.24px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Tropical Suit
                  </Text>
                  <div className="bg-deep_orange_A200 flex h-10 items-center justify-start mb-[29px] mt-[25px] p-2 rounded-[50%] w-10">
                    <div className="flex h-6 items-center justify-start w-6">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-10 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[366px] text-bluegray_300 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Category Dress
                  </Text>
                  <Text
                    className="mt-3.5 text-gray_900 text-left tracking-[0.24px] w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Tropical Suit
                  </Text>
                  <div className="bg-deep_orange_A200 flex h-10 items-center justify-start mb-[29px] mt-[25px] p-2 rounded-[50%] w-10">
                    <div className="flex h-6 items-center justify-start w-6">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_orange_A200 cursor-pointer font-bold h-14 min-w-[156px] sm:px-5 px-6 py-[18px] rounded-lg text-base text-center text-white_A700 tracking-[0.08px] w-auto">
                Find out More
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[436px] md:h-[556px] max-w-[1232px] mt-[120px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Button className="bg-white_A700 flex h-14 items-center justify-center p-4 rounded-[50%] w-14">
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="h-[22px]"
                  alt="arrowleft"
                />
              </Button>
              <Button className="bg-white_A700 flex h-14 items-center justify-center p-4 rounded-[50%] w-14">
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="h-[22px]"
                  alt="arrowright"
                />
              </Button>
            </div>
          </div>
          <div className="absolute bg-white_A700 flex h-full inset-[0] items-start justify-center m-auto p-[53px] md:px-10 sm:px-5 w-[95%]">
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start md:ml-[0] ml-[19px] mr-auto mt-2.5 w-[86%] md:w-full">
              <div className="bg-gray_303 h-80 rounded-lg w-80"></div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="text-deep_orange_A200 text-left tracking-[0.24px] w-auto"
                  as="h3"
                  variant="h3"
                >
                  Good Seller!
                </Text>
                <Text
                  className="font-normal leading-[125.00%] mt-9 not-italic text-bluegray_300 text-left tracking-[0.08px]"
                  variant="body1"
                >
                  <>
                    I am very happy with the services provided, it is very
                    helpful, starting
                    <br />
                    from the insight that the company gave from the start that I
                    did not
                    <br />
                    understand what it was so I got knowledge and made my
                    website
                    <br />
                    look better
                  </>
                </Text>
                <Text
                  className="mt-[42px] text-gray_900 text-left tracking-[0.12px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Anna Saraspova
                </Text>
                <Text
                  className="font-medium mt-3 text-gray_800 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  Your Beloved Buyer
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col items-center justify-end max-w-[1230px] mt-[120px] mx-auto p-20 md:px-5 w-full">
          <Text
            className="mt-2.5 text-center text-gray_900 tracking-[0.24px] w-auto"
            as="h3"
            variant="h3"
          >
            Join Our News Letters
          </Text>
          <Text
            className="font-normal leading-[125.00%] mt-[30px] not-italic text-bluegray_300 text-center tracking-[0.08px] w-[57%] sm:w-full"
            variant="body1"
          >
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster{" "}
          </Text>
          <div className="bg-gray_100 flex flex-row sm:gap-10 items-center justify-between mt-10 p-2 rounded-lg w-[77%] md:w-full">
            <Text
              className="font-normal ml-6 not-italic text-bluegray_300 text-left tracking-[0.08px] w-auto"
              variant="body1"
            >
              Insert your mail here
            </Text>
            <div className="bg-deep_orange_A200 flex h-12 items-center justify-start p-3 rounded-lg w-12">
              <div className="flex h-6 items-center justify-start w-6">
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-6 w-6"
                  alt="arrowleft_One"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white_A700 flex items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default GalleryPage;
