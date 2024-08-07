import Link from "next/link";
import Hero from "@/components/hero";
import Collections from "@/components/collections";
import Discount from "@/components/discount";
import Featured from "@/components/featured";

export default function Home() {
  return (
    <main className="font-fontInter ">
      <Hero />
      <Collections />
      <Discount searchQuery={""} />
      <Featured searchQuery={""} />
    </main>
  );
}
