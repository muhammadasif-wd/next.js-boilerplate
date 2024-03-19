"use client";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

import {DeviceIcon} from "@/icons/device-icon";
import {MoonIcon} from "@/icons/moon-icon";
import {SunIcon} from "@/icons/sun-icon";

export function ThemeSwitcher(): React.ReactNode {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <Dropdown placement="bottom-start" size="sm">
      <DropdownTrigger>
        <Button isIconOnly variant="flat">
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with themes" variant="flat">
        <DropdownItem
          key="dark"
          className={theme === "dark" ? "active" : ""}
          endContent={<MoonIcon />}
          onClick={() => handleThemeChange("dark")}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="light"
          className={theme === "light" ? "active" : ""}
          endContent={<SunIcon />}
          onClick={() => handleThemeChange("light")}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="system"
          className={theme === "system" ? "active" : ""}
          endContent={<DeviceIcon />}
          onClick={() => handleThemeChange("system")}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
