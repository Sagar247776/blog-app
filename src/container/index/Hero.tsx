import Image from "next/image";
import M from "public/m.png";
function Hero() {
    return (
        <div className="max-w-6xl mx-auto bg-[#C4E2FF] dark:bg-primaryDark">
            <div className=" flex justify-between items-center bg-[#C4E2FF]  dark:bg-primaryDark lg:pb-0 pb-5">
                <div className="px-10  ">
                    <h1 className="text-4xl font-semibold font-serif lg:text-7xl lg:font-medium">
                        Medium is a place <br /> to Write, read, and <br /> connect
                    </h1>
                    <h2 className="text-black dark:text-white text-sm slashed-zero antialiased">
                        It&apos;s easy and free to post your thinking on any topic and
                        <br />
                        connect with millions of readers.
                    </h2>
                    <button className="mt-3 border border-black px-5 py-2 rounded-full cursor-pointer text-sm bg-white dark:bg-white text-textLight dark:text-textLight">
                        Start writing
                    </button>
                </div>
                <div className=" md:inline-flex  lg:h-full -ml-48">
                    <Image src={M} height={400} width={400} layout="intrinsic" alt="image" />
                </div>
            </div>
        </div>
    );
}
export default Hero;
