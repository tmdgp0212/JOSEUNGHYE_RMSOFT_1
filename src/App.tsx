import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import GlobalStyle from "./style/GlobalStyle";
import Layout from "./components/common/Layout";
import AnimatedCursor from "./components/common/AnimatedCursor";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AnimatedCursor />
      <Layout />
      <Router />
    </BrowserRouter>
  );
}

export default App;
