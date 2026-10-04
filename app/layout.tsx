import "./globals.css"; import type { Metadata } from "next";
export const metadata:Metadata={title:"SP BUILDER — hardware-resett",description:"Design a handheld that is actually yours."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
