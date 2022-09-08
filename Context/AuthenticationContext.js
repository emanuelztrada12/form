import React, { useState, useEffect, useRef } from "react";
import Login from "../components/LoginPage";
import { useRouter } from "next/router";

function AuthenticationContext({ children }) {
  const router = useRouter();
  const ISSERVER = typeof window === "undefined";
  const token = !ISSERVER && localStorage.getItem("token");
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
    if (!token) {
      router.push("/LoginPage");
    }
  }, []);

  setTimeout(async function () {
    await localStorage.removeItem("token");
    router.push("/LoginPage");
  }, 86400000);

  return !isSSR && <>{children}</>;
}

export default AuthenticationContext;
