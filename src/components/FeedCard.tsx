import React from "react";
import type { FeedDetails } from "../types";
import heart from "../assets/feedCard/heart.svg";
import comment from "../assets/feedCard/comment.svg";
import forward from "../assets/feedCard/forward.svg";
import { useAppContext } from "../context/appContext";

interface Proptype {
  feedDetails: FeedDetails;
}

const FeedCard: React.FC<Proptype> = ({ feedDetails }) => {
  const { checkAuth } = useAppContext();

  const showFunctinalityNotImplementedAlert = () => {
    alert("Functionality not impletemented");
  };

  return (
    <div className="bg-[#00000008] p-2 md:w-[35rem] w-full rounded-3xl flex flex-col gap-1">
      <div className="bg-white p-2 flex flex-col gap-3 rounded-2xl shadow py-4">
        <div className="flex gap-2">
          <img
            src={feedDetails.userProfile}
            alt="User profile"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <div className="flex flex-col">
            <span className="md:text-md text-sm font-semibold">
              {feedDetails.userName}
            </span>
            <span className="text-[#0000005E] text-sm">5 mins ago</span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="h-8 w-8 rounded-full p-2 bg-[#F2F2F2] flex justify-center items-center text-xl">
            {feedDetails.emoji}
          </span>
          <span className="text-[#000000D4] md:text-md text-sm">
            {feedDetails.description}
          </span>
        </div>
      </div>
      <div className="flex gap-4 m-2">
        <img
          src={heart}
          alt="like"
          className="h-5 cursor-pointer"
          onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
        />
        <img
          src={comment}
          alt="comment"
          className="h-5 cursor-pointer"
          onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
        />
        <img
          src={forward}
          alt="share"
          className="h-5 cursor-pointer"
          onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
        />
      </div>
    </div>
  );
};

export default FeedCard;
