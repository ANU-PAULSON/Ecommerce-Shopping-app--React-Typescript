import React from "react";

import Header from "components/Header";
import { Text, Button, Img, List, PagerIndicator } from "components";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white_A700 flex items-center justify-start mt-7 w-full">
          <div
            className="bg-cover bg-no-repeat flex h-[640px] items-end justify-start p-[100px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group3.svg')" }}
          >
            <div className="flex flex-col items-start justify-start mb-[67px] mt-[35px] w-1/2 md:w-full">
              <Text
                className="leading-[120.00%] text-gray_900 text-left tracking-[0.19px] w-[97%] sm:w-full"
                as="h1"
                variant="h1"
              >
                Your Premium Sound, Unplugged!
              </Text>
              <Text
                className="font-normal leading-[125.00%] mt-8 not-italic text-gray_800 text-left tracking-[0.08px]"
                variant="body1"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </>
              </Text>
              <Button className="bg-deep_orange_A200 cursor-pointer font-bold h-14 min-w-[156px] mt-14 sm:px-5 px-6 py-[18px] rounded-lg text-base text-center text-white_A700 tracking-[0.08px] w-auto">
                Find out More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start max-w-[1232px] mt-[116px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-gray_900 text-left tracking-[0.24px] w-auto"
              as="h3"
              variant="h3"
            >
              Our Premium Collection
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[52px] w-[96%] md:w-full">
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
        <div className="md:h-[1120px] h-[960px] mt-40 overflow-auto md:px-5 relative w-full">
          <div className="absolute bg-white_A700 flex h-full inset-[0] items-center justify-center m-auto p-11 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-[65px] w-[92%] md:w-full">
              <Text
                className="text-center text-gray_900 tracking-[0.24px] w-auto"
                as="h3"
                variant="h3"
              >
                Top Items
              </Text>
              <Text
                className="font-normal leading-[125.00%] mt-[25px] not-italic text-center text-gray_800 tracking-[0.08px]"
                variant="body1"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br />
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam.
                </>
              </Text>
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[70px] w-full"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[308px] h-[451px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{ backgroundImage: "url('images/img_item.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-end rounded-md w-auto md:w-full"
                    style={{ backgroundImage: "url('images/img_misctag.svg')" }}
                  >
                    <Text
                      className="font-medium text-center text-deep_orange_A200 tracking-[0.11px] w-auto"
                      variant="body2"
                    >
                      SALE
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[18px] w-[51%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Tracksuit Hyped
                    </Text>
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-1 w-[46%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        Apple Cherry
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <Text
                          className="font-medium text-deep_orange_A200 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          $384
                        </Text>
                        <Text
                          className="font-medium text-bluegray_300 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          $454
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[308px] h-[451px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{ backgroundImage: "url('images/img_item.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-end rounded-md w-auto md:w-full"
                    style={{ backgroundImage: "url('images/img_misctag.svg')" }}
                  >
                    <Text
                      className="font-medium text-center text-deep_orange_A200 tracking-[0.11px] w-auto"
                      variant="body2"
                    >
                      SALE
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[18px] w-[51%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Tracksuit Hyped
                    </Text>
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-1 w-[46%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        Apple Cherry
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <Text
                          className="font-medium text-deep_orange_A200 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          $384
                        </Text>
                        <Text
                          className="font-medium text-bluegray_300 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          $454
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[308px] h-[451px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{ backgroundImage: "url('images/img_item.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-end rounded-md w-auto md:w-full"
                    style={{ backgroundImage: "url('images/img_misctag.svg')" }}
                  >
                    <Text
                      className="font-medium text-center text-deep_orange_A200 tracking-[0.11px] w-auto"
                      variant="body2"
                    >
                      SALE
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[18px] w-[51%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Tracksuit Hyped
                    </Text>
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-1 w-[46%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        Apple Cherry
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <Text
                          className="font-medium text-deep_orange_A200 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          $384
                        </Text>
                        <Text
                          className="font-medium text-bluegray_300 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          $454
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <PagerIndicator
                className="flex h-4 justify-center mt-[141px] w-44"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-lime_900 w-4"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-gray_300 w-4"
                selectedWrapperCss="inline-block md:ml-[0] mx-[12.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[12.00px] sm:ml-[0]"
              />
            </div>
          </div>
          <div className="absolute bottom-[21%] overflow-x-auto right-[0] w-[28%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[306px] h-[451px] items-center justify-start p-2.5 rounded-md w-full"
              style={{ backgroundImage: "url('images/img_item.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex h-[22px] items-center justify-end rounded-md w-auto md:w-full"
                style={{ backgroundImage: "url('images/img_misctag.svg')" }}
              >
                <Text
                  className="font-medium text-center text-deep_orange_A200 tracking-[0.11px] w-auto"
                  variant="body2"
                >
                  SALE
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mb-[19px] w-[69%] md:w-full">
                <Text
                  className="text-center text-gray_900 tracking-[0.12px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Tracksuit Hyped
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                  variant="body2"
                >
                  Apple Cherry
                </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-[34%] md:w-full">
                  <Text
                    className="font-medium text-deep_orange_A200 text-right tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    $384
                  </Text>
                  <Text
                    className="font-medium text-bluegray_300 text-right tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    $454
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[21%] left-[0] overflow-x-auto w-[28%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[306px] h-[451px] items-center justify-start p-2.5 rounded-md w-full"
              style={{ backgroundImage: "url('images/img_item.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex h-[22px] items-center justify-end rounded-md w-auto md:w-full"
                style={{ backgroundImage: "url('images/img_misctag.svg')" }}
              >
                <Text
                  className="font-medium text-center text-deep_orange_A200 tracking-[0.11px] w-auto"
                  variant="body2"
                >
                  SALE
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mb-[19px] w-[69%] md:w-full">
                <Text
                  className="text-center text-gray_900 tracking-[0.12px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Tracksuit Hyped
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                  variant="body2"
                >
                  Apple Cherry
                </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-[34%] md:w-full">
                  <Text
                    className="font-medium text-deep_orange_A200 text-right tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    $384
                  </Text>
                  <Text
                    className="font-medium text-bluegray_300 text-right tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    $454
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-40 md:px-10 sm:px-5 px-[104px] w-full">
          <div className="flex items-center justify-start w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-full">
              <div className="bg-gray_303 h-[720px] rounded-lg w-[53%]"></div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[84px] w-auto md:w-full">
                <Text
                  className="leading-[120.00%] text-gray_900 text-left tracking-[0.24px]"
                  as="h3"
                  variant="h3"
                >
                  <>
                    Story about
                    <br />
                    Our Brand
                  </>
                </Text>
                <Text
                  className="font-normal leading-[125.00%] ml-0.5 md:ml-[0] mt-8 not-italic text-bluegray_300 text-left tracking-[0.08px] w-full"
                  variant="body1"
                >
                  Develop a website by finding a product identity that has value
                  and branding to become a characteristic of a company. We will
                  also facilitate the business marketing of these products with
                  our SEO experts so that they become a ready-to-use website and
                  help sell a product from the company Develop a website by
                  finding a product identity that has value and branding to
                  become a characteristic of a company. We will also facilitate
                  the business marketing of these products with our SEO experts
                  so that they become a ready-to-use website and help sell a
                  product from the company
                </Text>
                <Text
                  className="font-bold mt-14 text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  Read full story
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start max-w-[1232px] mt-[196px] mx-auto md:px-5 w-full">
          <Text
            className="text-center text-gray_900 tracking-[0.24px] w-auto"
            as="h3"
            variant="h3"
          >
            Our Achievement
          </Text>
          <Img
            src="images/img_brandclientlogo.svg"
            className="h-[104px] w-auto"
            alt="brandclientlogo"
          />
        </div>
        <div className="h-[436px] md:h-[596px] max-w-[1232px] mt-40 mx-auto md:px-5 relative w-full">
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
        <div className="flex items-center justify-start max-w-[1232px] mt-[235px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-14 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="leading-[120.00%] text-gray_901 text-left tracking-[0.24px] w-auto"
                as="h3"
                variant="h3"
              >
                Get Better Insights from Our Articles
              </Text>
              <Text
                className="sm:mt-0 mt-[78px] text-deep_orange_A200 text-right tracking-[0.12px] w-auto"
                as="h6"
                variant="h6"
              >
                See more
              </Text>
            </div>
            <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-gray_303 h-[416px] w-full"></div>
                <Text
                  className="mt-6 text-gray_900 text-left tracking-[0.15px] w-auto"
                  as="h5"
                  variant="h5"
                >
                  Best Summer Outfit Style
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start mt-2.5 w-[27%] md:w-full">
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    14 Feb
                  </Text>
                  <div className="bg-gray_800 h-1 my-[9px] rounded-[50%] w-1"></div>
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Livina Style
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[125.00%] mt-[13px] not-italic text-bluegray_300 text-left tracking-[0.08px] w-full"
                  variant="body1"
                >
                  <>
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s.
                  </>
                </Text>
                <div className="flex items-center justify-start mt-8 w-auto md:w-full">
                  <Text
                    className="font-bold text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Explore More
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-gray_303 h-[416px] w-full"></div>
                <Text
                  className="mt-6 text-gray_900 text-left tracking-[0.15px] w-auto"
                  as="h5"
                  variant="h5"
                >
                  Best Summer Outfit Style
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start mt-2.5 w-[27%] md:w-full">
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    14 Feb
                  </Text>
                  <div className="bg-gray_800 h-1 my-[9px] rounded-[50%] w-1"></div>
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Livina Style
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[125.00%] mt-[13px] not-italic text-bluegray_300 text-left tracking-[0.08px] w-full"
                  variant="body1"
                >
                  <>
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s.
                  </>
                </Text>
                <div className="flex items-center justify-start mt-8 w-auto md:w-full">
                  <Text
                    className="font-bold text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Explore More
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-gray_303 h-[416px] w-full"></div>
                <Text
                  className="mt-6 text-gray_900 text-left tracking-[0.15px] w-auto"
                  as="h5"
                  variant="h5"
                >
                  Best Summer Outfit Style
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start mt-2.5 w-[27%] md:w-full">
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    14 Feb
                  </Text>
                  <div className="bg-gray_800 h-1 my-[9px] rounded-[50%] w-1"></div>
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Livina Style
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[125.00%] mt-[13px] not-italic text-bluegray_300 text-left tracking-[0.08px] w-full"
                  variant="body1"
                >
                  <>
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s.
                  </>
                </Text>
                <div className="flex items-center justify-start mt-8 w-auto md:w-full">
                  <Text
                    className="font-bold text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Explore More
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-gray_303 h-[416px] w-full"></div>
                <Text
                  className="mt-6 text-gray_900 text-left tracking-[0.15px] w-auto"
                  as="h5"
                  variant="h5"
                >
                  Best Summer Outfit Style
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start mt-2.5 w-[27%] md:w-full">
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    14 Feb
                  </Text>
                  <div className="bg-gray_800 h-1 my-[9px] rounded-[50%] w-1"></div>
                  <Text
                    className="font-bold text-gray_800 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Livina Style
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[125.00%] mt-[13px] not-italic text-bluegray_300 text-left tracking-[0.08px] w-full"
                  variant="body1"
                >
                  <>
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s.
                  </>
                </Text>
                <div className="flex items-center justify-start mt-8 w-auto md:w-full">
                  <Text
                    className="font-bold text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Explore More
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col items-center justify-end max-w-[1230px] mt-[157px] mx-auto p-20 md:px-5 w-full">
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
        <footer className="bg-white_A700 flex items-center justify-center mt-40 md:px-5 w-full">
          <div className="flex items-center justify-center mb-[55px] mt-[58px] mx-auto w-[86%]">
            <div className="flex md:flex-col flex-row md:gap-14 items-center justify-between w-full">
              <div className="bg-gray_303 h-[360px] mb-0.5 w-[360px]"></div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Dealerz.
                  </Text>
                  <div className="flex sm:flex-1 flex-row font-merriweather gap-4 items-center justify-between w-[26%] sm:w-full">
                    <Text
                      className="bg-deep_orange_A200 flex font-bold h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                      variant="body1"
                    >
                      Yt
                    </Text>
                    <Text
                      className="bg-deep_orange_A200 flex font-bold h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                      variant="body1"
                    >
                      Fb
                    </Text>
                    <Text
                      className="bg-deep_orange_A200 flex font-bold h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                      variant="body1"
                    >
                      Tw
                    </Text>
                    <Text
                      className="bg-deep_orange_A200 flex font-bold h-10 items-center justify-center rounded-[50%] text-center text-white_A700 tracking-[0.08px] w-10"
                      variant="body1"
                    >
                      Ig
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-bold mt-[30px] text-gray_900 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="font-bold mt-5 text-gray_900 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  Terms and Condition
                </Text>
                <Text
                  className="font-bold md:ml-[0] ml-[3px] mt-[158px] text-gray_900 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  @2020 TanahAir Studio. All rights reserved.
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home1Page;
