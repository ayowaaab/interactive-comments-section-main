import Button from "./Button";
import Counter from "./Counter";
interface Props {
  onOpen: () => void;
  comment?: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    replies: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      replyingTo: string;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
    }[];
  };
  reply?: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  };
}
const CommentBlock: React.FC<Props> = ({ comment, reply, onOpen }) => {
  return (
    <>
      <div className="hidden md:block">
        <CommentDesktop comment={comment} reply={reply} onOpen={onOpen} />
      </div>
      <div className="md:hidden block">
        <CommentMobile comment={comment} reply={reply} onOpen={onOpen} />
      </div>
    </>
  );
};
const CommentDesktop: React.FC<Props> = ({ comment, reply, onOpen }) => {
  const data = comment! || reply!;
  const currentUser = data.user.username === "juliusomo";
  return (
    <div className="bg-white flex items-start justify-between gap-5 shadow-sm p-5 m-5 rounded-lg">
      <Counter init={data.score} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center md:gap-2 gap-1">
            <img
              src={data.user.image.png}
              className="md:w-10 w-7"
              alt="avatar"
            />
            <h1 className="text-neutral-darkBlue font-semibold flex gap-1 items-center text-sm lg:text-lg">
              {data.user.username}
              {currentUser && (
                <span className="bg-primary-moderateBlue text-white px-2 font-bold text-xs md:text-sm py-1 rounded-sm">
                  you
                </span>
              )}
            </h1>
            <span className="text-neutral-grayishBlue text-sm lg:text-lg">
              {data.createdAt}
            </span>
          </div>
          {!currentUser ? (
            <Button text="Reply" type="iconButton" icon="reply" />
          ) : (
            <div className="flex gap-3">
              <div onClick={onOpen}>
                <Button
                  color="red"
                  text="Delete"
                  type="iconButton"
                  icon="delete"
                />
              </div>
              <div>
                <Button text="Edit" type="iconButton" icon="edit" />
              </div>
            </div>
          )}
        </div>
        <p className="text-neutral-grayishBlue text-xs md:text-sm lg:text-lg">
          {data.content}
        </p>
      </div>
    </div>
  );
};
const CommentMobile: React.FC<Props> = ({ comment, reply, onOpen }) => {
  const data = comment! || reply!;
  const currentUser = data.user.username === "juliusomo";
  return (
    <div className="bg-white flex items-start justify-between gap-5 shadow-sm p-5 m-5 rounded-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center md:gap-2 gap-1">
            <img
              src={data.user.image.png}
              className="md:w-10 w-7"
              alt="avatar"
            />
            <h1 className="text-neutral-darkBlue font-semibold flex gap-1 items-center text-sm lg:text-lg">
              {data.user.username}
              {currentUser && (
                <span className="bg-primary-moderateBlue text-white px-2 font-bold text-xs md:text-sm py-1 rounded-sm">
                  you
                </span>
              )}
            </h1>
            <span className="text-neutral-grayishBlue text-sm lg:text-lg">
              {data.createdAt}
            </span>
          </div>
        </div>
        <p className="text-neutral-grayishBlue text-xs md:text-sm lg:text-lg">
          {data.content}
        </p>
        <div className="flex justify-between items-center">
          <Counter init={data.score} />

          {!currentUser ? (
            <Button text="Reply" type="iconButton" icon="reply" />
          ) : (
            <div className="flex gap-3">
              <div onClick={onOpen}>
                <Button
                  color="red"
                  text="Delete"
                  type="iconButton"
                  icon="delete"
                />
              </div>
              <div>
                <Button text="Edit" type="iconButton" icon="edit" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CommentBlock;
