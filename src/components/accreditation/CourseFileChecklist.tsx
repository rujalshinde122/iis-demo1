"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
// import { ScrollArea } from "@/components/ui/scroll-area" // Using div overflow for now to minimize installs if ScrollArea fails, but better to use simple div first. 
import { FileText, CheckCircle2, AlertCircle, FolderOpen } from "lucide-react"
import { MOCK_STORE } from "@/lib/store"
import { cn } from "@/lib/utils"

export function CourseFileChecklist() {
    const [selectedCourseId, setSelectedCourseId] = useState<string>(MOCK_STORE.courses[0]?.course_code || "")

    const selectedCourse = MOCK_STORE.courses.find(c => c.course_code === selectedCourseId)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            {/* Left List */}
            <Card className="col-span-1 border-r-0 rounded-r-none h-full flex flex-col">
                <CardHeader className="py-4 px-4 bg-slate-50 border-b">
                    <CardTitle className="text-base font-bold flex items-center gap-2">
                        <FolderOpen className="w-4 h-4 text-emerald-600" />
                        Course List
                    </CardTitle>
                </CardHeader>
                <div className="flex-1 overflow-y-auto">
                    {MOCK_STORE.courses.map((course) => (
                        <button
                            key={course.course_code}
                            onClick={() => setSelectedCourseId(course.course_code)}
                            className={cn(
                                "w-full text-left px-4 py-3 border-b text-sm transition-colors hover:bg-slate-50 flex items-center justify-between",
                                selectedCourseId === course.course_code ? "bg-slate-100 border-l-4 border-l-emerald-600 bg-emerald-50/10" : "border-l-4 border-l-transparent"
                            )}
                        >
                            <div>
                                <div className="font-semibold text-slate-800">{course.course_code}</div>
                                <div className="text-xs text-slate-500 truncate max-w-[200px]">{course.name}</div>
                            </div>
                            {course.files_status.syllabus && course.files_status.lesson_plan && course.files_status.model_answers ? (
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            ) : (
                                <div className="w-2 h-2 rounded-full bg-amber-400" />
                            )}
                        </button>
                    ))}
                </div>
            </Card>

            {/* Right Details */}
            <Card className="col-span-2 border-l-0 rounded-l-none h-full flex flex-col">
                {selectedCourse ? (
                    <>
                        <CardHeader className="py-6 border-b bg-slate-50/50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg text-slate-900">{selectedCourse.name} ({selectedCourse.course_code})</CardTitle>
                                    <CardDescription className="mt-1">
                                        Faculty: <span className="font-medium text-slate-700">{MOCK_STORE.faculty.find(f => f.id === selectedCourse.faculty_id)?.name}</span>
                                    </CardDescription>
                                </div>
                                <Badge variant={selectedCourse.files_status.model_answers ? "default" : "destructive"}>
                                    {selectedCourse.files_status.model_answers ? "Audit Passed" : "Action Required"}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <div className="grid gap-6">
                                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 border-b pb-2">Mandatory OBE Docs</h3>

                                <div className="flex items-start space-x-4 p-4 border rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                                    <Checkbox id="syllabus" checked={selectedCourse.files_status.syllabus} disabled className="mt-1" />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="syllabus"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                                        >
                                            <FileText className="w-4 h-4 text-slate-400" /> Course Syllabus v2.0
                                            {selectedCourse.files_status.syllabus && <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-200 bg-emerald-50">Verified</Badge>}
                                        </label>
                                        <p className="text-sm text-muted-foreground">
                                            Approved copy of the university syllabus with CO definitions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 border rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                                    <Checkbox id="lesson_plan" checked={selectedCourse.files_status.lesson_plan} disabled className="mt-1" />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="lesson_plan"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                                        >
                                            <FileText className="w-4 h-4 text-slate-400" /> Detailed Lesson Plan
                                            {selectedCourse.files_status.lesson_plan ?
                                                <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-200 bg-emerald-50">Verified</Badge> :
                                                <Badge variant="destructive" className="text-[10px]">Missing</Badge>
                                            }
                                        </label>
                                        <p className="text-sm text-muted-foreground">
                                            Hour-wise teaching plan with referenced text books.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 border rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                                    <Checkbox id="model_answers" checked={selectedCourse.files_status.model_answers} disabled className="mt-1" />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor="model_answers"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                                        >
                                            <FileText className="w-4 h-4 text-slate-400" /> Model Answer Sheets
                                            {selectedCourse.files_status.model_answers ?
                                                <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-200 bg-emerald-50">Verified</Badge> :
                                                <Badge variant="destructive" className="text-[10px]">Missing</Badge>
                                            }
                                        </label>
                                        <p className="text-sm text-muted-foreground">
                                            Sample evaluation copies for Top, Average, and Weak students.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {!selectedCourse.files_status.model_answers && (
                                <div className="rounded-md bg-amber-50 p-4 flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-amber-800 text-sm">Action Required</h4>
                                        <p className="text-xs text-amber-700 mt-1">
                                            Please notify <strong>{MOCK_STORE.faculty.find(f => f.id === selectedCourse.faculty_id)?.name}</strong> to upload the missing documents before the NBA Visit (15th Oct).
                                        </p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-400">
                        Select a course to view audit status.
                    </div>
                )}
            </Card>
        </div>
    )
}
