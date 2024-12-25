import CommentBlock from "./components/CommentBlock";
import Reply from "./components/Reply";
import * as data from "./assets/data.json";
const App = () => {
  return (
    <div className="w-3/5 mx-auto">
      {data.comments.map((comment) => (
        <div>
          <CommentBlock key={comment.id} comment={comment} />
          <div className="border-l-2 pl-12 ml-20 ">
            {comment.replies.map((reply) => (
              <CommentBlock key={reply.id} reply={reply} />
            ))}
          </div>
        </div>
      ))}
      <Reply />
    </div>
  );
};

export default App;
