import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeToggle from "../Shared/ToggleTheme";

function Header() {
    const router = useRouter();
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto select-none">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img
                        className="w-44 object-contain cursor-pointer"
                        src="https://links.papareact.com/yvf"
                    />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-green-600 px-4 cursor-pointer">
                <DarkModeToggle />
                <h3 onClick={() => router.push("/dashboard")}>Sing In</h3>
                <h3
                    onClick={() => router.push("/signup")}
                    className="border px-4 py-1 rounded-full border-green-600 cursor-pointer"
                >
                    Get Started
                </h3>
            </div>
        </header>
    );
}

export default Header;
