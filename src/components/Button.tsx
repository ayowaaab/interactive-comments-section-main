import React from "react";
interface Props {
  text: string;
  type: "button" | "iconButton";
  icon?: string;
}
const Button: React.FC<Props> = ({ text, type, icon = "" }) => {
  switch (type) {
    case "button":
      return <SimpleButton text={text} />;
    case "iconButton":
      return <IconButton text={text} icon={icon} />;
    default:
      return null;
  }
};

const IconButton = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <div className="hover:opacity-50 cursor-pointer flex items-center gap-2">
      <img src={`./images/icon-${icon}.svg`} alt="reply-icon" />
      {text === "Delete" ? (
        <p className="text-lg text-primary-softRed font-medium">{text}</p>
      ) : (
        <p className="text-lg text-primary-moderateBlue font-medium">{text}</p>
      )}
    </div>
  );
};
const SimpleButton = ({ text }: { text: string }) => {
  return (
    <button className="text-lg bg-primary-moderateBlue text-white font-medium rounded-lg py-3 px-6 hover:opacity-50 uppercase">
      {text}
    </button>
  );
};

export default Button;
