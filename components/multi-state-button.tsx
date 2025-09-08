"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Loader2 className="animate-spin size-5" />,
  success: "Login link sent",
};

const MultiStateButton = () => {
  const [buttonState, setButtonState] = useState<
    "idle" | "success" | "loading"
  >("idle");

  const onClick = () => {
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");
    }, 1750);
    setTimeout(() => {
      setButtonState("idle");
    }, 3500);
  };

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-[#0b1012] border border-zinc-900 p-4 aspect-[1.5/1]">
        <div className="mb-4">
          <h2 className="font-medium">Multi-state button</h2>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="max-w-max mx-auto flex flex-col items-center gap-4">
            <button
              disabled={buttonState != "idle"}
              onClick={onClick}
              className="relative overflow-hidden bg-gradient-to-b from-[#1994ff] to-[#157cff] h-8 w-48 px-2.5 py-1.5 rounded-lg text-sm font-semibold cursor-pointer disabled:cursor-default"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={buttonState}
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 25, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  className="flex w-full items-center justify-center"
                >
                  {buttonCopy[buttonState]}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStateButton;
