import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  incrementByAmount,
  decrement,
} from "./features/counter/counterSlice";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const onIncrementClick = () => {
    dispatch(increment());
  };

  const onAmountClick = () => {
    dispatch(incrementByAmount(3));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onIncrementClick}>count is {count}</button>
        <button onClick={onAmountClick}>Increment by 3</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
