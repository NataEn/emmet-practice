import React from "react";
import styled from "styled-components";
import "./Editor.css";

const StyledEditor = styled.div`
  border-radius: ${(props) => props.theme.border.radius};
  overflow: hidden;
  text-align: left;
`;

export default function Editor({ title, lines, children }) {
  return (
    <div
      className={`editor editor__${
        title && title.toLowerCase().split(" ").join("-")
      }`}
    >
      <h2 className="editor_title">{title}</h2>
      {children}
    </div>
  );
}
