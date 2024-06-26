import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "家計簿アプリ",
  description: "Generated by create next app",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         {children}
//       </body>
//       <Head>
//       <title>Home</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     </html>
//   );
// }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <style>{inter.styles}</style>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
