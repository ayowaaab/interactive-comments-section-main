import Button from "./Button";
import Counter from "./Counter";

const Comment = () => {
  return (
    <div className="bg-white flex items-start justify-between gap-5 shadow-sm p-5 m-5 rounded-lg">
      <Counter />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src="./images/avatars/image-amyrobson.png"
              className="w-10"
              alt="avatar"
            />
            <h1 className="text-neutral-darkBlue font-semibold">amyrobson</h1>
            <span className="text-neutral-grayishBlue">1 Month ago</span>
          </div>
          <Button text="Reply" type="active" />
        </div>

        <p className="text-neutral-grayishBlue text-lg">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
    </div>
  );
};

export default Comment;
