import Providers from "./providers";
import "./globals.css"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
      <link rel="icon" href="/favicon.png?v=2" />

         </head>
      <body className="max-w-[1200px] mx-auto p-6 text-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
