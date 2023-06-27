import Image from "next/image";
import Link from "next/link";

const LangRedirect = () => (
    <section className="dark:bg-black dark:text-gray-100">
        <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
            <div className="flex flex-col justify-center rounded-lg p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
                <div>There is no content available in your language</div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
                    <Link href="/en">Back To English</Link>
                </div>
            </div>
            <div className="mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96 xl:h-96 2xl:h-96">
                <Image
                    src="https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg"
                    alt="city view"
                    className="h-72 object-contain sm:h-80 lg:h-96 xl:h-96 2xl:h-96 "
                    width={600}
                    height={600}
                />
            </div>
        </div>
    </section>
);

export default LangRedirect;
