"use client";

const Title = () => {
  return (
    <div
      className="
    mt-[32px]
    w-[360px]

    lg:mt-[0px]
    flex 
    items-center 
    lg:w-full 
    lg:relative
    justify-center
    "
    >
      <div
        className="
      w-[320px]
      h-[104px]
      relative

      flex 
      flex-col 
      items-center 
      gap-[24px] 
      lg:w-[636px] 
      lg:h-[76px]  
      lg:absolute 
      lg:top-[-19px]"
      >
        <div
          className="
        text-[32px]
        leading-[44.8px]
        text-center
        h-[68px]
        absolute
        top-[-11.5px]

      text-black 
        lg:text-[48px] 
        font-normal 
        capitalize 
        lg:leading-[48px] 
        lg:h-[35px] 
        lg:w-full "
        >
          Wait ! your order in progress.{" "}
        </div>
        <div
          className="
        absolute
        bottom-[-6px]

        lg:text-neutral-600 
        lg:text-[24px] 
        lg:font-normal 
        lg:capitalize 
        lg:leading-[24px] 
        lg:h-[17px] "
        >
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span
            className="
          hidden
          lg:inline
          "
          >
            adipiscing
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Title;
