"use client";
import { APPS } from "@/constants";

import { App } from "@/types";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";
import { RefObject, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const AppStoreList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeApp, setActiveApp] = useState<App | null>(null);
  useOnClickOutside(ref as RefObject<HTMLDivElement>, () => setActiveApp(null));

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-[#0b1012] border border-zinc-900 p-4">
        <div className="mb-4">
          <h2 className="font-medium">App store-like list</h2>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="relative border border-zinc-800 bg-zinc-900 p-4 my-8 rounded-xl">
            <AnimatePresence>
              {activeApp && (
                <div className="fixed inset-0 z-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pointer-events-none absolute inset-0 z-10 bg-black/50"
                  />
                  <div className="absolute inset-0 z-10 grid place-items-center">
                    <motion.div
                      layoutId={`${activeApp.title}-card`}
                      className="flex h-fit max-w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden border border-zinc-800 bg-zinc-900 p-4"
                      ref={ref}
                      style={{ borderRadius: 12 }}
                    >
                      <div className="flex w-full items-center gap-4">
                        <motion.span
                          layoutId={activeApp.image}
                          className="shrink-0"
                        >
                          <Image
                            height={56}
                            width={56}
                            alt="app icon"
                            src={activeApp.image}
                            style={{ borderRadius: 12 }}
                            className="h-14 w-14"
                          />
                        </motion.span>

                        <div className="flex flex-grow items-center justify-between">
                          <div className="flex flex-col py-3">
                            <motion.h2
                              layoutId={activeApp.title}
                              className="text-sm font-semibold"
                            >
                              {activeApp.title}
                            </motion.h2>
                            <motion.p
                              layoutId={activeApp.description}
                              className="text-sm text-stone-400"
                            >
                              {activeApp.description}
                            </motion.p>
                          </div>
                          <motion.button
                            layoutId={`get-button-${activeApp.title}`}
                            className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-blue-600"
                          >
                            Get
                          </motion.button>
                        </div>
                      </div>
                      <motion.p
                        className="text-sm text-stone-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.05 },
                        }}
                      >
                        {activeApp.longDescription}
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>

            <ul className="relative flex w-full flex-col items-center">
              {APPS.map((app) => (
                <motion.li
                  layoutId={`${app.title}-card`}
                  key={app.title}
                  onClick={() => setActiveApp(app)}
                  style={{ borderRadius: 8 }}
                  className="flex w-full cursor-pointer items-center gap-4 p-0 sm:w-[368px]"
                >
                  <motion.span layoutId={app.image} className="shrink-0">
                    <Image
                      height={56}
                      width={56}
                      alt="app icon"
                      src={app.image}
                      style={{ borderRadius: 12 }}
                      priority
                      className="h-14 w-14"
                    />
                  </motion.span>
                  <div className="flex gap-1 sm:gap-4 flex-grow items-center justify-between border-b border-b-zinc-800">
                    <div className="flex flex-col py-4">
                      <motion.h2
                        layoutId={app.title}
                        className="text-sm font-semibold text-gray-200 "
                      >
                        {app.title}
                      </motion.h2>
                      <motion.p
                        layoutId={app.description}
                        className="text-sm text-stone-400"
                      >
                        {app.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`get-button-${app.title}`}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-blue-600 cursor-pointer"
                    >
                      Get
                    </motion.button>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStoreList;
