"use client";

import { MouseEvent, useEffect, useState } from "react";

import classNames from "classnames";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import { IMedia } from "@/types/generated";

import { getStrapiMedia } from "../../utils/api-helpers";

import "keen-slider/keen-slider.min.css";

type Props = {
    media: IMedia<never>[];
};

const Arrow = (props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}) =>
    props?.left ? (
        <button
            disabled={props?.disabled}
            type="button"
            onClick={props?.onClick}
            className={classNames(
                "z-50 transition-all duration-300 hover:scale-105 disabled:hover:scale-100",
                props?.className,
                props?.disabled ? "opacity-50" : "opacity-100",
            )}
        >
            <Image
                src="/left-arrow.svg"
                alt="left"
                width={55}
                height={55}
                className="h-[55px] w-[55px]"
            />
        </button>
    ) : (
        <button
            disabled={props?.disabled}
            type="button"
            onClick={props?.onClick}
            className={classNames(
                "z-50 transition-all duration-300 hover:scale-105 disabled:hover:scale-100",
                props?.className,
                props?.disabled ? "opacity-50" : "opacity-100",
            )}
        >
            <Image
                src="/right-arrow.svg"
                alt="left"
                width={55}
                height={55}
                className="h-[55px] w-[55px]"
            />
        </button>
    );

const MediaSlider = (media: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [created, setCreated] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.update();
            setLoaded(true);
        }
    }, [instanceRef]);

    useEffect(() => {
        if (sliderRef.length) {
            setCreated(true);
        }
    }, [sliderRef.length]);

    return (
        <div className="navigation-wrapper relative">
            {/* DESKTOP LEFT ARROW */}
            {loaded && instanceRef.current && (
                <Arrow
                    left
                    onClick={() => instanceRef.current?.prev()}
                    disabled={currentSlide === 0}
                    className="absolute -left-20 top-1/2 hidden xl:block"
                />
            )}
            {/* SLIDER */}
            {created ? (
                <>
                    <div className="mb-4 flex justify-center text-center text-[14px] font-normal lg:absolute lg:-bottom-12 lg:right-0 lg:mb-0 lg:text-2xl">
                        {currentSlide + 1} / {media?.media.length}
                    </div>
                    <div ref={sliderRef} className="keen-slider">
                        {media?.media.map((el) => (
                            <div
                                key={el.id}
                                className="keen-slider__slide relative flex h-auto w-[780px] items-center md:h-[433px]"
                            >
                                <Image
                                    alt={el.attributes.alternativeText || ""}
                                    src={
                                        getStrapiMedia(el.attributes.url) || ""
                                    }
                                    width={780}
                                    height={433}
                                    priority
                                    // fill
                                    className="mx-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex w-full items-center justify-center gap-x-6">
                    <Image
                        alt="Close project"
                        src="/sub-logo.svg"
                        width={73}
                        height={73}
                        className="animate-bounce"
                        role="presentation"
                    />
                    <Image
                        alt="Close project"
                        src="/sub-logo.svg"
                        width={73}
                        height={73}
                        className="animate-bounce"
                        role="presentation"
                    />
                    <Image
                        alt="Close project"
                        src="/sub-logo.svg"
                        width={73}
                        height={73}
                        className="animate-bounce"
                        role="presentation"
                    />
                </div>
            )}

            {/* MOBILE ARROWS */}
            <div className="mt-10 flex w-full flex-row justify-center gap-x-8 xl:hidden">
                {loaded && instanceRef.current && (
                    <Arrow
                        left
                        onClick={() => instanceRef.current?.prev()}
                        disabled={currentSlide === 0}
                    />
                )}
                {loaded && instanceRef.current && (
                    <Arrow
                        onClick={() => instanceRef.current?.next()}
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                )}
            </div>
            {/* DESKTOP RIGHT ARROW */}
            {loaded && instanceRef.current && (
                <Arrow
                    onClick={() => instanceRef.current?.next()}
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                    className="absolute -right-20 top-1/2 hidden xl:block"
                />
            )}
        </div>
    );
};

export default MediaSlider;
