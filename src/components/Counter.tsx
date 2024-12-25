import React from "react";

const Counter = ({ init = 0 }: { init: number }) => {
  const [counter, setCounter] = React.useState(init);
  return (
    <div className="flex flex-row md:flex-col items-center justify-center gap-3 bg-neutral-veryLightGray p-3 rounded-lg">
      <img
        className="w-6 cursor-pointer hover:opacity-50"
        onClick={() => setCounter(counter + 1)}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(34%) sepia(42%) saturate(1139%) hue-rotate(204deg) brightness(93%) contrast(88%)",
        }}
        src="./images/icon-plus.svg"
        alt="plus-icon"
      />
      <p className="font-bold text-xs md:text-sm lg:text-lg text-primary-moderateBlue">
        {counter}
      </p>
      <img
        onClick={() => setCounter(counter - 1)}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(34%) sepia(42%) saturate(1139%) hue-rotate(204deg) brightness(93%) contrast(88%)",
        }}
        className="w-6 cursor-pointer hover:opacity-50"
        src="./images/icon-minus.svg"
        alt="minus-icon"
      />
    </div>
  );
};

export default Counter;
