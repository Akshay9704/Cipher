import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Main from "./Components/Main";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function SignInRoute(props) {
  return <Signin setSigninUser={props.setSigninUser} />;
}

function App() {
  const [user, setSigninUser] = useState({});

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route exact path="/Profile" element={ user && user._id ? (<SignInRoute setSigninUser={setSigninUser} />) : (<Profile setSigninUser={setSigninUser}/>)}/>
        <Route
          path="/Signin"
          element={<Signin setSigninUser={setSigninUser} />}
        />
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
