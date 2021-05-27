import React, { useState } from "react";

export default function NextBtn({ isCorrect, setQuestion, currentLevel }) {
  const [btnClassName, setBtnClassName] = useState("disabled ");

  const updateClassName = () => {
    if (isCorrect) {
      setBtnClassName("correct");
    } else {
      setBtnClassName("wrong ");
    }
  };
  const handleClick = () => {
    setBtnClassName("wrong");
    setQuestion();
  };
  return (
    <button className={`btn-next ${btnClassName}`} onClick={handleClick}>
      Next
    </button>
  );
}
