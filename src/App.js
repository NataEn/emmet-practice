import "./App.css";
import "animate.css/animate.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import Data from "./practiceData.json";
import NextBtn from "./components/NextBtn/NextBtn";

import useLocalStorage from "./hooks/useLocalStorage";

import expand, { extract } from "emmet";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useState, useEffect } from "react";

const codeMirrorOptions = {
  mode: "xml",
  theme: "liquibyte",
  lineNumbers: true,
};

function App() {
  const [localAnswers, setLocalAnswers, resetLocalAnswers] = useLocalStorage();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentEmmet, setCurrentEmmet] = useState("");
  const [interpretedHTML, setInterpretedHTML] = useState("");

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(() =>
    localAnswers[currentLevel].isCorrect
      ? localAnswers[currentLevel].isCorrect
      : false
  );

  const answersData = Data;

  /** how to extract emmet from text
  const source = "Hello world ul.tabs>li";
  const dataEmmet = extract(source, 22); // { abbreviation: 'ul.tabs>li' }

  console.log(expand(dataEmmet.abbreviation)); // <ul class="tabs"><li></li></ul>
   */

  useEffect(() => {
    const trimmer = (str) => str.replace(/\s*$/, "");
    setInterpretedHTML(() => expand(trimmer(currentEmmet)));
  }, [currentEmmet]);

  useEffect(() => {
    setCurrentEmmet(function () {
      const emmet = localAnswers[currentLevel].answer;
      return emmet ? emmet : "";
    });
  }, [currentLevel]);

  useEffect(() => {
    setLocalAnswers(currentLevel, isCorrectAnswer, currentEmmet);
  }, [isCorrectAnswer, currentEmmet, currentLevel]);

  const checkIfCorrect = () => {
    if (interpretedHTML === answersData[currentLevel].expectedHTML) {
      setIsCorrectAnswer(true);
    } else {
    }
  };

  // clear the inputs in the
  const clearInputs = () => {
    setCurrentEmmet("");
    setInterpretedHTML("");
  };

  const setNextQuestion = () => {
    if (isCorrectAnswer) {
      if (currentLevel >= 0 && currentLevel <= 22) {
        setCurrentLevel(currentLevel + 1);
        clearInputs();
      } else if (currentLevel === 23) {
        console.log("all done");
      }
    } else {
      alert("pls correct your answer");
    }
  };

  return (
    <div className="App">
      <Header
        setLevel={setCurrentLevel}
        currentLevel={currentLevel}
        reset={resetLocalAnswers}
      />
      <Instructions
        instructions={answersData[currentLevel].instructions}
        info={answersData[currentLevel].info}
        greeting={
          currentLevel === 0 ? answersData[currentLevel].greeting : null
        }
      />
      <Editor key="emmetEditor" title="Emmet">
        <CodeMirror
          value={currentEmmet}
          options={codeMirrorOptions}
          onBeforeChange={(editor, data, value) => {
            setCurrentEmmet(value);
          }}
          onChange={(editor, data, value) => {
            setCurrentEmmet(value);
          }}
        />
        <NextBtn
          currentLevel={currentLevel}
          isCorrect={isCorrectAnswer}
          setQuestion={setNextQuestion}
        />
      </Editor>
      <Editor key="resultHTML" title="Result HTML">
        <CodeMirror
          value={interpretedHTML}
          options={codeMirrorOptions}
          onChange={(editor, data, value) => {
            checkIfCorrect();
          }}
        />
      </Editor>
      <Editor key="expectedHTML" title="Expected HTML">
        <CodeMirror
          value={answersData[currentLevel].expectedHTML}
          options={codeMirrorOptions}
        />
      </Editor>
      <p className="credit">some credits...</p>
    </div>
  );
}

export default App;
