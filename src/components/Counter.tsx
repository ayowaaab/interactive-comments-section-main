import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-neutral-veryLightGray p-3 rounded-lg">
      <img
        onClick={() => setCounter(counter + 1)}
        className="w-6 cursor-pointer"
        src="./images/icon-plus.svg"
        alt="plus-icon"
      />
      <p className="font-bold text-primary-moderateBlue">{counter}</p>
      <img
        onClick={() => setCounter(counter - 1)}
        className="w-6 cursor-pointer"
        src="./images/icon-minus.svg"
        alt="minus-icon"
      />
    </div>
  );
};

export default Counter;
