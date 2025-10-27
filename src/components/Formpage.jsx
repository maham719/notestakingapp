import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import Button from '../components/Button'
import Signup from '../components/Signup'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from './Dashboard';

const Formpage = () => {
  const [type, setType] = useState("signup")
  const onclick=(t)=>{
    setType(t)
  }
  const notyf = new Notyf({
    position: {
      x: 'center',
      y: 'top',
    },})
  
useEffect(()=>{
 const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   setType("dashboard")
    const uid = user.uid;
    // ...
  } else {
   setType("signup")
  }
  return () => unsubscribe()
});
},[])

  return (
    <div>
      {type === "dashboard" ? (
        <Dashboard />
      ) : type === "signup" ? (
        <Signup>
          <Button
            text="Login"
            slogan="Already have an account?"
            onclick={() => setType("login")}
          />
        </Signup>
      ) : (
        <Login>
          <Button
            text="Register"
            slogan="Don't have an account?"
            onclick={() => setType("signup")}
          />
        </Login>
      )}
    </div>
  )
}

export default Formpage


