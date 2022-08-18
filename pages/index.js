import React, { useState, useEffect, useRef } from "react";
import CheckeoutPage from '../components/CheckeoutPage';
import Layout from '../components/Layout/Layout'; 

 function Home() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
      setIsSSR(false);
  }, []);

  return !isSSR && (
        <Layout>
          <CheckeoutPage/>
        </Layout>
  );
}

export default Home;
