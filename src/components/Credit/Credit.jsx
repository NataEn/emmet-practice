import React from "react";

export default function Credit({ cheatSheet = true }) {
  return (
    <p className={`credit`}>
      EmmetPractice is created by NataEn •
      <a href="https://github.com/NataEn" target="_blank" rel="noreferrer">
        GitHub
      </a>{" "}
      •
      <a
        href="https://www.linkedin.com/in/natalieen/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      •
      {cheatSheet ? (
        <a href="/cheatsheet">Emmet Cheat-Sheet</a>
      ) : (
        <a href="/">Emmet practice</a>
      )}
    </p>
  );
}
