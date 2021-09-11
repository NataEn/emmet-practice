import React from "react";
import { StyledCredit, StyledCreditLink } from "./StyledCredit";

export default function Credit({ cheatSheet = true }) {
  return (
    <StyledCredit>
      EmmetPractice is created by NataEn •
      <StyledCreditLink
        href="https://github.com/NataEn"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </StyledCreditLink>{" "}
      •
      <StyledCreditLink
        href="https://www.linkedin.com/in/natalieen/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </StyledCreditLink>
      •
      {cheatSheet ? (
        <StyledCreditLink href="/cheatsheet">
          Emmet Cheat-Sheet
        </StyledCreditLink>
      ) : (
        <StyledCreditLink href="/">Emmet practice</StyledCreditLink>
      )}
    </StyledCredit>
  );
}
