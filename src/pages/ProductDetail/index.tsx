import React from "react";
import {Link} from 'react-router-dom';
import Header from "components/Header";
import { Text, Img, RatingBar, Button, List, PagerIndicator } from "components";
import Footer from "components/Footer";

const ProductDetailPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col mt-7 md:px-5 relative w-full">
          <div className="bg-white_A700 h-[512px] mx-auto w-full"></div>
          <div className="flex items-center justify-start mb-auto mt-[-443.86px] mx-auto w-[86%] z-[1]">
            <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[43px] items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[0.12px] w-auto"
                    as="h6"
                    variant="h6"
                  >
                    <>Grocery &gt; Fruits &gt; Japan Oranges</>
                  </Text>
                  <Link to='/Gallery'>
                  <Img
                    src="images/img_imageplaceholder.svg"
                    className="h-[739px] w-auto"
                    alt="imageplaceholde"
                  /></Link>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[71px] w-[41%] md:w-full">
                  <Text
                    className="text-bluegray_900 text-left tracking-[0.19px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Urbano Jacket
                  </Text>
                  <div className="flex items-center justify-start mt-[29px] w-[39%] md:w-full">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="#f3692e"
                      size={32}
                    ></RatingBar>
                  </div>
                  <div className="flex items-center justify-start mt-[23px] w-auto md:w-full">
                    <Text
                      className="text-deep_orange_A200 text-left tracking-[0.19px] w-auto"
                      as="h2"
                      variant="h2"
                    >
                      $99
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-gray_900 text-left tracking-[0.12px] w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Details Product
                  </Text>
                  <Text
                    className="font-normal leading-[125.00%] mt-3.5 not-italic text-gray_700 text-left tracking-[0.08px]"
                    variant="body1"
                  >
                    <>
                      Develop a website by finding a product identity that has
                      value and branding to become a characteristic of a
                      company. We will also facilitate the business marketing of
                      these products with our SEO experts so that they become a
                      ready-to-use website and help sell a product from the
                      company.
                      <br />
                      Develop a website by finding a product identity that has
                      value and branding to become a characteristic of a
                      company. We will also facilitate the business marketing of
                      these products with our SEO experts so that they become a
                      ready-to-use website and help sell a product from the
                      company.
                    </>
                  </Text>
                  <div className="flex flex-row items-end justify-between mt-8 w-full">
                    <Text
                      className="font-bold mb-1 mt-[7px] text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Quantity
                    </Text>
                    <div className="bg-white_A700 flex items-center justify-end p-[5px] rounded w-auto">
                      <div className="flex flex-row items-start justify-between w-[89%] md:w-full">
                        <Text
                          className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          -
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          2
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_900 text-left tracking-[0.08px] w-auto"
                          variant="body1"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-bold my-[5px] text-deep_orange_A200 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Add note
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[22px] w-full">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      Sub Total
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[0.08px] w-auto"
                      variant="body1"
                    >
                      $10
                    </Text>
                  </div>
                  <div className="flex flex-row gap-6 items-center justify-start mt-[43px] w-[68%] md:w-full">
                    <Button
                      className="cursor-pointer flex h-14 items-center justify-center min-w-[143px] outline outline-[1px] outline-deep_orange_A200 px-6 py-4 rounded-lg w-auto"
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
                    <Button
                      className="bg-deep_orange_A200 cursor-pointer flex h-14 items-center justify-center min-w-[171px] px-6 py-4 rounded-lg w-auto"
                      rightIcon={
                        <Img
                          src="images/img_cart_white_a700.svg"
                          className="ml-2"
                          alt="cart"
                        />
                      }
                    >
                      <div className="font-bold sm:px-5 text-base text-left text-white_A700 tracking-[0.08px]">
                        Add to Cart
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:h-[1114px] h-[1118px] relative w-full">
                <div className="absolute flex h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[0.20px] w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Description
                    </Text>
                    <div className="flex sm:flex-col flex-row md:gap-14 items-start justify-between w-full">
                      <Text
                        className="font-normal leading-[125.00%] not-italic text-bluegray_300 text-left tracking-[0.08px]"
                        variant="body1"
                      >
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                          <br />
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                          fugiat quo.
                        </>
                      </Text>
                      <div className="bg-gray_303 h-[1026px] rounded-lg w-[47%]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col gap-[47px] items-start justify-start left-[0] w-[38%]">
                  <Text
                    className="text-gray_900 text-left tracking-[0.20px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Reviews (2)
                  </Text>
                  <List
                    className="flex-col gap-[55px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-full">
                          <div className="bg-gray_303 h-16 mb-[158px] rounded-[50%] w-16"></div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[78%] md:w-full">
                              <Text
                                className="text-gray_900 text-left tracking-[0.12px] w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Alex Iwobi
                              </Text>
                              <div className="flex items-center justify-evenly w-[49%]">
                                <RatingBar
                                  className=""
                                  value={5}
                                  starCount={5}
                                  activeColor="#f3692e"
                                  size={24}
                                ></RatingBar>
                              </div>
                            </div>
                            <Text
                              className="font-normal mt-[15px] not-italic text-bluegray_300 text-left tracking-[0.08px] w-auto"
                              variant="body1"
                            >
                              2 March 2021 at 06.30 pm
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-between mt-3.5 w-full">
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                            </div>
                            <Text
                              className="font-normal leading-[130.00%] mt-4 not-italic text-gray_800 text-left tracking-[0.11px] w-full"
                              variant="body2"
                            >
                              <>
                                Thank you for the article that was made, it
                                really provides insight and knowledge that I
                                didn&#39;t know before.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-full">
                          <div className="bg-gray_303 h-16 mb-[158px] rounded-[50%] w-16"></div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[78%] md:w-full">
                              <Text
                                className="text-gray_900 text-left tracking-[0.12px] w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Alex Iwobi
                              </Text>
                              <div className="flex items-center justify-evenly w-[49%]">
                                <RatingBar
                                  className=""
                                  value={5}
                                  starCount={5}
                                  activeColor="#f3692e"
                                  size={24}
                                ></RatingBar>
                              </div>
                            </div>
                            <Text
                              className="font-normal mt-[15px] not-italic text-bluegray_300 text-left tracking-[0.08px] w-auto"
                              variant="body1"
                            >
                              2 March 2021 at 06.30 pm
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-between mt-3.5 w-full">
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                              <div className="bg-gray_303 h-[88px] rounded w-[88px]"></div>
                            </div>
                            <Text
                              className="font-normal leading-[130.00%] mt-4 not-italic text-gray_800 text-left tracking-[0.11px] w-full"
                              variant="body2"
                            >
                              <>
                                Thank you for the article that was made, it
                                really provides insight and knowledge that I
                                didn&#39;t know before.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
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
        <Footer className="bg-white_A700 flex items-center justify-center mt-40 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductDetailPage;
