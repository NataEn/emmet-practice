import "./App.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor";

import expand from "emmet";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useState, useEffect } from "react";

const codeMirrorOptions = {
  mode: "xml",
  // theme: "material-ocean",
  theme: "liquibyte",
  lineNumbers: true,
};

const p = expand("p>a");
function App() {
  const [currentEmmet, setCurrentEmmet] = useState("p.myClass");
  const [interpretedHTML, setInterpretedHTML] = useState("");

  useEffect(() => {
    setInterpretedHTML(() => expand(currentEmmet));
  }, [currentEmmet]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header_h1">Emmet practice</h1>
        <div className="header_exercises">exercises dropdown</div>
      </header>
      <Instructions />
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
      <Editor key="expectedHTML" title="Expected HTML" />
      <p>my emmet p tag: {p}</p>
    </div>
  );
}

export default App;
