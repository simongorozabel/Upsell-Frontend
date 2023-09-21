"use client";

import Image from "next/image";

import { lock } from "../assets";
const Footer = () => {
  return (
    <footer
      className="
      w-[360px]
      h-[102px]
      mt-[32px]
      gap-[16px]
      flex
      flex-col
      p-[20px]
  
  lg:p-0
  lg:flex-row
  lg:gap-0
  items-center
  lg:mt-[61px]
  lg:w-[1500px]
  lg:h-[88px]
  lg:relative
  bg-[#252F3D]
  text-[#FFFFFF]
  "
    >
      <div
        className="
        w-[301px]
        h-[33px]
        gap-[12px]
        flex

      lg:h-[40px]
      lg:absolute
      lg:top-[24px]
      lg:left-[127px]
      px-[0]
      py-[8px]
      lg:gap-[16px]
      "
      >
        <div
          className="
        text-[12px]
        leading-[16.8px]

        font-normal
        lg:text-[16px]
        lg:leading-[22.4px]
        "
        >
          Copyright (C) 2023
        </div>{" "}
        |{" "}
        <div
          className="
          text-[12px]
          leading-[16.8px]
        font-normal
        lg:text-[16px]
        lg:leading-[22.4px]
        "
        >
          clarifonsupport@clarifon.com
        </div>
      </div>
      <div
        className="
        text-[12px]
        leading-[18px]
        flex
        items-center
        gap-[16px]
      lg:absolute
      lg:top-[36px]
      lg:left-[1120px]
      font-normal
      lg:text-[16px]
      capitalize
      lg:leading-[24px]
      "
      >
        <Image
          className="
          w-[13px]
          h-[13px]
        lg:w-[16px]
        lg:h-[16px]"
          src={lock}
          alt="lock"
        />
        Secure 256-Bit SSL Encryption.
      </div>
    </footer>
  );
};

export default Footer;
