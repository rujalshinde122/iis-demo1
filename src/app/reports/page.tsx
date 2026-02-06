"use client"

import { useState } from "react"
import { ReportControls } from "@/components/reports/ReportControls"
import { AnnualReportContent, NBAReportContent } from "@/components/reports/ReportContent"

export default function ReportsPage() {
    const [year, setYear] = useState("2024-25")
    const [type, setType] = useState("annual")

    return (
        <div className="flex flex-col min-h-screen bg-slate-100 print:bg-white print:m-0 print:p-0">
            <ReportControls
                currentYear={year}
                currentType={type}
                onYearChange={setYear}
                onTypeChange={setType}
            />

            <div className="flex-1 flex justify-center p-8 print:p-0 print:block">
                {/* A4 Paper Container */}
                <div
                    id="report-container"
                    className="bg-white shadow-2xl w-[210mm] min-h-[297mm] p-[15mm] print:shadow-none print:w-full print:min-h-0 print:p-0 print:m-0"
                >
                    {type === "annual" ? (
                        <AnnualReportContent year={year} />
                    ) : (
                        <NBAReportContent />
                    )}
                </div>
            </div>
        </div>
    )
}
