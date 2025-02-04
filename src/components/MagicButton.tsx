"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
interface MagicButtonProps {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}

export function MagicButton({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: MagicButtonProps) {
    return (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            onClick={handleClick}
            className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 ${otherClasses}`}
        >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
        </HoverBorderGradient>
    );
}
