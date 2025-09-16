"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./button";
import { motion } from "motion/react";

export const MenuItem = ({
  href,
  item,
  children,
  index = 0,
}: {
  href: string;
  item: string;
  children?: React.ReactNode;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
    >
      <Link href={href}>
        <p className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
          {item}
        </p>
      </Link>
      {children && <div>{children}</div>}
    </motion.div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex items-center justify-center w-full px-6"
    >
      <Link href="/" className="absolute left-6">
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
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="flex justify-center bg-white dark:bg-black rounded-full border border-transparent dark:border-white/[0.2] shadow-input px-8 py-3 space-x-12"
      >
        {children}
      </motion.div>

      <div className="absolute right-6 flex gap-5">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Masuk
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Dapatkan Aplikasi
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};
