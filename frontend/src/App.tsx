import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HospitalAdminLayout from "./layouts/HospitalAdminLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HospitalAdminLayout />
      </div>
    </>
  );
}

export default App;
