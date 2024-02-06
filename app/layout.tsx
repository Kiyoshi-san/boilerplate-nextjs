"use client";

import Head from "next/head";
import StyledComponentsRegistry from "./lib/registry";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/global.styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Head>
            <meta name="theme-color" content="#06092B" />
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
          </Head>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
