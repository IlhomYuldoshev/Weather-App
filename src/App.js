import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
  useEffect(async () => {
    const res = await axios.get("https://geolocation-db.com/json/bd2b0510-be5a-11ec-995d-ff924f0ab448")
    console.log(res.data);
  })

  return (
    <>
      <Navbar/>
      <Main/>
    </>
  );
}

export default App;
