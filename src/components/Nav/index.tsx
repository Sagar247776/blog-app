import React, { ReactNode } from "react";
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    HStack,
    useDisclosure,
    IconButton,
    InputGroup,
    InputLeftElement,
    Input,
    Avatar,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Icon,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    VStack,
    CloseButton,
    DrawerHeader,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import SidebarContent from "../Sidebar/SidebarContent";
import DarkModeToggleSwitch from "../Shared/ToggleThemeSwitch";
function Nav({ children }: { children: ReactNode }) {
    const sidebar = useDisclosure();
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const ColorValue = useColorModeValue("primaryDark", "#FFFFFF");
    return (
        <>
            <nav className="sticky bg-primaryLight dark:bg-black top-0 left-0 w-full z-10 justify-between p-4 shadow-lg">
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                ml={-1}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={sidebar.onOpen}
                            />
                            <Drawer
                                isOpen={sidebar.isOpen}
                                onClose={sidebar.onClose}
                                placement="left"
                            >
                                s
                                <DrawerHeader>
                                    <div className=" text-lightAccent flex  justify-between">
                                        <h1 className="items-center mt-10">Blogapp</h1>

                                        <CloseButton
                                            display={{ base: "flex", md: "none" }}
                                            onClick={sidebar.onClose}
                                        />
                                    </div>
                                </DrawerHeader>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <SidebarContent w="full" borderRight="none">
                                        {children}
                                    </SidebarContent>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </HStack>
                    <HStack spacing={3} display={"flex"} alignItems="center" mr={5}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineSearch />
                            </InputLeftElement>
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>
                        <Menu>
                            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                                <HStack>
                                    <Avatar
                                        size={"sm"}
                                        // @ts-ignore
                                        src={null}
                                    />
                                    <VStack
                                        display={{ base: "none", md: "flex" }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2"
                                    >
                                        {/* @ts-ignore */}
                                        <Text fontSize="sm">name</Text>
                                        <Text fontSize="xs" color="gray.600">
                                            {/* @ts-ignore */}
                                            email{" "}
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: "none", md: "flex" }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList bg={Bgvalue} color={ColorValue}>
                                <MenuItem>
                                    <DarkModeToggleSwitch />
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem>
                                    <Icon mr="4" fontSize="16" as={GoSignOut} />
                                    Signout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>
            </nav>
        </>
    );
}
export default Nav;
