import React from "react";
interface Props {
  text: string;
  type: "active" | "inactive";
}
const Button: React.FC<Props> = ({ text, type }) => {
  return type === "inactive" ? (
    <Inactive text={text} />
  ) : (
    <Active text={text} />
  );
};

const Inactive = ({ text }: { text: string }) => {
  return (
    <div className="hover:opacity-50 cursor-pointer flex items-center gap-2">
      <img src="./images/icon-reply.svg" alt="reply-icon" />
      <p className="text-lg text-primary-moderateBlue font-medium">{text}</p>
    </div>
  );
};
const Active = ({ text }: { text: string }) => {
  return (
    <div className="hover:opacity-50 cursor-pointer flex items-center gap-2">
      <img src="./images/icon-reply.svg" alt="reply-icon" />
      <p className="text-lg text-primary-moderateBlue font-medium">{text}</p>
    </div>
  );
};

export default Button;
