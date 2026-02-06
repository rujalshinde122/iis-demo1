"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

interface ReportControlsProps {
    onYearChange: (val: string) => void
    onTypeChange: (val: string) => void
    currentYear: string
    currentType: string
}

export function ReportControls({ onYearChange, onTypeChange, currentYear, currentType }: ReportControlsProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm sticky top-0 z-10 print:hidden">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500">Academic Year:</span>
                    <Select value={currentYear} onValueChange={onYearChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024-25">2024-25</SelectItem>
                            <SelectItem value="2023-24">2023-24</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="h-6 w-px bg-slate-200" />

                <div className="flex bg-slate-100 rounded-lg p-1">
                    <button
                        onClick={() => onTypeChange("annual")}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${currentType === "annual" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                    >
                        Annual Institute Report
                    </button>
                    <button
                        onClick={() => onTypeChange("nba")}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${currentType === "nba" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                    >
                        NBA Criterion 3
                    </button>
                </div>
            </div>

            <Button onClick={() => window.print()} className="bg-slate-900 hover:bg-slate-800 text-white gap-2">
                <Printer className="w-4 h-4" /> Print / Save PDF
            </Button>
        </div>
    )
}
