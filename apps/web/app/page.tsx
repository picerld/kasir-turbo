import Hero from "./landing/__components/Hero";
import GuestLayout from "@/components/layout/GuestLayout";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Yuk travelling",
  metaDescription: "Connect Bandung landing page",
  pathName: "/",
});

export default async function LandingPage() {
  return (
    <GuestLayout>
      <Hero />
    </GuestLayout>
  );
}
