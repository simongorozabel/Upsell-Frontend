"use client";

import { useState } from "react";
import {
  check,
  delivery,
  money_back,
  heart,
  logo,
  mcafee_logo,
  norton_logo,
  left_arrow,
  rigth_arrow,
} from "../assets";
import Image from "next/image";

const Header = () => {
  const offer = {
    one: "30-DAY SATISFACTION GUARANTEE",
    two: "FREE DELIVERY ON ORDERS OVER $40.00",
    three: "50.000+ HAPPY CUSTOMERS",
    four: "100% Money Back Guarantee",
  };
  const icons = {
    one: check,
    two: delivery,
    three: money_back,
    four: heart,
  };

  const [message, setMessage] = useState(offer.one);
  const [icon, setIcon] = useState(icons.one);

  const handleRigth = () => {
    if (icon === icons.one && message == offer.one) {
      setIcon(icons.two);
      setMessage(offer.two);
    }
    if (icon === icons.two && message == offer.two) {
      setIcon(icons.three);
      setMessage(offer.three);
    }
    if (icon === icons.three && message == offer.three) {
      setIcon(icons.four);
      setMessage(offer.four);
    }
    if (icon === icons.four && message == offer.four) {
      setIcon(icons.one);
      setMessage(offer.one);
    }
  };

  const handleLeft = () => {
    if (icon === icons.one && message == offer.one) {
      setIcon(icons.four);
      setMessage(offer.four);
    }
    if (icon === icons.two && message == offer.two) {
      setIcon(icons.one);
      setMessage(offer.one);
    }
    if (icon === icons.three && message == offer.three) {
      setIcon(icons.two);
      setMessage(offer.two);
    }
    if (icon === icons.four && message == offer.four) {
      setIcon(icons.three);
      setMessage(offer.three);
    }
  };

  return (
    <>
      <div
        className="
        w-[360px]
        h-[42px]
        justify-between
        py-[10px]
        px-[20px]
        
        flex
        text-[#FFFFFF]
        text-[12px]
        leading-[12px]
        items-center
        
        lg:h-[50px]
        lg:w-[1500px]
        bg-[#252F3D]
        lg:justify-evenly
        lg:gap-2

        lg:py-[0px]
        lg:px-[0px]
    "
      >
        {/* Mobile */}
        <button
          className="
        lg:hidden

        w-[20px]
        h-[20px]
        flex
        items-center
        justify-center
        "
          onClick={handleLeft}
        >
          <Image
            className="
          lg:hidden
          "
            src={left_arrow}
            alt="left_arrow"
            placeholder="blur"
          />
        </button>
        <div
          className="
          lg:hidden

          font-medium
          flex 
          gap-1 
          items-center
        "
        >
          <Image
            src={icon}
            alt="guarantee"
            priority={true}
            placeholder="blur"
          />
          <h3>{message}</h3>
        </div>
        <button
          className="
        lg:hidden

        w-[20px]
        h-[20px]
        flex
        items-center
        justify-center
        "
          onClick={handleRigth}
        >
          <Image
            className="
          lg:hidden
          "
            src={rigth_arrow}
            alt="rigth_arrow"
            placeholder="blur"
          />
        </button>

        {/* Desktop Offer Header */}
        <div
          className="
          hidden

          lg:font-medium
          lg:flex 
          lg:gap-1 
          lg:items-center
        "
        >
          <Image
            src={check}
            alt="guarantee"
            priority={true}
            placeholder="blur"
          />
          <h3>30-DAY SATISFACTION GUARANTEE</h3>
        </div>
        <div
          className="
          hidden

        lg:flex 
        lg:gap-1 
        lg:items-center"
        >
          <Image
            src={delivery}
            alt="guarantee"
            priority={true}
            placeholder="blur"
          />
          <h3>FREE DELIVERY ON ORDERS OVER $40.00</h3>
        </div>
        <div
          className="
        hidden

        lg:flex 
        lg:gap-1 
        lg:items-center"
        >
          <Image
            src={heart}
            alt="guarantee"
            priority={true}
            placeholder="blur"
          />
          <h3>50.000+ HAPPY CUSTOMERS</h3>
        </div>
        <div
          className="
        hidden

        lg:flex 
        lg:gap-1 
        lg:items-center"
        >
          <Image
            src={money_back}
            alt="guarantee"
            priority={true}
            placeholder="blur"
          />
          <h3>100% Money Back Guarantee</h3>
        </div>
      </div>

      <div
        className="
      h-[60px]
      py-[20px]
      px-[20px]

      lg:h-[96px] 
      flex 
      justify-center 
      lg:py-[30px] 
      lg:px-[127px]"
      >
        <div
          className="
          w-[320px]
          flex 
          justify-between
          
          
          lg:w-[1500px]
          "
        >
          <Image
            className="
        w-[106.67px]
        h-[20px]

        lg:w-[192px] 
        lg:h-[36px]"
            src={logo}
            alt="logo"
            priority={true}
            placeholder="blur"
          />
          <div
            className="
        gap-[16px]
        w-[101px]
        h-[16px]

        flex 
        lg:gap-[32px] 
        lg:w-[202px] 
        lg:h-[32px]"
          >
            <Image
              src={mcafee_logo}
              alt="mcafee_logo"
              className="
            w-[44px]
            h-[16px]

            lg:w-[88px] 
            lg:h-[32px]"
              priority={true}
              placeholder="blur"
            />
            <Image
              src={norton_logo}
              alt="norton_logo"
              className="
            w-[41px]
            h-[16px]

            lg:w-[82px] 
            lg:h-[32px]"
              priority={true}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
