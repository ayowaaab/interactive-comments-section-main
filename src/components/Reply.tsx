import Button from "./Button";

const Reply = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-4 m-5 p-5 bg-white rounded-lg shadow-sm">
          <div>
            <img src="./images/avatars/image-juliusomo.png" alt="avatar" />
          </div>
          <textarea
            className="w-full p-2 border text-xs md:text-sm lg:text-lg rounded-md focus:text-black text-neutral-grayishBlue focus:outline-none focus:ring-[1px] focus:ring-primary-moderateBlue"
            rows={3}
            placeholder="Add a comment..."
          />
          <div>
            <Button text="Send" type="button" />
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex-col m-5 p-5 bg-white rounded-lg shadow-sm">
          <textarea
            className="w-full p-2 border text-xs md:text-sm lg:text-lg rounded-md focus:text-black text-neutral-grayishBlue focus:outline-none focus:ring-[1px] focus:ring-primary-moderateBlue"
            rows={3}
            placeholder="Add a comment..."
          />
          <div className="flex justify-between gap-4">
            <div>
              <img className="w-10" src="./images/avatars/image-juliusomo.png" alt="avatar" />
            </div>
            <div>
              <Button text="Send" type="button" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reply;
