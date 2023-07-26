import Image from "next/image";

const RootLoading = () => (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-white/80 text-center backdrop-blur-[5px] dark:bg-black/90">
        <div className="flex w-full items-center justify-center gap-x-6 [&>img]:invert [&>img]:dark:filter-none">
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
    </div>
);

export default RootLoading;
