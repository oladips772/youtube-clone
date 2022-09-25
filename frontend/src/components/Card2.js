/** @format */
import React from "react";

function Card2() {
  return (
    <div className="flex flex-col my-4 cursor-pointer bg-white rounded">
      <div className=" flex flex-col">
        <img
          src="https://9to5mac.com/wp-content/uploads/sites/6/2019/07/2019-MacBook-Pro-Touch-Bar-Dock-Pock.jpg?quality=82&strip=all"
          className="h-[170px] w-full mr-4"
          alt=""
        />
        <div className="flex flex-col p-2">
          <h2 className="text-lg font-[600]">Send Notifications</h2>
          <p>
            ! Nemo quisquam rerum commodi veritatis, itaque hic, magnam
            explicabo ipsa, iste aliquam quis voluptate alias nesciunt provident
            recusandae!
          </p>
        </div>
        <div className="flex items-center mt-2 p-2">
          <img
            src="https://9to5mac.com/wp-content/uploads/sites/6/2019/07/2019-MacBook-Pro-Touch-Bar-Dock-Pock.jpg?quality=82&strip=all"
            className="h-[30px] w-[30px] rounded-full mr-4"
            alt=""
          />
          <h2 className="font-[600]">Web Dev Simplified</h2>
        </div>
      </div>
    </div>
  );
}

export default Card2;
