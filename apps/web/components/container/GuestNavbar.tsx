"use client";
import React from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

const GuestNavbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-6xl mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem href="/" item="Home" />
        <MenuItem href="/about" item="About" />
        <MenuItem href="/contact" item="Contact" />
      </Menu>
    </div>
  );
};

export default GuestNavbar;
