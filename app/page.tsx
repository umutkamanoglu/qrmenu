import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto">
        <Features />
      </main>
      <Cta />
      <Footer />
    </>
  );
}
