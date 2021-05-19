import "./App.css";
import "../node_modules/animate.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import Data from "./practiceData.json";

import expand from "emmet";
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
  const data = Data;
  console.log("game data", data);

  useEffect(() => {
    setInterpretedHTML(() => expand(currentEmmet));
  }, [currentEmmet]);

  return (
    <div className="App">
      <Header setLevel={setCurrentLevel} currentLevel={currentLevel} />
      <Instructions text={data[currentLevel].instructions} />
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
        <button className="btn-next correct animation">Next</button>
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
