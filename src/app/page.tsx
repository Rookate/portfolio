import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Capabilities from "@/components/Capabalities";

export default function Home() {
  return (
    <div className="mx-width">
      <Header />
      <main className="relative min-h-screen transition-all duration-700 text-foreground">
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