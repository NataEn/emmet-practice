import "./App.css";
import expand from "emmet";
const p = expand("p>a");
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="main">my new emmet practice site</div>
      my emmet p tag: {p}
    </div>
  );
}

export default App;
