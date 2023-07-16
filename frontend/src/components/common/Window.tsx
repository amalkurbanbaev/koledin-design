"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import AdditionalLogo from "../../../public/sub-logo.svg";

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
            document.body.classList.add("scrollbar-hidden");
        } else {
            document.body.classList.remove("scrollbar-hidden");
        }
    }, [isOpen]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-white/40 backdrop-blur-[5px] dark:bg-black/90" />
                </Transition.Child>

                <div className="scrollbar-themed fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 top-[1000px] scale-95"
                            enterTo="opacity-100 top-0 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 top-0 scale-100"
                            leaveTo="opacity-0 top-[1000px] scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-6xl rounded-2xl bg-transparent p-6 text-left align-middle transition-all dark:shadow-xl landscape:pt-4">
                                <Image
                                    alt="Close project"
                                    src={AdditionalLogo}
                                    width={73}
                                    height={73}
                                    className="absolute right-3 top-4 w-12 cursor-pointer transition-all duration-300 ease-in-out hover:rotate-45 md:w-20 lg:right-0 lg:top-14 landscape:w-14"
                                    role="presentation"
                                    onClick={handleClose}
                                />
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
export default Window;
