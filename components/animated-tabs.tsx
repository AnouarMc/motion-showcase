"use client";

import { useState } from "react";
import { tabs } from "@/constants";
import { motion } from "motion/react";

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-[#0b1012] border border-zinc-900 p-4 aspect-[1.5/1]">
        <div className="mb-4">
          <h2 className="font-medium">Animated tabs</h2>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col sm:flex-row gap-x-4 text-zinc-400 border border-zinc-800 bg-zinc-900 isolate  p-1 rounded-lg">
            {tabs.map(({ label, icon: Icon, textColor, bgColor }) => (
              <button
                key={label}
                className={`relative flex gap-2 py-2 px-4 items-center cursor-pointer transition ${
                  label === activeTab ? textColor : "text-zinc-400"
                }`}
                onClick={() => setActiveTab(label)}
              >
                <Icon size={14} />
                <span>{label}</span>
                {activeTab === label && (
                  <motion.span
                    layoutId="highlighter"
                    className={`absolute inset-0 -z-10 rounded-lg ${bgColor}`}
                  ></motion.span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTabs;
