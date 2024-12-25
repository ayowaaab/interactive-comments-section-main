import CommentBlock from "./components/CommentBlock";
import Reply from "./components/Reply";
import * as data from "./assets/data.json";
import DeleteDialog from "./components/DeleteDialog";
import { useState } from "react";
const App = () => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const handelClose = () => {
    setShowDeleteDialog(false);
  };
  const handelOpen = () => {
    setShowDeleteDialog(true);
  };
  return (
    <div className=" xl:w-3/5 lg:w-4/5 mx-auto">
      {data.comments.map((comment) => (
        <div key={comment.id}>
          <CommentBlock onOpen={handelOpen} comment={comment} />
          <div className="border-l-2 md:pl-12 md:ml-20  ml-10">
            {comment.replies.map((reply) => (
              <CommentBlock key={reply.id} onOpen={handelOpen} reply={reply} />
            ))}
          </div>
        </div>
      ))}
      <Reply />
      {showDeleteDialog && (
        <DeleteDialog onClose={handelClose} show={showDeleteDialog} />
      )}
    </div>
  );
};

export default App;
