import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  return (
    <div
      className="App"
      style={{
        width: "calc(100vw - (100vw - 100%))",
        height: "100vh",
        boxSizing: "border-box",
        padding:"0px",
        margin:"0px"
      }}
    >
      <Header />
      <Content />
    </div>
  );
}

export default App;
