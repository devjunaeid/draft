"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "../../../public/sun.svg";
import moonIcon from "../../../public/moon.svg";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {

  const getLocalTheme = () =>{
    if(typeof window !== undefined){
      const theme = localStorage.getItem("theme");
      console.log(theme)
      return theme || "light"
    }
  }
  const [tog, setTog] = useState<boolean>();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const value = getLocalTheme()
    if(value == "light"){
      setTog(false);
      setTheme("light");
    }else{
      setTog(true);
      setTheme("dark");
    }
  }, []);

  const handleClick = () => {
    setTog(!tog);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // TO avoid Hydration Missmatch "Next JS theme Provider" .
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Image
        onClick={handleClick}
        src={tog ? sunIcon : moonIcon}
        className="w-8 h-8"
        alt="Theme Switcher"
        priority={true}
      />
    </div>
  );
};

export default ThemeSwitch;
