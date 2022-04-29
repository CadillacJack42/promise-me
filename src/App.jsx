import {
  getQuotes,
  getThenQuotes,
  tryGetQuotes,
  catchThenQuotes,
  finallyGetQuotes,
} from './services/promise-me';

export default function App() {
  return (
    <div>
      <button onClick={() => getQuotes()}>Get Quotes</button>
      <button onClick={() => getThenQuotes()}>Get Quotes W/ Then</button>
      <button onClick={() => tryGetQuotes()}>Get Quotes W/ Try</button>
      <button onClick={() => catchThenQuotes()}>Get Quotes W/ Catch</button>
      <button onClick={() => finallyGetQuotes()}>Get Quotes W/ Finally</button>
    </div>
  );
}
