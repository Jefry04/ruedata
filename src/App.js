import "./App.css";
import { useEffect } from "react";
import { getAllPets } from "./utils/getData";

function App() {
  useEffect(() => {
    getAllPets();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
