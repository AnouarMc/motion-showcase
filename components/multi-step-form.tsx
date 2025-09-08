"use client";

import { useState } from "react";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

const steps = [
  <div className="space-y-4" key="step-1">
    <h2 className="font-bold text-lg">Step 1/3</h2>
    <div>
      Please provide your basic personal details. This helps us set up your
      account and personalize your experience.
    </div>
    <div className="flex flex-col gap-2">
      <div className="w-80 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-64 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-48 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-72 h-6 rounded-sm bg-zinc-800 max-w-full" />
    </div>
  </div>,
  <div className="space-y-4" key="step-2">
    <h2 className="font-bold text-lg">Step 2/3</h2>
    <div>
      Choose a username and password. Make sure your password is strong and
      secure.
    </div>
    <div className="flex flex-col gap-2">
      <div className="w-80 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-48 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-72 h-6 rounded-sm bg-zinc-800 max-w-full" />
    </div>
  </div>,
  <div className="space-y-4" key="step-3">
    <h2 className="font-bold text-lg">Step 3/3</h2>
    <div>
      Select your preferences to help us tailor your experience. You can always
      update these later.
    </div>
    <div className="flex flex-col gap-2">
      <div className="w-80 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-64 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-48 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-72 h-6 rounded-sm bg-zinc-800 max-w-full" />
      <div className="w-64 h-6 rounded-sm bg-zinc-800 max-w-full" />
    </div>
  </div>,
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, { height }] = useMeasure();

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      filter: "blur(3px)",
      opacity: 0,
    }),
    animate: {
      x: 0,
      filter: "blur(0px)",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      filter: "blur(3px)",
      opacity: 0,
    }),
  };

  const onPrevious = () => {
    setDirection(-1);
    setCurrentStep((prevStep) => {
      return Math.max(prevStep - 1, 0);
    });
  };

  const onNext = () => {
    setDirection(1);
    setCurrentStep((prevStep) => {
      return Math.min(prevStep + 1, steps.length - 1);
    });
  };

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.5 }}>
      <section className="max-w-xl mx-auto">
        <div className="bg-[#0b1012] border border-zinc-900 p-4">
          <div className="mb-4">
            <h2 className="font-medium">Multi-step form</h2>
          </div>
          <div className="h-full flex justify-center items-center my-16">
            <motion.div
              className="relative mx-auto overflow-hidden border border-zinc-800 bg-zinc-900 text-white w-md max-w-full rounded-xl"
              animate={{ height }}
              initial={false}
            >
              <div ref={ref} className="p-4">
                <AnimatePresence
                  mode="popLayout"
                  initial={false}
                  custom={direction}
                >
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {steps[currentStep]}
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  layout
                  className="flex justify-between mt-4 font-medium"
                >
                  <button
                    onClick={onPrevious}
                    disabled={currentStep === 0}
                    className="h-8 cursor-pointer disabled:cursor-default disabled:opacity-40 rounded-full bg-zinc-700 px-4"
                  >
                    Previous
                  </button>

                  <button
                    onClick={onNext}
                    disabled={currentStep === steps.length - 1}
                    className="h-8 cursor-pointer rounded-full bg-gradient-to-b from-[#1994ff] to-[#157cff] px-5"
                  >
                    {currentStep === steps.length - 1 ? "Submit" : "Next"}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default MultiStepForm;
