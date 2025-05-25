import { GlobalStyle } from "./styles/global";
import { GlobalProvider } from "./context/GlobalContext";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Home />
    </GlobalProvider>
  );
}

export default App;
