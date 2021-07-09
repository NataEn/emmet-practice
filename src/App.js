import "./App.css";
import "animate.css/animate.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import Data from "./practiceData.json";
import NextBtn from "./components/NextBtn/NextBtn";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    const newHTML = expandWithErrors(trimmer(currentEmmet));
    setInterpretedHTML(newHTML);
  }, [currentEmmet]);

  useEffect(() => {
    const newEmmet = localAnswers[currentLevel].answer
      ? localAnswers[currentLevel].answer
      : "";
    setCurrentEmmet(newEmmet);
    setIsCorrectAnswer(() => localAnswers[currentLevel].answer || false);
  }, [currentLevel]);

  useEffect(() => {
    const newLocalStorage = [...localAnswers];
    newLocalStorage[currentLevel].isCorrect = isCorrectAnswer;
    newLocalStorage[currentLevel].answer = currentEmmet;

    setLocalAnswers(newLocalStorage);
  }, [isCorrectAnswer, currentEmmet, currentLevel]);

  const checkIfCorrect = () => {
    if (
      interpretedHTML === answersData[currentLevel].expectedHTML ||
      currentEmmet === answersData[currentLevel].expectedHTML
    ) {
      setIsCorrectAnswer(true);
    } else {
    }
  };

  const expandWithErrors = (abbriviation) => {
    try {
      return expand(abbriviation);
    } catch (err) {
      return `error:${err.message}`;
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
  const show = () => {
    const body = document.querySelector("body");
    if (body.clientHeight <= window.clientHeight) {
      return "show";
    } else {
      return "no-show";
    }
  };

  return (
    <div className="App" onScroll={show}>
      <Router>
        <Switch>
          <Route path="/">
            <div className="app-container">
              <div className="app-container_play">
                <Header
                  setLevel={setCurrentLevel}
                  currentLevel={currentLevel}
                  reset={resetLocalAnswers}
                />
                <Instructions
                  subject={answersData[currentLevel].subject}
                  instructions={answersData[currentLevel].instructions}
                  info={answersData[currentLevel].info}
                  greeting={
                    currentLevel === 0
                      ? answersData[currentLevel].greeting
                      : null
                  }
                />
                <Editor
                  key="emmetEditor"
                  title="Emmet"
                  className="editor__emmet"
                >
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
                {/* <p className="credit_1">
                  EmmetPractice is created by NataEn •
                  <a href="https://github.com/NataEn" target="_blank">
                    GitHub
                  </a>{" "}
                  •
                  <a
                    href="https://www.linkedin.com/in/natalieen/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </p> */}
              </div>
              <div className="app-container_results">
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
                    value={expandWithErrors(
                      answersData[currentLevel].expectedHTML
                    )}
                    options={codeMirrorOptions}
                  />
                </Editor>{" "}
              </div>{" "}
              <p className={`credit`}>
                EmmetPractice is created by NataEn •
                <a href="https://github.com/NataEn" target="_blank">
                  GitHub
                </a>{" "}
                •
                <a
                  href="https://www.linkedin.com/in/natalieen/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
