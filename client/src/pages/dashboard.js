import React from "react";
import { Link } from "react-router-dom";
import PostList from "../components/Posts/PostList";

export default function Dashboard() {
  return (
    <div>
      <PostList />
      <div>
        <Link className="p-2" to="/">
          home
        </Link>
        <Link className="p-2" to="/profile">
          profile
        </Link>
        <Link className="p-2" to="/search">
          search
        </Link>
      </div>
    </div>
  );
}
