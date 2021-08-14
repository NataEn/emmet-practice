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
    console.log("useEffect on localStorage hook", storedAnswers);
    window.localStorage.setItem("emmetAnswers", JSON.stringify(storedAnswers));
    console.log("useEffect on localStorage hook", storedAnswers);
  }, [storedAnswers]);

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

  // const setStoredAnswers = (index, isCorrect, answer) => {
  //   setAnswers(() => {
  //     const newArr = [...storedAnswers];
  //     newArr[index].isCorrect = isCorrect;
  //     newArr[index].answer = answer;
  //     window.localStorage.setItem("emmetAnswers", JSON.stringify(newArr));
  //     return newArr;
  //   });

  return [storedAnswers, setStoredAnswers, resetStoredAnswers];
}
