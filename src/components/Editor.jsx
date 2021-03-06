import React from "react";

export default function Editor({ title, lines, children }) {
  return (
    <div
      className={`editor editor__${
        title && title.toLowerCase().split(" ").join("-")
      }`}
    >
      <h2 className="editor_title">{title}:</h2>
      {children}
    </div>
  );
}
