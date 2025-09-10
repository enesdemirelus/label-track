"use client";

import React from "react";
import { Button, Text, Avatar, useMantineColorScheme } from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <header
        className={`flex p-2 justify-between border-b shadow-sm ${
          isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <Link href="/">
          <div
            className={`flex items-center gap-1 px-2 py-1 border rounded-lg shadow-sm hover:shadow-md hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer ${
              isDark
                ? "border-gray-600 bg-gray-800"
                : "border-gray-300 bg-white"
            }`}
          >
            <Avatar src="https://github.com/shadcn.png" size={30} />
            <Text fw={700} size="lg" c={isDark ? "white" : "black"}>
              Label Track
            </Text>
          </div>
        </Link>
        <div
          className={`flex items-center gap-1 px-2 py-1 border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${
            isDark ? "border-gray-600 bg-gray-800" : "border-gray-300 bg-white"
          }`}
        >
          <ColorSchemeToggle />
          <UserButton />
        </div>
      </header>
    </>
  );
}

export default Header;
