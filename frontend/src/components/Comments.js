/** @format */
import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="pt-2 border-t border-slate-300 mt-6">
      Comments
      <div className="flex">
        <input
          placeholder="Comment"
          className="flex-1 items-center h-[40px] outline-none bg-transparent p-2 text-lg"
        />
        <button>submit</button>
      </div>
      {/* ? */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
