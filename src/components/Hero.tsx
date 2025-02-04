"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import React from "react";
import { heroContents } from "@/data/index";
import { FlipWords } from "./ui/flip-words";
import { MagicButton } from "./MagicButton";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion"

export function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-white dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
            />
            <Spotlight
            />
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 from-neutral-800 dark:to-neutral-400 to-blue-800 bg-opacity-50">
                    {heroContents.firstName} <br /> {heroContents.lastName}
                </h1>
                <div className="mt-4 font-normal text-[12px] md:text-xl lg:text-2xl text-neutral-600  dark:text-neutral-300 max-w-lg text-center mx-auto">
                    {heroContents.description}
                    <FlipWords duration={1500} words={heroContents.descriptionWords} className="font-normal text-[12px] md:text-xl lg:text-2xl text-blue-600  dark:text-blue-300" />
                </div>

                <a className="mx-auto mt-5" href="#about">
                    <MagicButton
                        title="Show my work"
                        icon={<ChevronRight />}
                        position="right"
                    />
                </a>
            </div>
        </motion.div>
    );
}
