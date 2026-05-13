import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  return (
    <div>
      <h1>Test</h1>
      <Spinner />
      <ErrorMessage message="Something went wrong, while loading recipes..." />
    </div>
  );
}

export default App;
