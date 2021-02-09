import "./App.css";
import Instructions from "./components/Instructions";
import Editor from "./components/Editor";
import expand from "emmet";
const p = expand("p>a");
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Instructions />
      <Editor key="emmetEditor" title="Emmet" />
      <Editor key="resultHTML" title="Result HTML" />
      <Editor key="expectedHTML" title="Expected HTML" />
      <p>my emmet p tag: {p}</p>
    </div>
  );
}

export default App;
