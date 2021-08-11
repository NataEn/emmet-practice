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
      window.localStorage.setItem(
        "emmetAnswers",
        JSON.stringify(cleanAnswersArr)
      );
      return window.localStorage.getItem("emmetAnswers");
    }
  });

  useEffect(() => {
    window.localStorage.setItem("emmetAnswers", JSON.stringify(storedAnswers));
  }, [storedAnswers]);
  // const setStoredAnswers = (index, isCorrect, answer) => {
  //   setAnswers(() => {
  //     const newArr = [...storedAnswers];
  //     newArr[index].isCorrect = isCorrect;
  //     newArr[index].answer = answer;
  //     window.localStorage.setItem("emmetAnswers", JSON.stringify(newArr));
  //     return newArr;
  //   });
  const setStoredAnswers = (newAnswers) => {
    setAnswers(newAnswers);
  };

  const resetStoredAnswers = () => {
    window.localStorage.setItem(
      "emmetAnswers",
      JSON.stringify(cleanAnswersArr)
    );
    return window.localStorage.getItem("emmetAnswers");
  };

  return [storedAnswers, setStoredAnswers, resetStoredAnswers];
}
