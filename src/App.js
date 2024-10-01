import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:userId" element={<Post />} />
            <Route path="*" element={<h2>Not Found</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
