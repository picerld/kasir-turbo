import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

export const LocationSearch = () => {
  return (
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
              className="h-12 text-base bg-background border-border focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>
        </div>

        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
        >
          <Search className="w-5 h-5 mr-2" />
          Cari Rute Kamu!
        </Button>
      </CardContent>
    </Card>
  );
};
