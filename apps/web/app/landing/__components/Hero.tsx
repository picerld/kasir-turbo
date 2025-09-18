"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bus, Car, Train } from "lucide-react";
import { motion } from "motion/react";
import { LocationSearch } from "./LocationSearch";

export default function Hero() {
  const services = [
    {
      icon: Car,
      title: "Angkutan Umum",
      desc: "Find cheap flights worldwide",
      active: true,
    },
    {
      icon: Bus,
      title: "Bus",
      desc: "Book hotels at best prices",
      active: false,
    },
    {
      icon: Train,
      title: "Kereta Api",
      desc: "Rent cars for your journey",
      active: false,
    },
  ];
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center pt-16 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b dark:bg-gradient-to-r from-primary/20 dark:from-primary/5 to-accent/10 rounded-3xl blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-32">
        <motion.div
          className="inline-block mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge className="rounded-full border-none text-sm px-6 py-2 bg-primary text-white shadow-lg">
            ✈️ Eksplore Bandung
          </Badge>
        </motion.div>

        <motion.h1
          className="relative z-10 mx-auto max-w-4xl text-center text-5xl font-bold md:text-6xl lg:text-7xl mb-14 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Perjalanan Kamu{" "}
          <span className="text-primary">Dimulai Dari Sini</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-secondary/50 rounded-full"
        >
          {services.map((service, index) => (
            <Button
              key={index}
              variant={service.active ? "default" : "ghost"}
              size="sm"
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                service.active
                  ? "bg-primary text-white shadow-sm"
                  : "hover:bg-secondary text-muted-foreground"
              }`}
            >
              <service.icon className="w-4 h-4" />
              {service.title}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="w-full max-w-5xl"
        >
          <LocationSearch />
        </motion.div>
      </div>
    </div>
  );
}
