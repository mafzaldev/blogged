import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BlogPage from "./pages/blog";
import Create from "./pages/create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
