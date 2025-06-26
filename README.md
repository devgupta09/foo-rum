# Foo-rum: Social Feed App

A simple social feed application built with **React**, **TypeScript**, **Vite**, and the Context API. This app demonstrates authentication, protected routes, posting to a feed, and modern React best practices—all without third-party state management libraries.

## Features

- Authentication modal (Sign In / Sign Up)
- Protected routes using React Router
- Add new posts to a global feed
- Random user and emoji assignment for each post
- Responsive and accessible UI
- Context API for global state (auth, feed, modal)
- Code-splitting with React.lazy and Suspense

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/      # Reusable UI components (FeedCard, CreateFeedCard, Header, etc.)
  context/         # App context for global state
  pages/           # Page-level components (DefaultLayout, AuthenticationModal)
  assets/          # SVGs and images
  App.tsx          # Main app with routing
  main.tsx         # Entry point
```

## Usage

- Click **Sign Up** or **Sign In** to authenticate (dummy, no backend).
- Once authenticated, you can add new posts to the feed.
- Each post is assigned a random user avatar and emoji.
- Log out from the header to return to the authentication modal.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Context API](https://react.dev/reference/react/useContext)
- [Tailwind CSS](https://tailwindcss.com/) (or similar utility classes)

## License

MIT
