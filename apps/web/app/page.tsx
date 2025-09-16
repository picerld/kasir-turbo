import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Hero from "./landing/__components/Hero";

async function getMessage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/hello`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function Home() {
  const data = await getMessage();

  return (
    <>
      <Navbar />
      {/* <div className="flex flex-col h-screen justify-center items-center space-y-5">
        <h1 className="text-4xl font-bold">{data.message}</h1>
        <p className="text-2xl">
          Fresh setup NEXT JS and NEST JS with Turborepo
        </p>
        <Button size={"lg"}>Holla Mundo!</Button>
      </div> */}
      <Hero />
    </>
  );
}
