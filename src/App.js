import React, { useState } from "react";

import SignigSingUp from "./page/SigninSingUp";

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
    </div>
  );
}
