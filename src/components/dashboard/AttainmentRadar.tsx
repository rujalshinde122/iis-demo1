"use client"

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
    { subject: "PO1", A: 2.4, fullMark: 3 },
    { subject: "PO2", A: 2.1, fullMark: 3 },
    { subject: "PO3", A: 2.6, fullMark: 3 },
    { subject: "PO4", A: 1.8, fullMark: 3 },
    { subject: "PO5", A: 2.2, fullMark: 3 },
    { subject: "PO6", A: 1.5, fullMark: 3 },
    { subject: "PO7", A: 2.9, fullMark: 3 },
    { subject: "PO8", A: 2.0, fullMark: 3 },
    { subject: "PO9", A: 2.3, fullMark: 3 },
    { subject: "PO10", A: 1.9, fullMark: 3 },
    { subject: "PO11", A: 2.5, fullMark: 3 },
    { subject: "PO12", A: 2.1, fullMark: 3 },
]

export function AttainmentRadar() {
    return (
        <Card className="col-span-1 h-full min-h-[400px]">
            <CardHeader>
                <CardTitle>PO Attainment Profile</CardTitle>
                <CardDescription>Average attainment levels across all 12 Program Outcomes (Scale 0-3).</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid stroke="#e2e8f0" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: "#475569", fontSize: 12, fontWeight: 500 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 3]} tick={false} axisLine={false} />
                            <Radar
                                name="Dept Average"
                                dataKey="A"
                                stroke="#4f46e5"
                                fill="#4f46e5"
                                fillOpacity={0.3}
                            />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
