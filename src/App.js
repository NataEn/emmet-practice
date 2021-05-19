import "./App.css";
import "../node_modules/animate.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor/Editor";
import Nav from "./components/ExercisesNav/ExercisesNav";
import Header from "./components/Header/Header";
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

  useEffect(() => {
    setInterpretedHTML(() => expand(currentEmmet));
  }, [currentEmmet]);

  return (
    <div className="App">
      <Header />
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
      <p className="credit">some credits...</p>
    </div>
  );
}

export default App;
