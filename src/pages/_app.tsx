import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import defaultSEOConfig from "../../next-seo.config";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

type ComponentWithPageLayout = AppProps & {
    Component: AppProps["Component"] & {
        PageLayout?: React.ComponentType;
    };
};

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
});

const MyApp = ({ Component, pageProps }: ComponentWithPageLayout) => {
    return (
        <ThemeProvider attribute="class" storageKey="chakra-ui-color-mode" defaultTheme="light">
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
            </Head>
            <DefaultSeo {...defaultSEOConfig} />
            {Component.PageLayout ? (
                <Component.PageLayout>
                    <Component {...pageProps} />
                </Component.PageLayout>
            ) : (
                <Component {...pageProps} />
            )}
        </ThemeProvider>
    );
};

export default MyApp;
