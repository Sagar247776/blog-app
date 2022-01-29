import Image from "next/image";
import M from "public/m.png";
function Hero() {
    return (
        <div className="max-w-7xl mx-auto bg-[#C4E2FF] dark:bg-primaryDark">
            <div className=" -mt-12 flex justify-between items-center bg-[#C4E2FF]  dark:bg-primaryDark lg:pb-0">
                <div className="px-10 pt-12 -mt-2">
                    <h1 className="text-4xl font-semibold font-serif lg:text-7xl lg:font-medium">
                        Medium is a place <br /> to Write, read, and <br /> connect
                    </h1>
                    <h2 className="text-black dark:text-white text-sm slashed-zero antialiased">
                        It&apos;s easy and free to post your thinking on any topic <br /> and
                        connect with millions of readers.
                    </h2>
                    <button className="mt-4 border border-black px-2 py-3 rounded-full cursor-pointer text-sm bg-white dark:bg-white text-textLight dark:text-textLight">
                        Start writing
                    </button>
                </div>
                <div className="mt-14 md:inline-flex  lg:h-full -ml-48">
                    <Image src={M} height={400} width={400} layout="intrinsic" alt="image" />
                </div>
            </div>
        </div>
    );
}
export default Hero;
