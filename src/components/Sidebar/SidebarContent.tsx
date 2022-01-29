import { Box, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import NavLink from "./SidebarItemsLink";

export const SidebarLink = ({ href, children, icon }: any) => (
    <NavLink href={href}>
        <Flex align="center">
            <Box as={icon} mr={3} w={6} />
            <Text fontSize="sm" fontWeight="medium">
                {children}
            </Text>
        </Flex>
    </NavLink>
);

function SidebarContent(props: any) {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    // const { data: session } = useSession();

    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={Bgvalue}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                {/* <Logo /> */}
                <Text
                    fontSize="2xl"
                    ml="2"
                    color={useColorModeValue("brand.500", "white")}
                    fontWeight="semibold"
                >
                    M Admin
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <>{props.children}</>
            </Flex>
        </Box>
    );
}

export default SidebarContent;
