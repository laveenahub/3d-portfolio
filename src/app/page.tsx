import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Initiatives from "@/components/Initiatives";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollyCanvas />
      <About />
      <Experience />
      <Projects />
      <Initiatives />
    </main>
  );
}
