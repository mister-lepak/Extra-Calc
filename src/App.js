import "./App.css";
import { useFetch } from "./components/util";
import Calculator from "./components/Calculator";

function App() {
  const [data, dataLoading, dataHasError] = useFetch("models/MOCK_DATA.json");

  return (
    <>
      {dataLoading ? (
        <div>Loading...</div>
      ) : dataHasError ? (
        <div>Error Load Occured</div>
      ) : (
        <div>
          <Calculator data={data} />
        </div>
      )}
    </>
  );
}

export default App;
