
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { MOCK_STORE } from "@/lib/store" // Importing store for mock data access if needed
import { KPICards } from "@/components/dashboard/KPICards"
import { PerformanceChart } from "@/components/dashboard/PerformanceChart"
import { ComplianceSidebar } from "@/components/dashboard/ComplianceSidebar"
import { AttainmentRadar } from "@/components/dashboard/AttainmentRadar"
import { CheckCircle2, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
    // Generate PO Coverage Data (Mock logic based on "real" data structure)
    // In a real app, this would be computed from the Course-CO-PO mapping
    // Generate PO Coverage Data (Mock logic based on "real" data structure)
    // In a real app, this would be computed from the Course-CO-PO mapping
    const poCoverage = Array.from({ length: 12 }).map((_, i) => {
        const poId = `PO${i + 1} `
        // Fixed mock count to ensure consistent server/client rendering
        // pseudo-random but deterministic: (i * 7 + 3) % 9
        const count = (i > 9) ? Math.floor((i * 3) % 4) : Math.floor((i * 7 + 3) % 9) + 1
        return { id: poId, count }
    })

    const recentActivity = [
        { time: "10:30 AM", type: "Submission", faculty: "Dr. Faculty A", desc: "Uploaded CS3001 Course File", po: "PO1, PO3" },
        { time: "09:15 AM", type: "Event", faculty: "Prof. Faculty C", desc: "Guest Lecture: AI Ethics", po: "PO6, PO8" },
        { time: "Yesterday", type: "Audit", faculty: "System", desc: "Auto-verified NBA Criterion 3", po: "-" },
        { time: "Yesterday", type: "Publication", faculty: "Dr. Faculty D", desc: "Journal Submission: IEEE Access", po: "PO4" },
        { time: "05 Feb", type: "Meeting", faculty: "HOD", desc: "DAC Committee Review", po: "PO12" },
    ]

    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6"> {/* Added padding for better spacing */}
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Executive Dashboard</h2>
                    <p className="text-muted-foreground">
                        Department of Computer Science & Engineering | Academic Year 2024-25
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100 shadow-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        System Status: Operational
                    </span>
                </div>
            </div>

            <KPICards />

            {/* Visual Analytics Section: Performance Trend & Attainment Radar */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 h-full">
                <div className="col-span-4 lg:col-span-4 h-full">
                    <PerformanceChart />
                </div>
                <div className="col-span-full lg:col-span-3 h-full">
                    <AttainmentRadar />
                </div>
            </div>

            {/* PO Coverage Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                    <h3 className="text-xl font-bold text-slate-900">Program Outcomes (PO) Coverage</h3>
                    <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">Live Mapping Status</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {poCoverage.map((po) => (
                        <Card key={po.id} className={cn("flex flex-col items-center justify-center py-6 border-l-4 transition-all hover:shadow-md hover:-translate-y-1 duration-200", po.count > 0 ? "border-l-emerald-500" : "border-l-slate-200")}>
                            <div className="flex items-center gap-2 mb-2">
                                {po.count > 3 ? (
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                ) : po.count > 0 ? (
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                                ) : (
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                )}
                                <span className="text-lg font-bold text-slate-700">{po.id}</span>
                            </div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{po.count} Items</span>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Bottom Section: Operations & Activity */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    {/* Placeholder for future expansion or larger activity feed */}
                    <Card className="h-full">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-600" />
                                Recent Activity Log
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {recentActivity.map((item, i) => (
                                <div key={i} className="flex flex-col gap-1 pb-3 border-b last:border-0 last:pb-0">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-mono text-slate-400">{item.time}</span>
                                        <span className={cn("text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded",
                                            item.type === 'Audit' ? "bg-amber-100 text-amber-700" :
                                                item.type === 'Submission' ? "bg-emerald-100 text-emerald-700" :
                                                    "bg-slate-100 text-slate-500")}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-800">{item.desc}</p>
                                    <div className="flex justify-between items-center mt-0.5">
                                        <span className="text-xs text-slate-500">by {item.faculty}</span>
                                        <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-1 rounded">{item.po}</span>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                    <ComplianceSidebar />
                </div>
            </div>
        </div>
    )
}
