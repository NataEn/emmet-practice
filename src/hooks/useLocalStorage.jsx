import React, { useState } from "react";
//stored object in local storage: [{isCorrect:Boolean,answer:String }]

export default function useLocalAnswers() {
  //create initial empty array with 24 objects for each question
  const levels = 24;
  const answersArr = new Array(levels).fill({ isCorrect: false, answer: "" });
  //set initial state function to useState so logic is only executed once
  const [storedAnswers, setAnswers] = useState(() => {
    const localAnswers = window.localStorage.getItem("emmetAnswers");
    debugger;
    if (localAnswers) {
      return JSON.parse(localAnswers);
    } else {
      window.localStorage.setItem("emmetAnswers", JSON.stringify(answersArr));
      return answersArr;
    }
  });
  // const setStoredAnswers = (index, isCorrect, answer) => {
  //   setAnswers(() => {
  //     const newArr = [...storedAnswers];
  //     newArr[index].isCorrect = isCorrect;
  //     newArr[index].answer = answer;
  //     window.localStorage.setItem("emmetAnswers", JSON.stringify(newArr));
  //     return newArr;
  //   });
  const setStoredAnswers = (newLocalStorage) => {
    setAnswers(newLocalStorage);
  };

  const resetStoredAnswers = () => {
    window.localStorage.setItem("emmetAnswers", JSON.stringify(answersArr));
    return window.localStorage.getItem("emmetAnswers");
  };

  return [storedAnswers, setStoredAnswers, resetStoredAnswers];
}
