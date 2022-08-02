import React, { useState, useEffect, useRef } from "react";
import CheckeoutPage from './components/CheckeoutPage';
import Layout from './components/Layout/Layout'; 

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
      setIsSSR(false);
  }, []);

  return !isSSR && (
      <div>
        <Layout>
          <CheckeoutPage/>
        </Layout>
      </div>
  );
}
