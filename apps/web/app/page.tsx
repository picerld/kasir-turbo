import Hero from "./landing/__components/Hero";
import GuestLayout from "@/components/layout/GuestLayout";

export default async function LandingPage() {
  return (
    <GuestLayout>
      <Hero />
    </GuestLayout>
  );
}
