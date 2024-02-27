"use client";
import {Switch} from "@nextui-org/react";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

import {IThemeSwitcherProps} from "@/types/theme.type";
import {SunIcon} from "@/assets/icons/sun-icon";
import {MoonIcon} from "@/assets/icons/moon-icon";

export function ThemeSwitcher({switch_color}: IThemeSwitcherProps): React.ReactNode {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    if (!theme) {
      setTheme("dark");
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Switch
      className="z-40"
      color={switch_color || "primary"}
      defaultSelected={theme === "light"}
      size="lg"
      thumbIcon={({isSelected, className}) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
      onClick={handleTheme}
    />
  );
}
