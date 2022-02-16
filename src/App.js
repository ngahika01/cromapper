import './App.css';
// import RightMenu from './RightMenu';
// import MiniDrawer from './MiniDrawer';
// import OpenStreetMap from './OpenStreetMap';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import ForgotPass from './ForgotPass';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        <Route path="/recovery" element={<ForgotPass />}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
