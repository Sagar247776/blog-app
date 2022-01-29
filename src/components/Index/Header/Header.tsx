import DarkModeToggle from "@/components/Shared/ToggleTheme";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();
    const { theme } = useTheme();
    return (
        <>
            <div className="max-w-6xl mx-auto bg-transparent ">
                <header className="flex justify-between p-4 w-full mx-auto select-none">
                    <div className="flex items-center space-x-5">
                        <Link href="/">
                            {theme === "light" ? (
                                <Image
                                    className="w-36 object-contain cursor-pointer"
                                    src="/Dark.png"
                                    width={150}
                                    height={45}
                                />
                            ) : (
                                <Image
                                    className="w-36 object-contain cursor-pointer"
                                    src="/Light.png"
                                    width={150}
                                    height={45}
                                />
                            )}
                        </Link>
                    </div>
                    <div className="flex items-center space-x-5 text-textLight dark:text-textDark  px-4 cursor-pointer">
                        <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
                            <h3 className="text-sm">About</h3>
                            <h3 className="text-sm">Contact</h3>
                            <h3 onClick={() => router.push("/dashboard")} className="text-sm">
                                Sing In
                            </h3>
                        </div>
                        <DarkModeToggle />
                        {/* //TODO   add signup modal */}
                        <button
                            onClick={() => router.push("/signup")}
                            className="border px-5 py-2 rounded-full cursor-pointer text-sm bg-black dark:bg-white text-textDark dark:text-textLight"
                        >
                            Get Started
                        </button>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
