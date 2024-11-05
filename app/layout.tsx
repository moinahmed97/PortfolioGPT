import type { Metadata } from "next";
import Script from 'next/script';



import "./globals.css";

export const metadata: Metadata = {
  title: "Moin's Portfolio",
  description: "My Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
        <Script src="/scripts.js" strategy="lazyOnload"/>
        <link rel="icon" type="image/jpg" href="/imgs/favicon.jpg" />
      
      </head>
      <body>
        {children}
  
      </body>
    </html>
  );
}
