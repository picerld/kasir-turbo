"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bus, Car, Train } from "lucide-react";
import { motion } from "motion/react";
import { LocationSearch } from "./LocationSearch";
import { useState, useEffect } from "react";

export default function Hero() {
  const [selectedService, setSelectedService] = useState<number>(1);

  const services = [
    {
      id: 1,
      icon: Car,
      title: "Angkutan Umum",
      desc: "Find cheap flights worldwide",
    },
    { id: 2, icon: Bus, title: "Bus", desc: "Book hotels at best prices" },
    {
      id: 3,
      icon: Train,
      title: "Kereta Api",
      desc: "Rent cars for your journey",
    },
  ];

  // Auto cycle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedService((prev) => {
        const currentIndex = services.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex]!.id;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [services]);

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center pt-16 pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/10 rounded-3xl blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-32">
        <motion.div
          className="inline-block mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge
            variant="secondary"
            className="rounded-full border-none text-sm px-6 py-2 text-white shadow-lg"
          >
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
          className="relative flex flex-wrap justify-center gap-2 mb-12 p-1 bg-secondary/50 rounded-full"
        >
          {services.map((service) => {
            const isSelected = service.id === selectedService;
            return (
              <div key={service.id} className="relative">
                {isSelected && (
                  <motion.div
                    layoutId="selectedIndicator"
                    className="absolute inset-0 rounded-full bg-primary pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedService(service.id)}
                  className={`relative flex items-center gap-2 px-6 py-2 rounded-full transition-colors duration-300 ${
                    isSelected ? "text-white" : "text-muted-foreground"
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  {service.title}
                </Button>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="w-full max-w-5xl"
        >
          <LocationSearch />
        </motion.div>
      </div>
    </div>
  );
}
