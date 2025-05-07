"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { AuroraText } from "../magicui/aurora-text";

interface TimelineEntry {
  title: string;
  subtitle?: string; // Nuevo campo opcional para el subtítulo
  content: React.ReactNode;
  titulo: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      {/* Título principal */}
      

      {/* Contenedor de la línea de tiempo */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <>
            <div className="text-xl mt-30 md:text-5xl pb-10 text-white dark:text-neutral-500 ">
              <h2 className="text-6xl"><AuroraText>{item.titulo}</AuroraText></h2>
            </div>
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Punto de la línea de tiempo */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3 className="text-xl md:text-5xl font-bold text-white dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-lg md:text-2xl font-normal text-neutral-400 dark:text-neutral-600">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Contenido del elemento */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="md:hidden block text-sm mb-4 text-left font-normal text-neutral-400 dark:text-neutral-600">
                    {item.subtitle}
                  </p>
                )}
                {item.content}
              </div>
            </div>
          </>
        ))}

        {/* Línea animada */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
