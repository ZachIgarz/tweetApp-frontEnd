import React, { useState } from "react";

import SignigSingUp from "./page/SigninSingUp";
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [ user, setUser ] = useState({name:"Zach"});

  return (
    <div>
      {user ?(
        <div>
          <SignigSingUp />
        </div>
      ) : (
        <h1>No Estas Logueado</h1>
      )}
      <ToastContainer
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      />
    </div>
  );
}
