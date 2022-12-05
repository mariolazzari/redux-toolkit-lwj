import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  incrementByAmount,
  decrement,
} from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogsApiSlice";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);

  const { data = [], isFetching, isError } = useFetchBreedsQuery(numDogs);

  const onIncrementClick = () => {
    dispatch(increment());
  };

  const onDecrementClick = () => {
    dispatch(decrement());
  };

  const onAmountClick = () => {
    dispatch(incrementByAmount(3));
  };

  return (
    <div className="App">
      <>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </>
      <h1>Vite + React & Redux Toolkit</h1>

      <div className="card">
        <h4>{count}</h4>
        <button onClick={onIncrementClick}>+</button>
        <button onClick={onDecrementClick}>-</button>
        <button onClick={onAmountClick}>+3</button>
      </div>

      <div>
        <select value={numDogs} onChange={e => setNumDogs(+e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <p className="read-the-docs">Dogs fetched: {data.length}</p>

      {isFetching && <p>Fetching breeds...</p>}
      {isError && <p className="read-the-docs">Error fetching breeds</p>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map(breed => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>
                <img src={breed.image.url} alt={breed.name} height="250" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
