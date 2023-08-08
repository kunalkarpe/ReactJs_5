import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import SinglePage from "./components/SinglePage";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singlepage/shows/:id" element={<SinglePage />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
