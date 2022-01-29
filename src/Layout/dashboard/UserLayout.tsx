import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav";
import SidebarContent, { SidebarLink } from "@/components/Sidebar/SidebarContent";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiSettings } from "react-icons/fi";

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Dashboard", icon: FiHome, href: "/dashboard" },
    { name: "Portfolio", icon: FiTrendingUp, href: "/dashboard/user/portfolio" },
    { name: "Settings", icon: FiSettings, href: "/dashboard/user/settings" },
];

function UserLayout({ children }: { children: ReactNode }) {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    return (
        <>
            <Nav>
                {LinkItems.map(link => (
                    <SidebarLink key={link.name} icon={link.icon} href={link.href}>
                        {link.name}
                    </SidebarLink>
                ))}
            </Nav>
            <Box as="section" bg={Bgvalue} minH="100vh" pt={10}>
                <SidebarContent display={{ base: "none", md: "unset" }}>
                    {LinkItems.map(link => (
                        <SidebarLink key={link.name} icon={link.icon} href={link.href}>
                            {link.name}
                        </SidebarLink>
                    ))}
                </SidebarContent>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box as="main" p="4" mt={10}>
                        {children}
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
export default UserLayout;
