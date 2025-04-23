import './App.css';
import './index.css';
import { Navbar } from './components/Navbar/Navbar';
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Tecnologias from './components/Tecnologías/Tecnologias';

function App() {
  return (
    <>
      <AnimatedGridPattern
        numSquares={200}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={12}
        className={cn(
          "absolute inset-0 h-full w-full",
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "skew-y-12",
          "pointer-events-none",
          "fill-gray-400/30",
          "stroke-gray-400/30"
        )}
      />
      <Navbar />
      <Layout />

      <Tecnologias />

      <About />
    </>
  );
}

export default App;