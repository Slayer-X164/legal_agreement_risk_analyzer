import { useEffect, useState } from "react"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Dark_Light_Switch = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    // load saved theme
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else if (!saved) {
      // system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  const toggleTheme = () => {
    const html = document.documentElement;

    if (dark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  }
  return (
    <button
      onClick={toggleTheme}
      className=" flex items-center  rounded-full  transition-colors duration-300"
    >
      <div
        className={` p-1.5 cursor-pointer relative  rounded-full bg-neutral-400/50 dark:bg-neutral-800 text-lg transform duration-300 flex items-center justify-center`}
      >

        {dark ? <IoMoonOutline className="text-neutral-400" /> : <IoSunnyOutline />}
      </div>
    </button>
  )
}

export default Dark_Light_Switch