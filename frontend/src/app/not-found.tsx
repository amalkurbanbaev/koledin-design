import Link from "next/link";

const NotFound = () => (
    <div className="container-main flex flex-col gap-12 text-center">
        <div>
            <h1 className="h-[232px] text-[172px] font-extrabold">404</h1>
            <h2 className="text-2xl font-bold">Not found</h2>
        </div>
        <div>
            <Link href="/" className="underline underline-offset-8">
                Go back to Home
            </Link>
        </div>
    </div>
);

export default NotFound;
