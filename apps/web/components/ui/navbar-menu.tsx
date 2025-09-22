"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { buttonVariants } from "./button";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

interface MenuItemProps {
  href: string;
  item: string;
  children?: React.ReactNode;
  index?: number;
  scrolled?: boolean;
  isLightMode?: boolean;
}

export const MenuItem = ({
  href,
  item,
  children,
  index = 0,
  scrolled = false,
  isLightMode = true,
}: MenuItemProps) => {
  const textColor = scrolled
    ? isLightMode
      ? "text-black"
      : "text-white"
    : isLightMode
      ? "text-black"
      : "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
    >
      <Link href={href}>
        <p className={`cursor-pointer hover:opacity-[0.9] ${textColor}`}>
          {item}
        </p>
      </Link>
      {children && <div>{children}</div>}
    </motion.div>
  );
};

interface MenuProps {
  children: React.ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isLightMode = theme === "light";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-4 z-[999] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6 py-2 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-primary-foreground rounded-full outline-secondary outline-2"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <Image
            src="/"
            alt="Kasir"
            width={124}
            height={24}
            className="h-3 w-auto"
          />
        </Link>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="flex justify-center space-x-10"
        >
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement<MenuItemProps>(child)) {
              return React.cloneElement(child, {
                scrolled,
                isLightMode,
                index,
              });
            }
            return child;
          })}
        </motion.div>
      </div>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full!" })}
          >
            Yuk Travelling!
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};
