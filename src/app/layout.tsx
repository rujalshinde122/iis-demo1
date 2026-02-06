import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IIS - Institutional Intelligence Suite",
  description: "Enterprise Dashboard for WCE CSE Department",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased bg-slate-50 text-slate-900")}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-72 p-8 overflow-y-auto h-screen print:ml-0 print:p-0 print:overflow-visible">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
