import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import GlobalState from './Context/Global/GlobalState';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalState>
          <Router/>
        </GlobalState>
      </BrowserRouter> 
    </div>
  );
}

export default App;