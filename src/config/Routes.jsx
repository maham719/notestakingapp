import { BrowserRouter,Routes,Route } from "react-router-dom"
import Intropage from "../components/Intropage"
import Login from "../components/Login"
import Signup from "../components/Signup"
import Dashboard from "../components/Dashboard"
import { useEffect, useState } from "react"
import {auth} from "../config/firebase.js"
import { onAuthStateChanged } from "firebase/auth"
const AppRoutes = () => {
    const [user, setUser] = useState(null)
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);   // <-- keep the real user object
  });
  return () => unsubscribe();
}, []);
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Intropage/>}/>
        <Route path="/login" element={user?<Dashboard currentUser={user} />:<Login/>}/>
        <Route path="/signup" element={user?<Dashboard currentUser={user}/>:  <Signup/>}/>
        <Route path="/dashboard" element={user?<Dashboard currentUser={user}/>:<Login/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
