/** @format */

import React from "react";

function Comment() {
  return (
    <div className="flex my-4 p-[2px]">
      <img
        src="https://9to5mac.com/wp-content/uploads/sites/6/2019/07/2019-MacBook-Pro-Touch-Bar-Dock-Pock.jpg?quality=82&strip=all"
        className="h-[35px] w-[35px] rounded-full mr-4"
        alt=""
      />
      <div>
        <div className="flex flex-row items-center ">
          <h3 className="font-[600] mr-[6px]">oladipupo akorede</h3>
          <p className="text-sm text-gray-600 font-bold">1 day ago</p>
        </div>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit amet
          aliquid repudiandae! Nemo quisquam rerum commodi veritatis, itaque
          hic, magnam explicabo ipsa, iste aliquam quis voluptate alias nesciunt
          provident recusandae!
        </span>
      </div>
    </div>
  );
}

export default Comment;
