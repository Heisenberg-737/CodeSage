import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  DotsHorizontalIcon,
  PlusIcon,
  ViewGridIcon,
  LoginIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Navbar = (props: {
  pattern: string;
  patternBG: () => void;
  menuHandler: () => void;
  fontInitializer: () => void;
}) => {
  const { data: session } = useSession();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex h-full w-full items-center justify-center text-gray-300 hover:text-purple-500"
          role="button"
          onClick={() => setTheme("light")}
        >
    
        <MoonIcon className="h-8 w-8" />
        </button>
      );
    } else {
      return (
        <button
          className="flex h-full w-full items-center justify-center  text-black hover:text-orange-400"
          role="button"
          onClick={() => setTheme("dark")}
        >
        <SunIcon className="h-8 w-8" />
        </button>
      );
    }
  };

  const patternSelector = () => {
    if (props.pattern == "cross") {
      return <PlusIcon className="h-full w-full" />;
    } else if (props.pattern == "dots") {
      return <DotsHorizontalIcon className="h-full w-full" />;
    } else {
      return <ViewGridIcon className="h-full w-full" />;
    }
  };
  return (
    <nav className="border-b border-gray-600 bg-white font-general text-gray-900 shadow-lg duration-75 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center">
          <Image
            src="/images/logo.svg"
            alt="logo"
            className="svgfill-gpt mx-2 inline h-12 w-12 duration-150 hover:rotate-180"
            height={400}
            width={400}
          />
          <h1 className="relative hidden select-none text-2xl font-extrabold tracking-tight duration-75 dark:text-white sm:inline lg:text-4xl 2xl:text-[3rem]">
            <span className="dark:text-gpt">{"EditorGPT"}</span>
          </h1>
        </div>
        <div className="ml-auto flex ">
          <div className="hidden h-full items-center py-2 px-2 duration-75 dark:text-white lg:flex">
          </div>
          <div className="relative flex h-full items-center justify-center border-l border-gray-600 px-2 duration-75 hover:bg-gray-300 dark:hover:bg-white/10">
          {renderThemeChanger()}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
