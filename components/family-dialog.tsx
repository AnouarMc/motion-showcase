"use client";

import { useState } from "react";
import { CircleQuestionMark, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const FamilyDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-xl mx-auto  overflow-hidden">
      <div className="bg-[#0b1012] border border-zinc-900 p-4 aspect-[1.3/1]">
        <div className="mb-4">
          <h2 className="font-medium">Family Dialog</h2>
        </div>
        <div className="relative w-sm max-w-full mx-auto h-full flex justify-center items-center">
          <AnimatePresence>
            {!isOpen && (
              <div className="flex h-full items-end">
                <motion.button
                  layoutId="main-btn"
                  transition={{ duration: 0.3 }}
                  className="w-64 h-10 bg-teal-200 text-teal-950 font-semibold rounded-full cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  Send
                </motion.button>
              </div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-teal-950 border border-teal-900 space-y-4 rounded-2xl p-5 absolute bottom-4 left-0 right-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <CircleQuestionMark />
                    <h2 className="text-lg">Confirm</h2>
                  </div>
                  <button
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={22} />
                  </button>
                </div>
                <div className="text-zinc-400">
                  Are you sure you want to send ?
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-900/50 rounded-full cursor-pointer"
                  >
                    Cancel
                  </button>
                  <motion.button
                    layoutId="main-btn"
                    transition={{ duration: 0.3 }}
                    className="h-10 w-full bg-teal-200 text-teal-950 font-semibold rounded-full cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Send
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default FamilyDialog;
