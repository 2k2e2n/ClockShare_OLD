/*
ふくすうのページに渡って共有されるUI
*/

import type { Metadata } from "next";
import { Inter,Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });    //フォントの指定
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "ClockUP-α", //タブのタイトル
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" >


      

      <body className={notoSansJP.className}>
        <h1 className="bg-emerald-400 h-16 flex items-center justify-end">
            <a className="m-4 px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
            🏠Homepage
            </a>
            <a className="m-4 px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
            🔎about
            </a>
        </h1>
        {children}
      </body>
    </html>
  );
}
