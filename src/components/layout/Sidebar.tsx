"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Award, Users, FileText, BookOpen } from "lucide-react";

export function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Executive Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { label: "Accreditation Engine", href: "/accreditation", icon: Award },
        { label: "Faculty Registry", href: "/faculty", icon: Users },
        { label: "Course Management", href: "/courses", icon: BookOpen },
        { label: "Annual Reports", href: "/reports", icon: FileText },
    ];

    return (
        <aside className="w-72 bg-[#0a192f] text-white flex flex-col h-screen fixed inset-y-0 left-0 z-50 shadow-xl print:hidden">
            {/* Brand Header */}
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-xl font-bold tracking-wide">IIS PRO SUITE</h1>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">WCE CSE Department</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                                isActive
                                    ? "bg-white/10 text-white border-l-4 border-emerald-500"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / User Info */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white">
                        HD
                    </div>
                    <div>
                        <p className="text-sm font-medium">Dr. Head of Dept</p>
                        <p className="text-xs text-emerald-400">Administrator</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
