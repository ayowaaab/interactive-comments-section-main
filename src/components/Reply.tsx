import Button from "./Button";

const Reply = () => {
  return (
    <div className="flex justify-between gap-4 m-5 p-5 bg-white rounded-lg shadow-sm">
      <div>
        <img src="./images/avatars/image-amyrobson.png" alt="avatar" />
      </div>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-[1px] focus:ring-primary-moderateBlue"
        rows={3}
        defaultValue={
          "@amyrobson. yeah. the attention to detail with the design is"
        }
      />
      <div>
        <Button text="reply" type="active" />
      </div>
    </div>
  );
};

export default Reply;
