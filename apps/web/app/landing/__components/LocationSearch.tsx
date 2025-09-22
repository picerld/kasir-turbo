"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, Search, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";

export const LocationSearch = () => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>("");

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      setShowResult(true);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="space-y-6 w-full max-w-6xl mx-auto">
          <Card className="p-6 md:p-8 bg-card/80 shadow-none backdrop-blur-sm border-2 border-primary">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Kamu Berada Di
                  </label>
                  <Input
                    placeholder="Maleber Utara"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="h-12 text-base bg-background border-border focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Tujuan Kamu
                  </label>
                  <Input
                    placeholder="Alun-Alun Kota Bandung"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="h-12 text-base bg-background border-border focus:border-ring focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleSearch}
                disabled={!fromLocation || !toLocation}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Cari Rute Kamu!
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
      <AnimatePresence>
        {showResult && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative p-6 bg-primary-foreground rounded-xl border border-border shadow-sm max-w-7xl w-full mx-auto my-10"
          >
            <button
              onClick={() => setShowResult(false)}
              className="absolute top-4 cursor-pointer right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center my-10 gap-2">
              <h2 className="text-3xl font-bold">Rute Terbaik Untuk Kamu!</h2>
              <p className="font-normal">
                🚍 Dari <span className="font-semibold">{fromLocation}</span> ke{" "}
                <span className="font-semibold">{toLocation}</span>
              </p>
            </div>

            <motion.div
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl border-2 border-primary/20 cursor-pointer hover:border-primary/40 transition-all duration-300 my-3 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/60"></div>

              <div className="absolute top-3 right-3">
                <Badge
                  variant="default"
                  className="bg-emerald-600 text-white font-semibold px-3 py-1 text-xs tracking-wide shadow-sm"
                >
                  TERCEPAT{" "}
                  <Star className="w-3! h-3! ml-1" fill="currentColor" />
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <span className="text-2xl">🚌</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">
                        Bus 23
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Jalur Utama Kota
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-background/60 rounded-lg border">
                      <span className="text-sm font-medium text-foreground">
                        🕒
                      </span>
                      <span className="font-semibold text-primary">
                        20 menit
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-background/60 rounded-lg border">
                      <span className="text-sm font-medium text-foreground">
                        💰
                      </span>
                      <span className="font-semibold text-green-600">
                        Rp 5.000
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-background/60 rounded-lg border">
                      <span className="text-sm font-medium text-foreground">
                        📍
                      </span>
                      <span className="font-semibold text-blue-600">
                        3 pemberhentian
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-4 opacity-60 hover:opacity-100 transition-opacity">
                  <ChevronRight
                    className="w-6 h-6 text-primary"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </motion.div>

            <div className="mt-6 space-y-4">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                className="relative p-5 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 rounded-xl border border-blue-200/60 dark:border-blue-800/40 cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">🚌</span>
                    </div>

                    {/* Route info */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        Bus 23
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <span>🕒</span>
                          <span className="font-medium">20 menit</span>
                        </span>
                        <span className="flex items-center gap-1 text-green-600">
                          <span>💰</span>
                          <span className="font-medium">Rp 5.000</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status and Arrow */}
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                    >
                      Tersedia
                    </Badge>
                    <svg
                      className="w-5 h-5 text-blue-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Train Route Option */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                className="relative p-5 bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/20 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 cursor-pointer hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-emerald-600"></div>

                {/* Best option indicator */}
                <div className="mb-3">
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-2 py-1">
                    Mode Hemat
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">🚆</span>
                    </div>

                    {/* Route info */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        Kereta Lokal
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <span>🕒</span>
                          <span className="font-medium text-emerald-600">
                            15 menit
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-green-600">
                          <span>💰</span>
                          <span className="font-medium">Rp 3.000</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status and Arrow */}
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                    >
                      Tersedia
                    </Badge>
                    <svg
                      className="w-5 h-5 text-emerald-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Additional Route Option */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                className="relative p-5 bg-gradient-to-r from-orange-50 to-yellow-100/50 dark:from-orange-950/20 dark:to-yellow-900/20 rounded-xl border border-orange-200/60 dark:border-orange-800/40 cursor-pointer hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-yellow-500"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">🛺</span>
                    </div>

                    {/* Route info */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        Angkot 08
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <span>🕒</span>
                          <span className="font-medium">25 menit</span>
                        </span>
                        <span className="flex items-center gap-1 text-green-600">
                          <span>💰</span>
                          <span className="font-medium">Rp 4.000</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status and Arrow */}
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300"
                    >
                      Terbatas
                    </Badge>
                    <svg
                      className="w-5 h-5 text-orange-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationSearch;
