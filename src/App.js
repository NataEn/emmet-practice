import "./App.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor";

import expand from "emmet";
import { UnControlled as CodeMirror } from "react-codemirror2";
import codemirror from "codemirror";

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
            // theme: "material-ocean",
            theme: "liquibyte",
            lineNumbers: true,
          }}
          onChange={(editor, data, value) => {
            console.log(value);
          }}
        />
      </Editor>
      <Editor key="resultHTML" title="Result HTML" />
      <Editor key="expectedHTML" title="Expected HTML" />
      <p>my emmet p tag: {p}</p>
    </div>
  );
}

export default App;
