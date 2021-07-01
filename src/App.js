import "./App.css";
import "animate.css/animate.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import Data from "./practiceData.json";
import NextBtn from "./components/NextBtn/NextBtn";

import expand, { extract } from "emmet";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useState, useEffect } from "react";

const codeMirrorOptions = {
  mode: "xml",
  theme: "liquibyte",
  lineNumbers: true,
};

function App() {
  const [currentEmmet, setCurrentEmmet] = useState("p.myClass");
  const [interpretedHTML, setInterpretedHTML] = useState("");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
  const [userData, setUserData] = useState({});

  const data = Data;
  const resetResults = () => {
    setCurrentLevel(0);
    //clear local storage
  };
  console.log("game data", data);

  const source = "Hello world ul.tabs>li";
  const dataEmmet = extract(source, 22); // { abbreviation: 'ul.tabs>li' }

  console.log(expand(dataEmmet.abbreviation)); // <ul class="tabs"><li></li></ul>

  useEffect(() => {
    setInterpretedHTML(() => expand(currentEmmet));
  }, [currentEmmet]);

  // clear the inputs in the
  const clearInputs = () => {
    setCurrentLevel("");
  };

  const setNextQuestion = () => {
    if (isCorrectAnswer) {
      if (currentLevel >= 0 && currentLevel <= 22) {
        setCurrentLevel(currentLevel + 1);
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
        reset={resetResults}
      />
      <Instructions
        instructions={data[currentLevel].instructions}
        info={data[currentLevel].info}
        greeting={currentLevel === 0 ? data[currentLevel].greeting : null}
      />
      <Editor key="emmetEditor" title="Emmet">
        <CodeMirror
          value={currentEmmet}
          options={codeMirrorOptions}
          onBeforeChange={(editor, data, value) => {
            setCurrentEmmet(value);
          }}
          onChange={(editor, data, value) => {
            console.log(value);
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
          onBeforeChange={(editor, data, value) => {
            setInterpretedHTML(value);
          }}
          onChange={(editor, data, value) => {
            console.log("interprited HTMl", value);
          }}
        />
      </Editor>
      <Editor key="expectedHTML" title="Expected HTML">
        <CodeMirror
          value={data[currentLevel].expectedHTML}
          options={codeMirrorOptions}
        />
      </Editor>
      <p className="credit">some credits...</p>
    </div>
  );
}

export default App;
