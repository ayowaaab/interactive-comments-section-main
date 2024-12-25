import Button from "./Button";
import Counter from "./Counter";
interface Props {
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
const CommentBlock: React.FC<Props> = ({ comment, reply }) => {
  const data = comment! || reply!;
  const currentUser = data.user.username === "juliusomo";
  return (
    <div className="bg-white flex items-start justify-between gap-5 shadow-sm p-5 m-5 rounded-lg">
      <Counter init={data.score} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img src={data.user.image.png} className="w-10" alt="avatar" />
            <h1 className="text-neutral-darkBlue font-semibold flex gap-1 items-center  ">
              {data.user.username}
              {currentUser && (
                <span className="bg-primary-moderateBlue text-white px-2 font-bold text-sm py-1 rounded-sm">
                  you
                </span>
              )}
            </h1>
            <span className="text-neutral-grayishBlue">{data.createdAt}</span>
          </div>
          {!currentUser ? (
            <Button text="Reply" type="iconButton" icon="reply" />
          ) : (
            <div className="flex gap-2">
              <Button text="Delete" type="iconButton" icon="delete" />
              <Button text="Edit" type="iconButton" icon="edit" />
            </div>
          )}
        </div>
        <p className="text-neutral-grayishBlue text-lg">{data.content}</p>
      </div>
    </div>
  );
};

export default CommentBlock;
