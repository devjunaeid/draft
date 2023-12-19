"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

type props = {
  children: string | React.JSX.Element | React.JSX.Element[];
};

const Provider = ({ children }: props) => {
  // TO avoid Hydration Missmatch "Next JS theme Provider" .
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
