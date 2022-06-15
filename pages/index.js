import React, { useState, useEffect, useRef } from "react";
import CheckeoutPage from './components/CheckeoutPage'

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
      setIsSSR(false);
  }, []);

  return !isSSR && (
      <div>
        <CheckeoutPage/>
      </div>
  );
}
