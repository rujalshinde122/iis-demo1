"use client"

import { useState } from "react"
import { MOCK_STORE } from "@/lib/store"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
// import { useToast } from "@/components/ui/use-toast" // Use shadcn convention if installed, else standardized
import { Badge } from "@/components/ui/badge"
import { RefreshCw, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CoursesPage() {
    const [courses, setCourses] = useState(MOCK_STORE.courses)
    const [isSyncing, setIsSyncing] = useState(false)
    // const { toast } = useToast()

    const handleSync = () => {
        setIsSyncing(true)

        setTimeout(() => {
            setIsSyncing(false)
            // Simulate sync by setting all files to present
            setCourses(prev => prev.map(c => ({
                ...c,
                files_status: { syllabus: true, lesson_plan: true, model_answers: true }
            })))
        }, 2000)
    }

    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Course Management</h1>
                    <p className="text-slate-500">Monitor course file status and exam readiness.</p>
                </div>
                <Button
                    onClick={handleSync}
                    disabled={isSyncing}
                    className={cn("gap-2 min-w-[200px]", isSyncing ? "bg-slate-100 text-slate-500" : "bg-indigo-600 hover:bg-indigo-700")}
                >
                    <RefreshCw className={cn("w-4 h-4", isSyncing && "animate-spin")} />
                    {isSyncing ? "Syncing..." : "Simulate Exam Cell Sync"}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => {
                    const facultyName = MOCK_STORE.faculty.find(f => f.id === course.faculty_id)?.name || "Unknown Faculty"
                    // Calculate mock readiness for demo
                    const readiness = (
                        (course.files_status.syllabus ? 33 : 0) +
                        (course.files_status.lesson_plan ? 33 : 0) +
                        (course.files_status.model_answers ? 34 : 0)
                    )

                    return (
                        <Card key={course.course_code} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                    <div className="p-2 bg-indigo-50 rounded-lg">
                                        <BookOpen className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    {readiness === 100 ?
                                        <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-emerald-200">Ready</Badge> :
                                        <Badge variant="destructive" className="bg-rose-50 text-rose-600 hover:bg-rose-100 border-rose-200">Action Needed</Badge>
                                    }
                                </div>
                                <CardTitle className="mt-4 text-lg">{course.name}</CardTitle>
                                <CardDescription className="font-mono text-xs">{course.course_code}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-3 text-sm text-slate-600 space-y-1">
                                <p>Faculty: <span className="font-medium text-slate-900">{facultyName}</span></p>
                                <p>Mapping Strength: <span className="font-medium text-slate-900">{course.mapping_strength.toFixed(1)}</span></p>
                            </CardContent>
                            <CardFooter className="flex-col items-start gap-2 pt-3 border-t bg-slate-50/50">
                                <div className="flex justify-between w-full text-xs font-medium text-slate-500">
                                    <span>File Readiness</span>
                                    <span>{readiness}%</span>
                                </div>
                                <Progress value={readiness} className={cn("h-2", readiness === 100 ? "bg-emerald-100 [&>div]:bg-emerald-500" : "bg-slate-100")} />
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
