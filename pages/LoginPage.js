import React, { useEffect, useState } from "react";
import Login from "../components/LoginPage";

function LoginPage(){
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <>
        <Login />
      </>
    )
  );
};

export default LoginPage;
