import React from "react";
interface Props {
  text: string;
  type: "button" | "iconButton";
  icon?: string;
  color?: "primary" | "secondary" | "red";
}
const Button: React.FC<Props> = ({
  text,
  type,
  icon = "",
  color = "primary",
}) => {
  switch (type) {
    case "button":
      return <SimpleButton color={color} text={text} />;
    case "iconButton":
      return <IconButton color={color} text={text} icon={icon} />;
    default:
      return null;
  }
};

const IconButton = ({
  text,
  color,
  icon,
}: {
  text: string;
  icon: string;
  color: string;
}) => {
  const colorTheme =
    color === "red"
      ? "text-primary-softRed"
      : color === "secondary"
      ? "text-neutral-grayishBlue"
      : "text-primary-moderateBlue";
  return (
    <div className="hover:opacity-50 cursor-pointer flex items-center gap-1">
      <img src={`./images/icon-${icon}.svg`} alt="reply-icon" />
      {text === "Delete" ? (
        <p className={`text-xs lg:text-sm ${colorTheme} font-medium`}>{text}</p>
      ) : (
        <p className={`text-xs lg:text-sm ${colorTheme} font-medium`}>{text}</p>
      )}
    </div>
  );
};
const SimpleButton = ({ text, color }: { text: string; color: string }) => {
  const colorClass =
    color === "red"
      ? "bg-primary-softRed"
      : color === "secondary"
      ? "bg-neutral-grayishBlue"
      : "bg-primary-moderateBlue";

  return (
    <button
      className={`
        text-xs lg:text-sm 
        text-white font-medium rounded-lg 
        py-3 px-6 hover:opacity-50 uppercase ${colorClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
