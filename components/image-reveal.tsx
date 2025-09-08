"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SeparatorVertical } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";

const ImageReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(400);

  const x = useMotionValue(0);
  const clipPath = useTransform(x, (value) => {
    const percentage = (value / containerWidth) * 100;
    return `inset(0 0 0 ${Math.max(0, Math.min(100, percentage))}%)`;
  });

  const backgroundAlpha = useTransform(
    x,
    [
      containerWidth * 0.05,
      containerWidth * 0.2,
      containerWidth * 0.5,
      containerWidth * 0.8,
      containerWidth * 0.95,
    ],
    [0, 1, 1, 1, 0]
  );

  const backgroundColor = useTransform(
    backgroundAlpha,
    (a) => `rgba(255, 255, 255, ${a})`
  );

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      x.set(width * 0.5);
    }
  }, []);

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-[#0b1012] border border-zinc-900 p-4 aspect-[1.5/1]">
        <div className="mb-4">
          <h2 className="font-medium">Image reveal</h2>
        </div>
        <div className="h-full flex justify-center items-center">
          <div ref={containerRef} className="relative max-w-max mx-auto">
            <Image
              className="rounded-2xl"
              src="/image-reveal.avif"
              width={400}
              height={300}
              alt="Image"
            />
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ clipPath }}
            >
              <Image
                className="grayscale-100 rounded-2xl"
                src="/image-reveal.avif"
                width={400}
                height={300}
                alt="Image"
              />
            </motion.div>

            <motion.div
              drag="x"
              dragElastic={0.02}
              dragConstraints={containerRef}
              className="absolute inset-y-0 w-0.5 cursor-grab z-10"
              style={{ x, backgroundColor }}
            >
              <div className="bg-white size-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full shadow-md">
                <SeparatorVertical size={22} className="text-gray-800" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageReveal;
