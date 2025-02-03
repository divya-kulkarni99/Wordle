import { useState, useEffect } from 'react';
import Wordle from './component/Wordle';
function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((json) => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <h3>Rules</h3>
      <p>1. Enter a 5-letter word.</p>
      <p>
        2. If a letter turns yellow, it is correct but in the wrong position.
      </p>
      <p>
        3. If a letter turns green, it is correct and in the right position.
      </p>
      <p>4. If a letter turns gray, it does not exist in the word.</p>

      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
