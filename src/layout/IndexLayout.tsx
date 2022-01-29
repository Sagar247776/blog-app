import Header from "@/components/Index/Header/Header";
import React, { ReactNode } from "react";

function IndexLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="bg-[#C4E2FF] border border-black  dark:bg-primaryDark">
                <div className="sticky top-0 z-50">
                    <Header />
                    <hr className=" w-full  border border-black dark:border-white" />
                </div>
                <div className="relative">{children}</div>
            </div>
        </>
    );
}
export default IndexLayout;
