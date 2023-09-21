"use client";

import Image from "next/image";

import {
  clarifon_features,
  customer_review,
  stars,
  verified,
  clarifon,
  satisfaction,
  arrow,
  lock_1,
  visa,
  shop_pay,
  mastercard,
  paypal,
  google_pay,
  apple_pay,
  amex,
} from "../assets";
const Product = () => {
  return (
    <div
      className="
    w-full 
    flex
    items-center 
    justify-center"
    >
      <div
        className="
      w-[320px]
      flex
      flex-col

      lg:flex-row
      lg:w-[1245px]
      lg:h-[879px]
      lg:mt-[205px]
    lg:bg-[#FAFAFA]
      lg:rounded-[10px]
  "
      >
        {/* Desktop:Left Column */}
        {/* Mobile: First Section Unique Column */}
        <div
          className="
        lg:flex 
        lg:flex-col"
        >
          {/* Mobile: Selling Title Offer */}
          <div
            className="
            lg:hidden
          w-[320px] 
          h-[85px] 
          relative
          mb-[24px]"
          >
            <div
              className="
              lg:hidden
            absolute 
            top-[-7.5px]"
            >
              <span
                className="
                lg:hidden
              text-blue-500 
              text-[24px] 
              font-semibold 
              capitalize 
              leading-[33.6px]"
              >
                ONE TIME ONLY
              </span>
              <span
                className="
                lg:hidden
              text-black 
              text-[24px] 
              font-normal 
              capitalize 
              leading-[33.6px]"
              >
                {" "}
                special price for 6 extra Clarifion for only{" "}
              </span>
              <span
                className="
                lg:hidden
              text-blue-500 
              text-[24px] 
              font-semibold 
              capitalize 
              leading-[33.6px]"
              >
                $14 each
              </span>
              <span
                className="
                lg:hidden
              text-black 
              text-[24px] 
              font-normal 
              capitalize 
              leading-[33.6px]"
              >
                {" "}
                ($84.00 total!)
              </span>
            </div>
          </div>
          {/* Product Image */}
          <Image
            className="
      w-[320px]
      h-[328px]
      rounded-[10px]

      lg:w-[575px]
      lg:h-[591px]
      lg:mt-[40px]
      lg:ml-[40px]
      "
            src={clarifon_features}
            alt="clarifon"
            priority={true}
            placeholder="blur"
          />
          {/* Desktop: Customer Review */}
          <div
            className="
            hidden
            
            lg:w-[575px]
            lg:h-[186px]
            lg:p-[24px]
            lg:ml-[40px]
            lg:mt-[31px]
            lg:flex
            lg:flex-col
            lg:gap-[18px]
          lg:bg-[#FFFFFF]
            lg:rounded-[10px]
          "
          >
            <div
              className="
            lg:w-[237px]
            lg:h-[48px]
            lg:flex
            lg:items-center
            lg:gap-[13px]
            "
            >
              <Image
                className="
                lg:w-[48px]
                lg:h-[48px]
                lg:rounded-full
            "
                src={customer_review}
                alt="customer_review"
                priority={true}
                placeholder="blur"
              />
              <div
                className="
                lg:w-[176px]
                lg:h-[35.3px]
                lg:flex
                lg:flex-col
                lg:justify-between
              "
              >
                <div
                  className="
                lg:flex"
                >
                  <Image
                    className="
                    lg:w-[11.95px] lg:h-[11.95px]"
                    src={stars}
                    alt="stars_review"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                    lg:w-[11.95px] lg:h-[11.95px]"
                    src={stars}
                    alt="stars_review"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                    lg:w-[11.95px] lg:h-[11.95px]"
                    src={stars}
                    alt="stars_review"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                    lg:w-[11.95px] lg:h-[11.95px]"
                    src={stars}
                    alt="stars_review"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                    lg:w-[11.95px] lg:h-[11.95px]"
                    src={stars}
                    alt="stars_review"
                    priority={true}
                    placeholder="blur"
                  />
                </div>
                <div
                  className="
                lg:flex 
                lg:gap-[10px]"
                >
                  <p
                    className="
                  lg:text-[14px]
                  lg:leading-[14px]
                  lg:font-bold
                  lg:text-[#333333]
                  "
                  >
                    Ken T.
                  </p>
                  <div
                    className="
                    lg:flex
                    lg:justify-between
                    lg:w-[126px]
                    lg:h-[16px]"
                  >
                    <Image
                      className="
                      lg:w-[16px] lg:h-[16px]"
                      src={verified}
                      alt="verified"
                    />
                    <p
                      className="
                      lg:text-[12px]
                      lg:leading-[14.4px]
                      lg:font-normal
                    "
                    >
                      Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="
            lg:w-[527px]
            lg:h-[72px]
            lg:font-normal
            lg:text-[16px]
            lg:leading-[24px]
            lg:text-[#4D5254]
            "
            >
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </div>
        </div>
        {/* Desktop: Rigth Column */}
        {/* Mobile: Second Section Unique Column */}
        <div
          className="
        lg:w-[550px]
        lg:h-[799px]
        lg:mt-[40px]
        lg:ml-[40px]
        lg:flex
        lg:flex-col
        lg:gap-[32px]
        "
        >
          {/* Mobile Clarifon Price and Description */}
          <div
            className="
          lg:hidden

          my-[24px]
          w-[320px] 
          h-[122px] 
          flex-col 
          justify-start 
          items-start 
          gap-[16px] 
          inline-flex"
          >
            <div
              className="
            w-[320px]
            h-[80px] 
            justify-start 
            items-center 
            gap-[16px] 
            inline-flex"
            >
              <div
                className="
              w-[80px]
              h-[80px] 
              relative"
              >
                <div
                  className="
                w-[80px] 
                h-[80px] 
                left-0 
                top-0 
                absolute 
                bg-[#2C7EF8] 
                rounded-[10px]"
                />
                <Image
                  src={clarifon}
                  alt="clarifon"
                  className="
                  w-[80px] 
                  h-[80px]  
                  left-0 
                  top-0 
                  absolute 
                  rounded-[10px]"
                />
              </div>
              <div
                className="
              w-[224px]
              h-[58px]
              flex
              flex-col   
              gap-[10px] "
              >
                {/* Clarifon Air Ionizer $180 $84 */}
                <div
                  className="
              flex
              justify-between
              w-[224px]
              h-[10px]
              relative
              "
                >
                  <div
                    className="
                absolute 
                top-[-3.1px]
                flex
                justify-between
                items-center
                w-full
                "
                  >
                    <h2
                      className="
                  h-[10px]
                  font-normal
                  text-[14px]
                  leading-[19.6px]
                  absolute
                  top-[-1px]
                  "
                    >
                      Clarifion Air Ionizer
                    </h2>
                    <div
                      className="
                  flex
                  items-center
                  gap-[8px]
                  h-[10px]
                  w-[57px]
                  absolute
                    top-0
                    right-[-0.5px]
                  "
                    >
                      <span
                        className="
                    w-[23px]
                    h-[7px]
                    font-semibold
                    text-[10px]
                    leading-[13.66px]
                    text-[#969696]
                    
                    "
                      >
                        $180
                      </span>
                      <span
                        className="
                    w-[26px]
                    h-[10px]
                    text-[#2C7EF8]
                    font-semibold
                    text-[14px]
                    leading-[19.6px]
                    mb-[2px]
                    "
                      >
                        $84
                      </span>
                    </div>
                  </div>
                </div>
                {/* Stars */}
                <div
                  className="
              flex
              w-[68pxpx]
              h-[12px]
              "
                >
                  <Image
                    className="
                w-[12px] 
                h-[12px]"
                    src={stars}
                    alt="stars"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                w-[12px] 
                h-[12px]"
                    src={stars}
                    alt="stars"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                w-[12px] 
                h-[12px]"
                    src={stars}
                    alt="stars"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                w-[12px] 
                h-[12px]"
                    src={stars}
                    alt="stars"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    className="
                w-[12px] 
                h-[12px]"
                    src={stars}
                    alt="stars"
                    priority={true}
                    placeholder="blur"
                  />
                </div>
                <div
                  className="
                w-[106px]
                h-[16px]
                flex
                items-center 
                justify-between"
                >
                  <div
                    className="
                  w-[12px] 
                  h-[12px]
                  rounded-[100%]
                  bg-[#E3EEFF]
                  flex
                  items-center
                  justify-center
                  "
                  >
                    <div
                      className="
                    w-[6px]
                    h-[6px]
                    bg-[#2C7EF8]
                    rounded-[100%]
                    "
                    />
                  </div>
                  <div
                    className="
                  text-[#37465A] 
                  text-[12px] 
                  leading-[16.39px]
                  font-light "
                  >
                    12 left in Stock
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
            w-[326px]
            h-[26px] 
            text-center 
            text-neutral-600 
            text-[12px]
            leading-[16.8px] 
            font-normal 
            relative"
            >
              <p
                className="
              absolute
              top-[-3.7px]
              "
              >
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
          {/* First Row */}
          <div
            className="
            hidden

          lg:inline-block            
          lg:w-[550px] 
          lg:h-[113px] 
          lg:relative"
          >
            <div
              className="
              hidden

          lg:inline-block
            lg:absolute 
            lg:top-[-11px]"
            >
              <span
                className="
              lg:text-blue-500 lg:text-[32px] lg:font-semibold lg:capitalize lg:leading-[44.80px]"
              >
                ONE TIME ONLY
              </span>
              <span
                className="
              lg:text-black 
              lg:text-[32px] lg:font-normal lg:capitalize lg:leading-[44.80px]"
              >
                {" "}
                special price for 6 extra Clarifion for only{" "}
              </span>
              <span
                className="
              lg:text-blue-500 lg:text-[32px] lg:font-semibold lg:capitalize lg:leading-[44.80px]"
              >
                $14 each
              </span>
              <span
                className="
              lg:text-black 
              lg:text-[32px] lg:font-normal lg:capitalize lg:leading-[44.80px]"
              >
                {" "}
                ($84.00 total!)
              </span>
            </div>
          </div>
          {/* Second Row */}
          <div
            className="
            hidden

            lg:flex
            lg:w-[550px] 
            lg:h-[135px]
            lg:gap-[24px]"
          >
            <div
              className="
          lg:bg-[#2C7EF8]
            lg:w-[134px]
            lg:h-[134px]
            lg:rounded-[10px]
            "
            >
              <Image
                className="
                lg:w-[134px] 
                lg:h-[134px]"
                src={clarifon}
                alt="clarifon"
                priority={true}
                placeholder="blur"
              />
            </div>
            <div
              className="
            lg:w-[392px]
            lg:h-[135px]
            lg:flex
            lg:flex-col
            lg:gap-[15px]
            "
            >
              <div
                className="
              lg:flex
              lg:justify-between
              lg:w-[392px]
              lg:h-[16px]
              lg:relative
              "
              >
                <div
                  className="
                lg:absolute 
                lg:top-[-6.3px]
                lg:flex
                lg:justify-between
                lg:w-full
               
                "
                >
                  <h2
                    className="
                  lg:h-[14px]
                  lg:font-normal
                  lg:text-[20px]
                  lg:leading-[28px]
                  "
                  >
                    Clarifion Air Ionizer
                  </h2>
                  <div
                    className="
                  lg:flex
                  lg:items-center
                  lg:gap-[10px]
                  lg:h-[16px]
                  lg:w-[88px]
                  
                  "
                  >
                    <span
                      className="
                    lg:w-[37px]
                    lg:h-[12px]
                    lg:font-semibold
                    lg:text-[16px]
                    lg:leading-[21.86px]
                    lg:text-[#969696]
                    
                    "
                    >
                      $180
                    </span>
                    <span
                      className="
                    lg:w-[41px]
                    lg:h-[16px]
                    lg:text-[#2C7EF8]
                    lg:font-semibold
                    lg:text-[22px]
                    lg:leading-[30.8px]
                    lg:mb-[2px]
                    "
                    >
                      $84
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="
              lg:flex
              lg:w-[98px]
              lg:h-[18px]
              "
              >
                <Image
                  className="
                lg:w-[18px] 
                lg:h-[18px]"
                  src={stars}
                  alt="stars"
                />
                <Image
                  className="
                lg:w-[18px] 
                lg:h-[18px]"
                  src={stars}
                  alt="stars"
                />
                <Image
                  className="
                lg:w-[18px] 
                lg:h-[18px]"
                  src={stars}
                  alt="stars"
                />
                <Image
                  className="
                lg:w-[18px] 
                lg:h-[18px]"
                  src={stars}
                  alt="stars"
                />
                <Image
                  className="
                lg:w-[18px] 
                lg:h-[18px]"
                  src={stars}
                  alt="stars"
                />
              </div>

              <div
                className="
              lg:flex 
              lg:items-center 
              lg:gap-[16px]"
              >
                <div
                  className="
                lg:w-[16px]
                lg:h-[16px]
                lg:bg-[#E3EEFF]
                lg:rounded-full
                lg:flex
                lg:items-center
                lg:justify-center
                "
                >
                  <div
                    className="
                    lg:bg-[#2C7EF8]
                    lg:w-[8.53px]
                    lg:h-[8.53px]
                    lg:rounded-full
                  
                  "
                  ></div>
                </div>
                <p
                  className="
                  lg:font-light
                  lg:text-[16px]
                  lg:leading-[21.86px]
                  lg:text-[#37465A]
                "
                >
                  12 left in Stock
                </p>
              </div>

              <div
                className="
                lg:font-normal
                lg:text-[16px]
                lg:leading-[22.4px]
                lg:text-[#4D5254]
             
                lg:w-[398px]
                lg:h-[34px]
                lg:relative
              "
              >
                <p
                  className="
                  lg:absolute
                  lg:top-[-5.2px]
                "
                >
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
          </div>
          {/* Third Row */}
          {/* Features and checks */}
          <div
            className="
            mb-[24px]
            w-[320px]
            h-[80px]

            lg:mb-[0px]
            lg:w-[550px] 
            lg:h-[98px] 
            flex-col 
            justify-start 
            items-start 
            gap-[16px] 
            inline-flex
            "
          >
            <div
              className="
              w-[302px]
              h-[16px]

              flex
              items-center
              gap-[12px]
             
              lg:items-start
              lg:w-[481px]
              lg:h-[22px]
            
            "
            >
              <div
                className="
              w-[16px]
              h-[16px]

              lg:w-[22px] 
              lg:h-[22px] 
              relative"
              >
                <div
                  className="
                w-[16px]
                h-[16px]
                flex
                items-center
                justify-center
                
                lg:w-[22px] 
                lg:h-[22px] 
                left-0 
                top-0 
                absolute"
                >
                  <svg
                    className="
                    w-[14x]
                    h-[14px]

                    lg:w-[22px]
                    lg:h-[22px]
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M1.99976 9L8.65858 16L21.9998 2"
                      stroke="#2C7EF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="
                text-[12px]
                leading-[19.2px]

                lg:w-[447px]
                lg:h-[12px]
                lg:text-[16px]
                text-[#4D5254]
              "
              >
                <span
                  className="
                  font-normal
                  lg:leading-[25.6px]
                "
                >
                  Negative Ion Technology may
                </span>
                <span
                  className="
                  lg:leading-[25.6px] 
                  font-bold "
                >
                  {" "}
                  help with allergens
                </span>
              </div>
            </div>
            <div
              className="
              w-[193px]
              h-[16px]

              flex
              items-center
              gap-[12px]
              lg:items-start
              lg:w-[481px]
              lg:h-[22px]
            "
            >
              <div
                className="
              w-[16px]
              h-[16px]
              
              lg:w-[22px] 
              lg:h-[22px] 
              relative"
              >
                <div
                  className="
                w-[16px]
                h-[16px]
                flex
                items-center
                justify-center
                
                lg:w-[22px] 
                lg:h-[22px] 
                left-0 
                top-0 
                absolute
                "
                >
                  <svg
                    className="
                    w-[14x]
                    h-[14px]

                    lg:w-[22px]
                    lg:h-[22px]
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M1.99976 9L8.65858 16L21.9998 2"
                      stroke="#2C7EF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="
                
                text-[12px]
                leading-[19.2px]
               

                lg:w-[447px]
                lg:h-[12px]
                lg:text-[16px]
                text-[#4D5254]
              "
              >
                <span
                  className="
                  font-normal
                  lg:leading-[25.6px]
                "
                >
                  Designed for
                </span>
                <span
                  className="
                  lg:leading-[25.6px] 
                  font-bold "
                >
                  {" "}
                  air rejuvenation
                </span>
              </div>
            </div>
            <div
              className="
              h-[16px]

              flex
              items-center
              gap-[12px]
              lg:items-start
              lg:w-[481px]
              lg:h-[22px]
             
            "
            >
              <div
                className="
              w-[16px]
              h-[16px]

              lg:w-[22px] 
              lg:h-[22px] 
              relative"
              >
                <div
                  className="
                  w-[16px]
                  h-[16px]
                  flex
                  items-center
                  justify-center
                  
                  lg:w-[22px] 
                  lg:h-[22px] 
                  left-0 
                  top-0 "
                >
                  <svg
                    className="
                    w-[14x]
                    h-[14px]

                    lg:w-[22px]
                    lg:h-[22px]
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M1.99976 9L8.65858 16L21.9998 2"
                      stroke="#2C7EF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="
                text-[12px]
                leading-[19.2px]
               

                lg:w-[447px]
                lg:h-[12px]
                lg:text-[16px]
                text-[#4D5254]
              "
              >
                <span
                  className="
                  lg:leading-[25.6px] 
                  font-bold "
                >
                  {" "}
                  Perfect for every room{" "}
                </span>
                <span
                  className="
                  font-normal
                  lg:leading-[25.6px]
                "
                >
                  in all types of places.
                </span>
              </div>
            </div>
          </div>
          {/* Fourth Row */}
          <div
            className="
          w-[320px]
          h-[64px]
          mb-[24px]

          lg:mb-[0px]
          lg:w-[542px] 
          lg:h-[56px] 
          px-[16px] 
          py-[12px] 
          bg-[#EDF3FD] 
          rounded-[10px] 
          flex-col 
          justify-start 
          items-start 
          gap-[10px] 
          inline-flex"
          >
            <div
              className="
            w-[288px]
            h-[40px]

            justify-start 
            items-center 
            gap-[16px] 
            inline-flex 
            lg:w-[441px] 
            lg:h-[32px]"
            >
              <div
                className="
              w-[32px]
              h-[24px]

              lg:w-[32px] 
              lg:h-[32px] 
              bg-[#2C7EF8] 
              rounded-full 
              text-[#FFFFFF] 
              flex
              items-center
              justify-center"
              >
                <div
                  className="
                text-[14.4px]
                  
                lg:text-[19.2px]"
                >
                  %
                </div>
              </div>
              <div
                className="
                text-[14px]
                leading-[19.6px]
                lg:text-[16px] 
                font-normal
              "
              >
                <span
                  className="
                  text-black 
                  lg:text-[16px]   
                  lg:leading-[22.4px]"
                >
                  Save{" "}
                </span>
                <span
                  className="
                  text-[#2C7EF8]   
                  lg:leading-[22.4px]"
                >
                  53%
                </span>
                <span
                  className="
                  text-black   
                  lg:leading-[22.4px]"
                >
                  {" "}
                  and get{" "}
                </span>
                <span
                  className="
                  text-[#2C7EF8]  
                  lg:leading-[22.4px]"
                >
                  6 extra Clarifision
                </span>
                <span
                  className="
                text-black   
                lg:leading-[22.4px]"
                >
                  {" "}
                  for only{" "}
                </span>
                <span
                  className="
                  text-[#2C7EF8]  
                  lg:leading-[22.4px]"
                >
                  $14 Each
                </span>
                <span
                  className="
                text-black 
                lg:leading-[22.4px]"
                >
                  .
                </span>
              </div>
            </div>
          </div>
          {/* Fifth Row (need to work on) */}
          <div
            className="
            gap-[12px]
            w-[320px]
            h-[162px]
          mb-[24px]

          lg:mb-[0px]
          lg:w-[542px] 
          lg:h-[149px] 
          flex-col 
          justify-start 
          items-center 
          lg:gap-[20px] 
          inline-flex"
          >
            <div
              className="
              w-[320px]
              h-[134px]
            self-stretch 
            lg:h-[104px] 
            lg:w-[542px] 
            flex-col 
            justify-start 
            items-center 
            gap-[12px] 
            flex"
            >
              <button
                onClick={() =>
                  alert("DISCOUNT CLAIMED: #12345 You are the best!")
                }
                className="
                w-[320px]
                h-[51px]

                self-stretch 
                lg:h-[59px] 
                lg:w-[542px] 
                px-[64px] 
                py-[16px] 
                bg-[#59AE43] 
                rounded-[50px] 
                flex-col 
                justify-center 
                items-center 
                gap-[10px] 
                flex"
              >
                <div
                  className="
                  w-[207px]
                  h-[19px]
                  gap-[16px]
                flex 
                items-center 
                justify-between 
                lg:gap-[19.76px]  
                lg:w-[290.76px] 
                lg:h-[27px] "
                >
                  <div
                    className="
                    text-[14px]
                    leading-[19.12px]
                    text-white 
                    lg:text-[20px]
                    lg:leading-[27.32px]
                    lg:font-bold uppercase"
                  >
                    Yes - Claim my discount
                  </div>
                  <Image className="lg:w-[12px]" src={arrow} alt="arrow" />
                </div>
              </button>
              {/* Desktop payments */}
              <div
                className="
                hidden
              lg:px-[16px] 
              lg:py-[8px] 
              lg:rounded-[4px] 
              lg:border 
              lg:border-[#CFCFCF] 
              lg:flex 
              lg:items-center 
              lg:justify-between 
              lg:flex-row
              lg:w-[542px] 
              lg:h-[33px]"
              >
                <div
                  className="
                  
                text-[#4D5254] 
                lg:text-[12px] 
                lg:font-normal 
                lg:leading-[16.8px] 
                lg:flex 
                lg:items-center 
                lg:justify-center"
                >
                  Free Shipping
                </div>
                <div className="text-[#CFCFCF]">|</div>
                <div
                  className="
                  lg:w-[194px]
                  lg:h-[12px]
                  lg:flex 
                  lg:items-center 
                  lg:justify-between
            "
                >
                  <Image
                    src={lock_1}
                    alt="lock"
                    className="
                    lg:w-[12px] 
                    lg:h-[12px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <div
                    className="
                    lg:font-normal
                    lg:text-[12px]
                    lg:text-center
                    lg:leading-[18px]
                    text-[#4D5254]
                  "
                  >
                    Secure 256-bit SSL encryption.
                  </div>
                </div>
                <div
                  className="
                  hidden
                  lg:block
                text-[#CFCFCF]"
                >
                  |
                </div>
                <div
                  className="
                  lg:flex
                  lg:gap-[2px]
                "
                >
                  <Image
                    src={visa}
                    alt="visa"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={shop_pay}
                    alt="shop_pay"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={paypal}
                    alt="paypal"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={mastercard}
                    alt="mastercard"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={google_pay}
                    alt="google_pay"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={apple_pay}
                    alt="apple_pay"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={amex}
                    alt="amex"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                </div>
              </div>
              {/* Mobile payments */}
              <div
                className="
              lg:hidden
              w-[321px] 
              h-[71px] 
              px-4 
              py-2 
              rounded 
              border border-stone-300 flex-col justify-center items-center gap-[12px] inline-flex"
              >
                <div
                  className="
                justify-center items-center 
                 w-[289px]
                inline-flex
                border-b
                py-[5px]
                border-[#CFCFCF]
                "
                >
                  <div
                    className="
                  text-neutral-600 text-[12px]
                  leading-[16.8px]
                   font-normal capitalize"
                  >
                    Free shipping
                  </div>
                  <div
                    className="
                  text-stone-300 
                  mx-[9px]
                  "
                  >
                    |
                  </div>
                  <div
                    className="
                  justify-start items-center gap-2 
                  flex"
                  >
                    <Image
                      src={lock_1}
                      alt="lock"
                      className="
                    w-3 
                    h-3"
                    />
                    <div
                      className="
                    text-center text-neutral-600 text-[12px] font-normal capitalize leading-[18px]"
                    >
                      Secure 256-bit SSL encryption
                    </div>
                  </div>
                </div>

                <div
                  className="
                justify-center items-center 
                gap-0.5 inline-flex mb-[5px]"
                >
                  <Image
                    src={visa}
                    alt="visa"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={shop_pay}
                    alt="shop_pay"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={paypal}
                    alt="paypal"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={mastercard}
                    alt="mastercard"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={google_pay}
                    alt="google_pay"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={apple_pay}
                    alt="apple_pay"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                  <Image
                    src={amex}
                    alt="amex"
                    className="
                    lg:w-[24px]
                    lg:h-[14px]"
                    priority={true}
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
            <a
              href="/"
              className="

              text-[#F82C2C] 
              text-[12px]
              leading-[16.39px]
              lg:text-[18px] 
              lg:leading-[24.59px]
              font-medium 
              uppercase 
              underline"
            >
              No thanks, I don&apos;t want this.
            </a>
          </div>
          {/* Sixth Row (need to work on) */}
          <div
            className="
            w-[320px]
            h-[77px]
            gap-[16px]
          lg:w-[550px] 
          lg:h-[88px] 
          justify-between 
          items-center 
          flex"
          >
            <Image
              className="
              w-[48px]
              h-[48px]
              lg:w-[88px] 
              lg:h-[88px]"
              src={satisfaction}
              alt="satisfaction_guarantee"
              priority={true}
              placeholder="blur"
            />
            <div
              className="
            w-[256px]
            h-[77px]
            text-[12px]
            leading-[16.8px]

            lg:w-[446px] 
            lg:h-[78px] 
            text-[#4D5254] 
            lg:text-[16px] 
            lg:leading-[22.4px] relative"
            >
              <div
                className="absolute
              top-[-2.8px]
               lg:top-[-5.8px]"
              >
                <span className="font-normal">
                  If you are not completely thrilled with your Clarifion - We
                  have a{" "}
                </span>
                <span className="font-bold">30 day satisfaction guarantee</span>
                <span className="">
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
