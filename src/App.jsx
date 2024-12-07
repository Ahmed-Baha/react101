import "@mantine/core/styles.css";
import {BrowserRouter} from "react-router-dom"
import { Routes } from "react-router-dom";
import UseRoute from "./routes/useRoute";
import rootRoute from "./routes/rootRoute";
import { CounterProvider } from "./contexts/CounterContext__2";
function App() {
const RouterBuilder=UseRoute()
  return (
    
      <CounterProvider>
    <BrowserRouter>
    <Routes>
      {rootRoute(RouterBuilder)}
    </Routes>
    </BrowserRouter>
    </CounterProvider>
    );
}

export default App;
