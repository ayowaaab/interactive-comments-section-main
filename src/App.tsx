import CommentBlock from "./components/CommentBlock";
import Reply from "./components/Reply";
import * as data from "./assets/data.json";
const App = () => {
  return (
    <div className=" xl:w-3/5 lg:w-4/5 mx-auto">
      {data.comments.map((comment) => (
        <div>
          <CommentBlock key={comment.id} comment={comment} />
          <div className="border-l-2 md:pl-12 md:ml-20  ml-10">
            {comment.replies.map((reply) => (
              <CommentBlock key={reply.id+10} reply={reply} />
            ))}
          </div>
        </div>
      ))}
      <Reply />
    </div>
  );
};

export default App;
