import React, { createContext, useContext, useState, useMemo } from "react";
import { feedList as initialFeedList, type FeedDetails } from "./feedList";
import user1 from "../assets/user/user1.svg";
import user2 from "../assets/user/user2.svg";
import user3 from "../assets/user/user3.svg";

const userImages = [user1, user2, user3];
const emojis = ["🥴", "🤞", "💀", "😊", "🎉", "🔥", "💡", "👍", "❤️", "🤔"];

type AppContextType = {
  isAuthorized: boolean;
  showAuthenticationModal: boolean;
  feedList: FeedDetails[];
  login: () => void;
  logout: () => void;
  addFeed: (description: string) => void;
  checkAuth: (callback: () => void) => void;
  setShowAuthenticationModal: (val: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  const [feedList, setFeedList] = useState<FeedDetails[]>(initialFeedList);

  const login = () => {
    setIsAuthorized(true);
    setShowAuthenticationModal(false);
  };

  const logout = () => {
    setIsAuthorized(false);
  };

  const checkAuth = (callback: () => void) => {
    if (isAuthorized) {
      callback();
    } else {
      setShowAuthenticationModal(true);
    }
  };

  const addFeed = (description: string) => {
    const randomImage =
      userImages[Math.floor(Math.random() * userImages.length)] ?? user1;
    const randomEmoji =
      emojis[Math.floor(Math.random() * emojis.length)] ?? "🤔";
    const newFeed: FeedDetails = {
      description,
      emoji: randomEmoji,
      posted: "Just Now",
      userName: "Demo User",
      userProfile: randomImage,
    };
    setFeedList((prev) => [newFeed, ...prev]);
  };

  const contextValue = useMemo(
    () => ({
      isAuthorized,
      showAuthenticationModal,
      feedList,
      login,
      logout,
      addFeed,
      checkAuth,
      setShowAuthenticationModal,
    }),
    [
      isAuthorized,
      showAuthenticationModal,
      feedList,
      login,
      logout,
      addFeed,
      checkAuth,
      setShowAuthenticationModal,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
