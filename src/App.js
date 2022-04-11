import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import BottomNavbar from "./Components/Navbar/BottomNavbar";
import Home from "./Components/Home/Home";
import Announcements from './Components/Announcements/Announcements';
import General from "./Components/DiscussionForums/General";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Opportunities from "./Components/Opportunities/Opportunities";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/DiscussionForums/:branchId" element={<General/>}/>
          <Route path="/DiscussionForums/:branchId/:postId" element={<Home/>}/>
          <Route path="/Announcements/:groupId" element={<Announcements/>}/>
          <Route path="/Opportunities" element={<Opportunities/>}/>
        </Routes>
        <BottomNavbar/>
      </div>
    </Router>
  );
}

export default App;
