import React, { useState, useEffect } from "react";
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

  return !isSSR && <>{children}</>;
}

export default AuthenticationContext;
