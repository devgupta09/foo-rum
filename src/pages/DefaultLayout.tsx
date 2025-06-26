import React from "react";
import { useAppContext } from "../context/appContext";
import AuthenticationModal from "./AuthenticationModal";
import CreateFeedCard from "../components/CreateFeedCard";
import FeedCard from "../components/FeedCard";

const DefaultLayout: React.FC = () => {
  const { showAuthenticationModal, feedList } = useAppContext();
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-4">
      <CreateFeedCard />
      {feedList.map((feed, index) => (
        <FeedCard key={index} feedDetails={feed} />
      ))}
      {showAuthenticationModal && <AuthenticationModal />}
    </div>
  );
};

export default DefaultLayout;
