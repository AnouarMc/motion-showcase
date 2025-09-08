"use client";

import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const images = [
  { src: "/stagger-images/image1.jpeg", rotation: -6 },
  { src: "/stagger-images/image2.jpeg", rotation: 12 },
  { src: "/stagger-images/image3.jpeg", rotation: 4 },
  { src: "/stagger-images/image4.jpeg", rotation: -8 },
  { src: "/stagger-images/image5.jpeg", rotation: 4 },
];

const StaggeredImages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [replayKey, setReplayKey] = useState(0);
  const handleReplay = () => setReplayKey((prev) => prev + 1);

  return (
    <section ref={ref} className="max-w-xl mx-auto">
      <div className="bg-[#0b1012] border border-zinc-900 p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-medium">Stagger animation</h2>
          <button
            onClick={handleReplay}
            className="cursor-pointer hover:-translate-y-0.5 transition bg-white/5 rounded-lg p-2"
          >
            <RotateCcw size={16} />
          </button>
        </div>
        <div className="h-full flex justify-center items-center mt-32 mb-16 sm:mt-48 sm:mb-32">
          <div className="flex flex-col sm:flex-row items-center">
            {images.map(({ src, rotation }, index) => (
              <motion.div
                key={`${replayKey}-${index}`}
                className="size-36 -mt-14 sm:-ml-14 first:ml-0 rounded-xl overflow-hidden bg-white p-1"
                style={{ rotate: `${rotation}deg` }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.075 * (index + 1), type: "spring" }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaggeredImages;
