import "./App.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor";

import expand from "emmet";
import { UnControlled as CodeMirror } from "react-codemirror2";
// import CodeMirror from 'react-codemirror2';
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");

const p = expand("p>a");
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header_h1">Emmet practice</h1>
        <div className="header_exercises">exercises dropdown</div>
      </header>
      <Instructions />
      <Editor key="emmetEditor" title="Emmet">
        <CodeMirror
          value="<h1>I ♥ react-codemirror2</h1>"
          options={{
            mode: "xml",
            theme: "material",
            lineNumbers: true,
          }}
          onChange={(editor, data, value) => {}}
        />
      </Editor>
      <Editor key="resultHTML" title="Result HTML" />
      <Editor key="expectedHTML" title="Expected HTML" />
      <p>my emmet p tag: {p}</p>
    </div>
  );
}

export default App;
