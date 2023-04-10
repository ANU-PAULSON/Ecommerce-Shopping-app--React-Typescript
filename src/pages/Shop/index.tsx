import React from "react";

import Header from "components/Header";
import { Text, Input, Img, List, RatingBar, Button } from "components";
import { CloseSVG } from "../../assets/images";
import Footer from "components/Footer";
import {Link} from 'react-router-dom';
const ShopPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

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
                className="leading-[120.00%] text-gray_900 text-left tracking-[0.19px] w-[97%] sm:w-full"
                as="h1"
                variant="h1"
              >
                Home Shopping, Your Choice!
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
        <div className="flex items-center justify-start max-w-[1231px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-1/4 md:w-full">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="border border-gray_900 border-solid flex pl-6 pr-[19px] py-[15px] rounded w-full"
                className="font-normal not-italic p-0 placeholder:text-bluegray_300 sm:pl-5 text-base text-bluegray_300 text-left tracking-[0.08px] w-full"
                name="searchbar_One"
                placeholder="Search products"
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
              <div className="flex items-center justify-start mt-16 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-end justify-between w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Price
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="h-6 mt-1.5 w-6"
                      alt="filter"
                    />
                  </div>
                  <Img
                    src="images/img_filters.svg"
                    className="h-[9px] mt-[22px] w-auto"
                    alt="filters"
                  />
                  <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Range
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900 text-right tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      $5-$20
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[71px] w-full">
                <Text
                  className="text-gray_900 text-left tracking-[0.12px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Product Categories
                </Text>
                <div className="flex flex-row items-start justify-between mt-[18px] w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Coat and Jackets
                  </Text>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-4 w-4"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Dressses
                  </Text>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-4 w-4"
                    alt="arrowright_One"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Playsuit
                  </Text>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-4 w-4"
                    alt="arrowright_Two"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-5 w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Short
                  </Text>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-4 w-4"
                    alt="arrowright_Three"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Top
                  </Text>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-4 w-4"
                    alt="arrowright_Four"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-5 w-full">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                    variant="body1"
                  >
                    Bottoms
                  </Text>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-4 w-4"
                    alt="arrowright_Five"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start mt-[69px] w-[79%] md:w-full">
                <Text
                  className="text-gray_900 text-left tracking-[0.12px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Featured Product
                </Text>
                <List
                  className="flex-col gap-6 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-gray_303 h-20 rounded-lg w-20"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="font-bold text-center text-gray_900 tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Tropical Playsuit
                        </Text>
                        <Text
                          className="font-medium text-deep_orange_A200 text-left tracking-[0.11px] w-auto"
                          variant="body2"
                        >
                          $100
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-gray_303 h-20 rounded-lg w-20"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="font-bold text-center text-gray_900 tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Tropical Playsuit
                        </Text>
                        <Text
                          className="font-medium text-deep_orange_A200 text-left tracking-[0.11px] w-auto"
                          variant="body2"
                        >
                          $100
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-gray_303 h-20 rounded-lg w-20"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="font-bold text-center text-gray_900 tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Tropical Playsuit
                        </Text>
                        <Text
                          className="font-medium text-deep_orange_A200 text-left tracking-[0.11px] w-auto"
                          variant="body2"
                        >
                          $100
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-gray_303 h-20 rounded-lg w-20"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="font-bold text-center text-gray_900 tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Tropical Playsuit
                        </Text>
                        <Text
                          className="font-medium text-deep_orange_A200 text-left tracking-[0.11px] w-auto"
                          variant="body2"
                        >
                          $100
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-gray_303 h-20 rounded-lg w-20"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="font-bold text-center text-gray_900 tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Tropical Playsuit
                        </Text>
                        <Text
                          className="font-medium text-deep_orange_A200 text-left tracking-[0.11px] w-auto"
                          variant="body2"
                        >
                          $100
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-gray_303 h-20 rounded-lg w-20"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="font-bold text-center text-gray_900 tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Tropical Playsuit
                        </Text>
                        <Text
                          className="font-medium text-deep_orange_A200 text-left tracking-[0.11px] w-auto"
                          variant="body2"
                        >
                          $100
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[72px] items-center justify-start w-[71%] md:w-full">
              <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'>
                      Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      
                      <Link to='/ProductDetail'> Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'> Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'> Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'> Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'> Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'> Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col md:gap-10 gap-[211px] h-[375px] items-center justify-start p-2.5 rounded-md w-full"
                  style={{
                    backgroundImage: "url('images/img_item_white_a700.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex h-[22px] items-center justify-start p-[3px] rounded-md w-[7%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Img
                      src="images/img_favorite_deep_orange_a201.svg"
                      className="h-4 w-4"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-start mb-[11px] w-[43%] md:w-full">
                    <Text
                      className="text-center text-gray_900 tracking-[0.12px] w-auto"
                      as="h6"
                      variant="h6"
                    >
                      <Link to='/ProductDetail'> 
                      Urbano Jacket</Link>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex items-center justify-evenly w-full">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#f86338"
                          size={16}
                        ></RatingBar>
                      </div>
                      <Text
                        className="font-normal mt-[7px] not-italic text-bluegray_300 text-center tracking-[0.11px] w-auto"
                        variant="body2"
                      >
                        watchmenow
                      </Text>
                      <Text
                        className="font-medium mt-2 text-deep_orange_A201 text-right tracking-[0.08px] w-auto"
                        variant="body1"
                      >
                        $99
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button className="bg-deep_orange_A200 cursor-pointer font-bold h-14 min-w-[121px] sm:px-5 px-6 py-[18px] rounded-lg text-base text-center text-white_A700 tracking-[0.08px] w-auto">
                See More
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col items-center justify-end max-w-[1230px] mt-40 mx-auto p-20 md:px-5 w-full">
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
                  alt="arrowleft"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white_A700 flex items-center justify-center mt-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ShopPage;
