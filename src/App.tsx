import { Navbar } from "./components/Navbar/Navbar";
import Routes from "./router";
import "./styles.scss";

function App() {
  return (
    <>
      <Navbar />
      <div id="app">
        <Routes />
      </div>
    </>
  )
}

export default App
