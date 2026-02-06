"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MOCK_STORE } from "@/lib/store"
import { cn } from "@/lib/utils"

export function AttainmentTable() {
    // Direct from store, no local state maniuplation allowed
    const courses = MOCK_STORE.courses

    const getAttainmentColor = (val: number) => {
        if (val < 1.5) return "text-destructive font-bold bg-destructive/10"
        if (val > 2.5) return "text-emerald-700 font-bold bg-emerald-50"
        return "text-slate-700"
    }

    // Deterministic CO scores for display integrity
    // Using simple math to fake variety without randomness that changes on hydration
    const getStaticCOScore = (base: number, idx: number) => {
        // Deterministic variation based on idx
        const variation = [0.1, -0.1, 0.05, -0.05, 0]
        const val = Math.min(3, Math.max(0, base + variation[idx % 5]))
        return val.toFixed(2)
    }

    return (
        <div className="rounded-md border bg-white shadow-sm">
            <Table>
                <TableHeader className="bg-slate-50">
                    <TableRow>
                        <TableHead className="w-[100px] font-bold text-slate-900 border-r">Course Code</TableHead>
                        <TableHead className="w-[300px] font-bold text-slate-900 border-r">Course Name</TableHead>
                        <TableHead className="border-r">Faculty</TableHead>
                        <TableHead className="text-center w-[80px] text-xs">CO1</TableHead>
                        <TableHead className="text-center w-[80px] text-xs">CO2</TableHead>
                        <TableHead className="text-center w-[80px] text-xs">CO3</TableHead>
                        <TableHead className="text-center w-[80px] text-xs">CO4</TableHead>
                        <TableHead className="text-center w-[80px] border-r text-xs">CO5</TableHead>
                        <TableHead className="text-right font-bold text-slate-900 bg-slate-100">Final PO Attainment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {courses.map((course) => {
                        const facultyName = MOCK_STORE.faculty.find(f => f.id === course.faculty_id)?.name || "Unknown"

                        // Calculate average of static CO scores for consistency
                        const scores = [0, 1, 2, 3, 4].map(i => parseFloat(getStaticCOScore(course.co_attainment_score, i)))
                        const avgPO = scores.reduce((a, b) => a + b, 0) / 5

                        return (
                            <TableRow key={course.course_code} className="hover:bg-slate-50/50">
                                <TableCell className="font-medium text-slate-600 border-r">{course.course_code}</TableCell>
                                <TableCell className="border-r">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{course.name}</span>
                                        <span className="text-xs text-muted-foreground">{course.mapping_strength} Mapping Strength</span>
                                    </div>
                                </TableCell>
                                <TableCell className="border-r text-sm text-slate-500">{facultyName}</TableCell>

                                {/* Read-Only CO Columns */}
                                {scores.map((score, idx) => (
                                    <TableCell key={idx} className="text-center text-xs font-mono text-slate-600">
                                        {score.toFixed(2)}
                                    </TableCell>
                                ))}

                                <TableCell className={cn("text-right border-l bg-slate-50/30 font-mono", getAttainmentColor(avgPO))}>
                                    {avgPO.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
