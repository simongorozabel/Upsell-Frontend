"use client";

import Image from "next/image";

import { check_green, check_3, check_4 } from "../assets";

const Steps = () => {
  return (
    <div
      className="
    my-[24px]

    lg:my-[0px]
    lg:mt-[0px]
    lg:w-full 
    flex 
    items-center 
    justify-center"
    >
      <div
        className="
      w-[320px]
      h-[37px]
      
      flex 
      lg:w-[1245px] 
      lg:h-[40px]
      lg:items-center 
      justify-between 
      lg:absolute 
      lg:top-[271px]"
      >
        <div
          className="
        h-[37px]
        w-[67px]
        flex 
        flex-col
        gap-[8px]

        lg:flex-row
        items-center 
        justify-center 
        lg:gap-[20px] 
        lg:h-[40px]
        lg:w-[240px]
        "
        >
          <Image
            className="
          w-[20px]
          h-[20px]

          lg:w-[40px]
          lg:h-[40px]
          "
            priority={true}
            src={check_green}
            alt="step 1"
            placeholder="blur"
          />
          <p
            className="
          text-[12px]
          leading-[13.2px]
          h-[9px]
          flex
          items-center
          justify-center

          lg:h-[14px]
          font-normal 
          lg:text-[20px] 
          capitalize 
          lg:leading-[22px]"
          >
            <span
              className="hidden
            lg:inline-block"
            >
              Step 1 :
            </span>{" "}
            Cart Review
          </p>
        </div>
        <div
          className="
          h-[37px]
          w-[55px]
          flex 
          flex-col
          gap-[8px]

        lg:flex-row
        items-center 
        justify-center 
        lg:gap-[20px] 
        lg:h-[40px]
        lg:w-[223px]
        "
        >
          <Image
            className="
          w-[20px]
          h-[20px]

          lg:w-[40px]
          lg:h-[40px]
          "
            priority={true}
            src={check_green}
            alt="step 2"
            placeholder="blur"
          />
          <p
            className="
            text-[12px]
            leading-[13.2px]
            h-[9px]
            flex
            items-center
            justify-center

          lg:h-[14px]
          font-normal 
          lg:text-[20px] 
          capitalize 
          lg:leading-[22px]"
          >
            <span
              className="hidden
            lg:inline-block"
            >
              Step 2 :
            </span>{" "}
            Checkout
          </p>
        </div>
        <div
          className="
          h-[37px]
          w-[75px]
          flex 
          flex-col
          gap-[8px]

        lg:flex-row
        items-center 
        justify-center 
        lg:gap-[20px] 
        lg:h-[40px]
        lg:w-[261px]
        "
        >
          <Image
            className="
          w-[20px]
          h-[20px]

          lg:w-[40px]
          lg:h-[40px]
          "
            src={check_3}
            alt="step 3"
            priority={true}
            placeholder="blur"
          />
          <p
            className="
            text-[12px]
            leading-[13.2px]
            h-[9px]
            flex
            items-center
            justify-center

            lg:h-[14px]
          font-bold 
          lg:text-[20px] 
          capitalize 
          lg:leading-[22px]"
          >
            <span
              className="hidden
            lg:inline-block"
            >
              Step 3 :
            </span>{" "}
            Special Offer
          </p>
        </div>
        <div
          className="
          h-[37px]
          w-[74px]
          flex 
          flex-col
          gap-[8px]
 
        lg:flex-row
        items-center 
        justify-center 
        lg:gap-[20px]  
        lg:h-[40px]
        lg:w-[255px]
        "
        >
          <Image
            className="
          w-[20px]
          h-[20px]

          lg:w-[40px]
          lg:h-[40px]
          "
            src={check_4}
            alt="step 4"
            priority={true}
            placeholder="blur"
          />
          <p
            className="
            text-[12px]
          leading-[13.2px]
          h-[9px]
          flex
          items-center
          justify-center

          lg:h-[14px]
          font-normal 
          lg:text-[20px] 
          capitalize 
          lg:leading-[22px]"
          >
            <span
              className="hidden
            lg:inline-block"
            >
              Step 4 :
            </span>{" "}
            Confirmation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
