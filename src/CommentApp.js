import React from "react";
import CommentList from "./components/CommentList";
import "./styles.css";

export default function CommentApp() {
  return (
    <div className="comment-app">
      <CommentList />
    </div>
  );
}
