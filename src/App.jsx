
import Header from "./components/custom/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
