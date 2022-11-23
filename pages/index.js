import React, { useState, useEffect, useRef } from "react";
import CheckeoutPage from '../components/CheckeoutPage';
import Header from "../components/Header/Header";


 function Home() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
      setIsSSR(false);
  }, []);

  return !isSSR && (
    <>
      <Header/>
      <CheckeoutPage/>
    </>
  );
}

export default Home;
