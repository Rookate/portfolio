import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutSummary from "@/components/AboutSummary";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Capabilities from "@/components/Capabalities";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen z-10 transition-all duration-700 bg-background text-foreground">
        <Hero />
        <Projects />
        <Capabilities />
        {/* <AboutSummary /> */}
        <Footer />
      </main>
      <ScrollToTopButton />
    </div>
  );
}