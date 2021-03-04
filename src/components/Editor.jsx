import React from "react";

export default function Editor({ title, lines, children }) {
  return (
    <div
      className={`editor editor__${
        title && title.toLowerCase().split(" ").join("-")
      }`}
    >
      {title}
      {children}
    </div>
  );
}
