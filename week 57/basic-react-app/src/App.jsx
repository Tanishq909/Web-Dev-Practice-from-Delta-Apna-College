import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
  <>
    <ProductTab />
    <MsgBox userName="tanishq" textColor="yellow" />
    <MsgBox userName="apnacollege" textColor="blue" />
    <MsgBox userName="aman" textColor="green" />
  </>
  );
}

export default App;