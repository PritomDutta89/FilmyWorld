import Cards from "./components/Cards";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/addmovie" element={<AddMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
