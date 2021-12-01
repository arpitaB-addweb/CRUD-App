import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addbook from './mycomponent/Addbook';
import Navbar from './mycomponent/Navbar';
import Home from './mycomponent/Home'
import Edit from './mycomponent/Edit'
import View from './mycomponent/View';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addpost from './mycomponent/Addpost';
import Editpost from './mycomponent/Editpost';
import Viewpost from './mycomponent/Viewpost';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/addbook" element={<Addbook />} />
          
          <Route path="edit/:id" element={<Edit />} />
          <Route path="view/:id" element={<View />} />

          <Route path="/addpost" element={<Addpost />} />
          <Route path="editpost/:id" element={<Editpost />} />
          <Route path="viewpost/:id" element={<Viewpost />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
