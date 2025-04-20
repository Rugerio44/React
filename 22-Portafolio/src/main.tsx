
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

createRoot(document.getElementById('root')!).render(
  <>
  <AnimatedGridPattern
          numSquares={200}
          maxOpacity={0.2}
          duration={2}
          repeatDelay={12}
          className={cn(
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "skew-y-12"
          )}
        > 
    
    </AnimatedGridPattern>
    <App />
    </>
)
