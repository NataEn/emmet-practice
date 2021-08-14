import React, { useState, useEffect } from "react";
//stored object in local storage: [{isCorrect:Boolean,answer:String }]

export default function useLocalStorage(numberOfLevels) {
  //create initial empty array with numberOfLevels

  const cleanAnswersArr = new Array(numberOfLevels).fill({
    isCorrect: false,
    answer: "",
  });
  //set initial state function to useState so logic is only executed once
  const [storedAnswers, setAnswers] = useState(() => {
    const localAnswers = window.localStorage.getItem("emmetAnswers");
    if (localAnswers) {
      return JSON.parse(localAnswers);
    } else {
      return cleanAnswersArr;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("emmetAnswers", JSON.stringify(storedAnswers));
  }, [storedAnswers]);

  const setStoredAnswers = (newAnswers) => {
    setAnswers(newAnswers);
  };

  return [storedAnswers, setStoredAnswers];
}
