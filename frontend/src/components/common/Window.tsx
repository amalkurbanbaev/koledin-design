"use client";

import { ReactNode, useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import CloseIcon from "../../../public/sub-logo.svg";

const Window = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        const timeOut = setTimeout(() => {
            router.back();
        }, 200);
        setIsOpen(false);
        return () => clearTimeout(timeOut);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return isOpen ? (
        <div className="scrollbar-themed fixed inset-0 overflow-y-auto bg-white/80 backdrop-blur-[5px] dark:bg-black/90">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div className="relative w-full max-w-6xl rounded-2xl bg-transparent pb-20 pt-5 text-left align-middle transition-all dark:shadow-xl landscape:pt-4">
                    <Image
                        alt="Close project"
                        src={CloseIcon}
                        width={73}
                        height={73}
                        className="absolute right-3 top-4 w-12 cursor-pointer invert transition-all duration-300 ease-in-out hover:rotate-45 dark:filter-none md:w-20 lg:right-0 lg:top-14 landscape:w-14"
                        role="presentation"
                        onClick={handleClose}
                    />
                    {children}
                </div>
            </div>
        </div>
    ) : null;
};

export default Window;
