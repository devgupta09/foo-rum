import user1 from "../assets/user/user1.svg";
import user2 from "../assets/user/user2.svg";
import user3 from "../assets/user/user3.svg";

export interface FeedDetails {
  userProfile: string;
  userName: string;
  posted: string;
  emoji: string;
  description: string;
}

export const feedList: FeedDetails[] = [
  {
    userProfile: user1,
    userName: "Theresa Webb",
    posted: "5 mins ago",
    emoji: "🥴",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    userProfile: user2,
    userName: "John Doe",
    posted: "18 mins ago",
    emoji: "🤞",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    userProfile: user3,
    userName: "Jane Doe",
    posted: "22 mins ago",
    emoji: "💀",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
