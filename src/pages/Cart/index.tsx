import React from "react";

import Header from "components/Header";
import { Text, List, Img, Button, Input, PagerIndicator } from "components";
import Footer from "components/Footer";

const CartPage: React.FC = () => {
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
        <div className="flex items-center justify-start max-w-[1236px] mt-[118px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[51%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-10 items-start justify-start w-[71%] md:w-full">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  1. Shopping Cart
                </Text>
                <Text
                  className="font-bold text-bluegray_300 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  2. Checkout
                </Text>
                <Text
                  className="font-bold text-bluegray_300 text-left tracking-[0.08px] w-auto"
                  variant="body1"
                >
                  3. Order Succesed
                </Text>
              </div>
              <Text
                className="mt-[39px] text-gray_900 text-left tracking-[0.24px] w-auto"
                as="h3"
                variant="h3"
              >
                My Cart
              </Text>
              <List
                className="flex-col gap-10 grid items-center mt-[59px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-gray_303 h-[200px] mb-[15px] rounded w-[200px]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-[7px] w-auto sm:w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[0.12px] w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Tropical Playsuit
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[18px] w-[69%] md:w-full">
                        <Text
                          className="font-bold mb-1 text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Size :
                        </Text>
                        <Text
                          className="font-bold mt-1 text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          M
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[72px] items-start justify-start mt-2.5 w-[69%] md:w-full">
                        <Text
                          className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Quantity :
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          - 5 +
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[19px] w-full">
                        <div className="flex sm:flex-1 items-center justify-start w-auto sm:w-full">
                          <Text
                            className="text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                            as="h2"
                            variant="h2"
                          >
                            $99
                          </Text>
                        </div>
                        <div className="flex h-10 items-center justify-start sm:ml-[0] ml-[70px] outline outline-[1px] outline-deep_orange_A200 p-2 rounded-lg w-10">
                          <div className="flex h-6 items-center justify-start w-6">
                            <Img
                              src="images/img_trash.svg"
                              className="h-6 w-6"
                              alt="trash"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex h-10 items-center justify-center min-w-[143px] ml-4 sm:ml-[0] outline outline-[1px] outline-deep_orange_A200 px-6 py-2 rounded-lg w-auto"
                          rightIcon={
                            <Img
                              src="images/img_favorite_deep_orange_a200.svg"
                              className="ml-2"
                              alt="favorite"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-base text-deep_orange_A200 text-left tracking-[0.08px]">
                            Wishlist
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-gray_303 h-[200px] mb-[15px] rounded w-[200px]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-[7px] w-auto sm:w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[0.12px] w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Tropical Playsuit
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[18px] w-[69%] md:w-full">
                        <Text
                          className="font-bold mb-1 text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Size :
                        </Text>
                        <Text
                          className="font-bold mt-1 text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          M
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[72px] items-start justify-start mt-2.5 w-[69%] md:w-full">
                        <Text
                          className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Quantity :
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          - 5 +
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[19px] w-full">
                        <div className="flex sm:flex-1 items-center justify-start w-auto sm:w-full">
                          <Text
                            className="text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                            as="h2"
                            variant="h2"
                          >
                            $99
                          </Text>
                        </div>
                        <div className="flex h-10 items-center justify-start sm:ml-[0] ml-[70px] outline outline-[1px] outline-deep_orange_A200 p-2 rounded-lg w-10">
                          <div className="flex h-6 items-center justify-start w-6">
                            <Img
                              src="images/img_trash.svg"
                              className="h-6 w-6"
                              alt="trash"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex h-10 items-center justify-center min-w-[143px] ml-4 sm:ml-[0] outline outline-[1px] outline-deep_orange_A200 px-6 py-2 rounded-lg w-auto"
                          rightIcon={
                            <Img
                              src="images/img_favorite_deep_orange_a200.svg"
                              className="ml-2"
                              alt="favorite"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-base text-deep_orange_A200 text-left tracking-[0.08px]">
                            Wishlist
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-gray_303 h-[200px] mb-[15px] rounded w-[200px]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-[7px] w-auto sm:w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[0.12px] w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Tropical Playsuit
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[18px] w-[69%] md:w-full">
                        <Text
                          className="font-bold mb-1 text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Size :
                        </Text>
                        <Text
                          className="font-bold mt-1 text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          M
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[72px] items-start justify-start mt-2.5 w-[69%] md:w-full">
                        <Text
                          className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Quantity :
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          - 5 +
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[19px] w-full">
                        <div className="flex sm:flex-1 items-center justify-start w-auto sm:w-full">
                          <Text
                            className="text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                            as="h2"
                            variant="h2"
                          >
                            $99
                          </Text>
                        </div>
                        <div className="flex h-10 items-center justify-start sm:ml-[0] ml-[70px] outline outline-[1px] outline-deep_orange_A200 p-2 rounded-lg w-10">
                          <div className="flex h-6 items-center justify-start w-6">
                            <Img
                              src="images/img_trash.svg"
                              className="h-6 w-6"
                              alt="trash"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex h-10 items-center justify-center min-w-[143px] ml-4 sm:ml-[0] outline outline-[1px] outline-deep_orange_A200 px-6 py-2 rounded-lg w-auto"
                          rightIcon={
                            <Img
                              src="images/img_favorite_deep_orange_a200.svg"
                              className="ml-2"
                              alt="favorite"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-base text-deep_orange_A200 text-left tracking-[0.08px]">
                            Wishlist
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-gray_303 h-[200px] mb-[15px] rounded w-[200px]"></div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-[7px] w-auto sm:w-full">
                      <Text
                        className="text-gray_900 text-left tracking-[0.12px] w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Tropical Playsuit
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[18px] w-[69%] md:w-full">
                        <Text
                          className="font-bold mb-1 text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Size :
                        </Text>
                        <Text
                          className="font-bold mt-1 text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          M
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[72px] items-start justify-start mt-2.5 w-[69%] md:w-full">
                        <Text
                          className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          Quantity :
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-right tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          - 5 +
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[19px] w-full">
                        <div className="flex sm:flex-1 items-center justify-start w-auto sm:w-full">
                          <Text
                            className="text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                            as="h2"
                            variant="h2"
                          >
                            $99
                          </Text>
                        </div>
                        <div className="flex h-10 items-center justify-start sm:ml-[0] ml-[70px] outline outline-[1px] outline-deep_orange_A200 p-2 rounded-lg w-10">
                          <div className="flex h-6 items-center justify-start w-6">
                            <Img
                              src="images/img_trash.svg"
                              className="h-6 w-6"
                              alt="trash"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex h-10 items-center justify-center min-w-[143px] ml-4 sm:ml-[0] outline outline-[1px] outline-deep_orange_A200 px-6 py-2 rounded-lg w-auto"
                          rightIcon={
                            <Img
                              src="images/img_favorite_deep_orange_a200.svg"
                              className="ml-2"
                              alt="favorite"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-base text-deep_orange_A200 text-left tracking-[0.08px]">
                            Wishlist
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[78px] items-center justify-start md:mt-0 mt-[184px] w-[42%] md:w-full">
              <div className="bg-white_A700 flex flex-col items-start justify-start p-[27px] sm:px-5 rounded-lg w-full">
                <Text
                  className="md:ml-[0] ml-[21px] text-gray_900 text-left tracking-[0.12px] w-auto"
                  as="h6"
                  variant="h6"
                >
                  Have a Coupon?
                </Text>
                <div className="flex items-center justify-start md:ml-[0] ml-[21px] mt-[19px] w-[91%] md:w-full">
                  <Input
                    wrapClassName="bg-white_A700 border border-deep_orange_A200 border-solid pl-[13px] pr-[35px] py-[18px] rounded-lg w-full"
                    className="font-normal not-italic p-0 placeholder:text-bluegray_300 sm:pr-5 text-bluegray_300 text-left text-sm tracking-[0.11px] w-full"
                    type="email"
                    name="textbox"
                    placeholder="Input your email here"
                  ></Input>
                </div>
                <Button className="bg-deep_orange_A200 cursor-pointer font-bold h-12 mb-[5px] min-w-[95px] md:ml-[0] ml-[21px] mt-6 sm:px-5 px-6 py-3.5 rounded-lg text-base text-center text-white_A700 tracking-[0.08px] w-auto">
                  Apply
                </Button>
              </div>
              <div className="flex items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[0.12px] w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Cart Totals
                  </Text>
                  <div className="flex flex-row gap-20 items-center justify-start mt-[33px] w-[36%] md:w-full">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      $150
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[77px] items-center justify-start mt-[23px] w-[49%] md:w-full">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Free Shipping
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between ml-auto mt-[21px] w-[72%] md:w-full">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Shipping to Sidney
                    </Text>
                    <Text
                      className="font-bold text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Change
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-7 w-[37%] md:w-full">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Total
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      $350
                    </Text>
                  </div>
                  <Button className="bg-deep_orange_A200 cursor-pointer font-bold h-14 mt-[55px] sm:px-5 px-6 py-[18px] rounded-lg text-base text-center text-white_A700 tracking-[0.08px] w-[507px]">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1064px] h-[960px] mt-[104px] overflow-auto md:px-5 relative w-full">
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
                  alt="arrowleft"
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

export default CartPage;
