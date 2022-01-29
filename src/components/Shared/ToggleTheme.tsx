import { HiOutlineSun, HiMoon } from "react-icons/hi";

import { VFC, memo } from "react";
import { useTheme } from "next-themes";
const DarkModeToggle: VFC<any> = memo(() => {
    const { theme, setTheme } = useTheme();

    const darkmode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <>
            <a aria-label="theme toggle cursor-pointer select-none" onClick={darkmode}>
                {theme === "light" ? <HiOutlineSun /> : <HiMoon />}
            </a>
        </>
    );
});

DarkModeToggle.displayName = "DarkModeToggle";

export default DarkModeToggle;
