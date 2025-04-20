
import { useState } from "react";

function User() {
  const [display, setdisplay] = useState(true);

  return (
    <div>
      

      {
        display? <h1>Test user Component</h1>:null
      }

      <button onClick={() => setdisplay(!display)}>User Component</button>
    </div>
  );
}

export default User;
