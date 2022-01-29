import { Flex, useColorModeValue, Text, Stack, Heading, Box, Button } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { signIn, getCsrfToken, getSession } from "next-auth/react";
import { Form, Formik } from "formik";
import { InputField } from "@/components/From/InputField";
import ForgotPass from "@/containers/auth/ForgotPass";
import { NextPageContext } from "next";
function LoginPage({ csrfToken }: { csrfToken: any }) {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const router = useRouter();

    // }
    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={Bgvalue}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"green.500"}>
                        Enjoy All Your
                    </Text>
                </Stack>
                <Box rounded={"lg"} bg={Bgvalue} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            onSubmit={async (values, { setSubmitting }) => {
                                const res = await signIn("credentials", {
                                    redirect: false,
                                    email: values.email,
                                    password: values.password,
                                    callbackUrl: `${window.location.origin}`,
                                });

                                console.log(res);
                                setSubmitting(false);
                                router.push("/");
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <input
                                        name="csrfToken"
                                        type="hidden"
                                        defaultValue={csrfToken}
                                    />
                                    <InputField
                                        required
                                        name="email"
                                        placeholder="Enter Your Username"
                                        label="Email"
                                        type={"email"}
                                        passwordField={false}
                                    />

                                    <InputField
                                        name="password"
                                        placeholder="password"
                                        label="Password"
                                        type={"password"}
                                        passwordField={true}
                                        required
                                        minLength={6}
                                    />

                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: "column", sm: "row" }}
                                            align={"start"}
                                            justify={"space-between"}
                                        >
                                            <div className="text-center pt-12 pb-12">
                                                <ForgotPass title={"Forgot your password?"} />
                                            </div>
                                        </Stack>
                                        <Button
                                            bg={"#040505"}
                                            color={"white"}
                                            _hover={{
                                                bg: "green.500",
                                            }}
                                            type="submit"
                                            isLoading={isSubmitting}
                                        >
                                            Sign in
                                        </Button>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default LoginPage;

export async function getServerSideProps(context: NextPageContext) {
    const { req, res } = context;
    const session = await getSession({ req });
    if (session && res && session?.accessToken) {
        return {
            redirect: {
                // @ts-ignore
                destination: `/`,
                permanent: false,
            },
        };
    }
    return {
        props: {
            session: null,
            csrfToken: await getCsrfToken(context),
        },
    };
}
