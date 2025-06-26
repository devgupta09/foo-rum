import { useState } from "react";
import plus from "../assets/createFeed/plus.svg";
import mic from "../assets/createFeed/mic.svg";
import video from "../assets/createFeed/video.svg";
import send from "../assets/createFeed/send.svg";
import deleteIcon from "../assets/createFeed/delete.svg";
import boldIcon from "../assets/createFeed/text-bold.svg";
import italicIcon from "../assets/createFeed/text-italic.svg";
import underline from "../assets/createFeed/text-underline.svg";
import unorderedList from "../assets/createFeed/list-unordered.svg";
import orderedList from "../assets/createFeed/list-ordered.svg";
import quotes from "../assets/createFeed/quotes.svg";
import script from "../assets/createFeed/script.svg";
import emotionSmile from "../assets/createFeed/emotion-smile.svg";
import { useAppContext } from "../context/appContext";

const CreateFeedCard = () => {
  const { isAuthorized, addFeed, checkAuth, setShowAuthenticationModal } =
    useAppContext();
  const [description, setDescription] = useState("");

  const showFunctinalityNotImplementedAlert = () => {
    if (isAuthorized) {
      alert("Functionality not impletemented");
    } else {
      setShowAuthenticationModal(true);
    }
  };

  const handleAddFeed = () => {
    if (!isAuthorized) {
      setShowAuthenticationModal(true);
    } else if (description.trim()) {
      addFeed(description);
      setDescription("");
    } else {
      alert("Please write something to post.");
    }
  };

  return (
    <div className="bg-[#00000008] p-2 md:w-[35rem] w-full rounded-3xl">
      <div className="bg-white min-h-48 flex flex-col gap-3 rounded-2xl shadow">
        <div className="flex flex-col gap-2 p-2 min-h-40">
          <div className="flex justify-between items-center w-full">
            <div className="bg-[#00000008] rounded-xl flex items-center md:gap-4 gap-1 md:pr-4 pr-2">
              <span className="p-1">
                <select
                  defaultValue="Paragraph"
                  onChange={() =>
                    checkAuth(showFunctinalityNotImplementedAlert)
                  }
                >
                  <option value="Paragraph">Paragraph</option>
                </select>
              </span>
              <span className="flex items-center gap-2 md:gap-4">
                <span className="bg-white p-1 md:w-8 md:h-8 w-6 h-6 shadow flex justify-center items-center rounded-[10px]">
                  <img
                    src={boldIcon}
                    alt="boldIcon"
                    className="md:h-4 h-3 cursor-pointer"
                    onClick={() =>
                      checkAuth(showFunctinalityNotImplementedAlert)
                    }
                  />
                </span>
                <img
                  src={italicIcon}
                  alt="italicIcon"
                  className="md:h-4 h-3 cursor-pointer"
                  onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
                />
                <img
                  src={underline}
                  alt="underline"
                  className="md:h-4 h-3 cursor-pointer"
                  onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
                />
              </span>
              <span className="flex items-center md:gap-4 gap-2 border-l-2 border-r-2 px-4 border-[#0000001A]">
                <img
                  src={unorderedList}
                  alt="unorderedList"
                  className="md:h-4 h-3 cursor-pointer"
                  onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
                />
                <img
                  src={orderedList}
                  alt="orderedList"
                  className="md:h-4 h-3 cursor-pointer"
                  onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
                />
              </span>
              <span className="flex items-center md:gap-4 gap-2">
                <img
                  src={quotes}
                  alt="quotes"
                  className="md:h-4 h-3 cursor-pointer"
                  onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
                />
                <img
                  src={script}
                  alt="script"
                  className="md:h-4 h-3 cursor-pointer"
                  onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
                />
              </span>
            </div>
            <span
              className="bg-[#FF000026] rounded-[10px] md:w-10 md:h-10 w-8 h-8 flex justify-center items-center p-1 cursor-pointer"
              onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
            >
              <img src={deleteIcon} alt="delete" className="h-4" />
            </span>
          </div>
          <div className="flex gap-2">
            <img
              src={emotionSmile}
              alt="emotionSmile"
              className="h-5 mt-1 cursor-pointer"
              onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
            />
            <textarea
              placeholder="How are you feeling today?"
              rows={4}
              className="w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onClick={() => checkAuth(() => {})}
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-t-[#D9D9D9] p-2">
          <span className="flex gap-3 items-center">
            <span className="h-6 w-6 rounded-[10px] flex justify-between items-center bg-[#0000000F] p-1">
              <img
                src={plus}
                alt="add"
                className="h-5 cursor-pointer"
                onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
              />
            </span>
            <img
              src={mic}
              alt="microphone"
              className="h-5 cursor-pointer"
              onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
            />
            <img
              src={video}
              alt="video"
              className="h-5 cursor-pointer"
              onClick={() => checkAuth(showFunctinalityNotImplementedAlert)}
            />
          </span>
          <img
            src={send}
            alt="send"
            className="h-6 cursor-pointer"
            onClick={() => checkAuth(handleAddFeed)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateFeedCard;
