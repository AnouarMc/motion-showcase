"use client";

import { useState } from "react";
import { motion } from "motion/react";

const ConfirmButton = () => {
  const [isDown, setIsDown] = useState(false);

  return (
    <section className="my-12 max-w-xl mx-auto">
      <div className="bg-[#0b1012] border border-zinc-900 p-4 aspect-[1.5/1]">
        <div className="mb-4">
          <h2 className="font-medium">Hold to confirm button</h2>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="relative flex justify-center items-center w-72 aspect-square mx-auto">
            <svg
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full -rotate-90"
            >
              <motion.circle
                cx="18"
                cy="18"
                r="14"
                fill="transparent"
                className="stroke-current text-green-300"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100, strokeWidth: 0.1 }}
                animate={{
                  strokeDashoffset: isDown ? 0 : 100,
                  strokeWidth: isDown ? 1.5 : 0.1,
                }}
                transition={{ duration: isDown ? 1.5 : 0.3, ease: "linear" }}
                strokeLinecap="round"
              ></motion.circle>
            </svg>

            <button
              className={`flex gap-2 items-center relative bg-white/20 text-white py-2 px-8 font-medium rounded-full cursor-pointer overflow-hidden isolate ${
                isDown ? "scale-95" : ""
              }`}
              onPointerDown={() => setIsDown(true)}
              onPointerUp={() => setIsDown(false)}
              onMouseLeave={() => setIsDown(false)}
            >
              <span>Hold to confirm</span>
              <motion.span
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                animate={{
                  clipPath: isDown
                    ? "inset(0% 0% 0% 0%)"
                    : "inset(0% 100% 0% 0%)",
                }}
                transition={{ duration: isDown ? 1.5 : 0.3, ease: "linear" }}
                className="flex gap-2 items-center justify-center absolute inset-0 bg-green-200 z-10"
              >
                <span className="text-green-800">Hold to confirm</span>
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmButton;
