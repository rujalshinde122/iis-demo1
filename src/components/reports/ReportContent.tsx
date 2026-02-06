import { MOCK_STORE } from "@/lib/store"
// import { cn } from "@/lib/utils"
import { GraduationCap, Trophy, BookOpen } from "lucide-react"

export function AnnualReportContent({ year }: { year: string }) {
    const { studentPerformance, faculty } = MOCK_STORE

    // Get data for selected year (mock logic: finding closest match or showing all for demo)
    const performance = studentPerformance.find(p => p.year_label === year) || studentPerformance[studentPerformance.length - 1]

    const professors = faculty.filter(f => f.designation === "Professor").length
    const phdHolders = faculty.filter(f => f.phd_status).length
    const totalCitations = faculty.reduce((acc, curr) => acc + curr.research_citations, 0)


    // const eventsCount = events.length

    return (
        <div className="space-y-8 text-slate-900">
            {/* Header */}
            <div className="text-center border-b-2 border-slate-900 pb-6 mb-8">
                <div className="flex justify-center items-center gap-4 mb-4">
                    {/* Placeholder for Logo */}
                    <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-2xl">
                        W
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-extrabold tracking-tight uppercase">Walchand College of Engineering</h1>
                        <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">Department of Computer Science & Engineering</p>
                    </div>
                </div>
                <h2 className="text-2xl font-serif font-bold text-slate-800">Annual Department Report</h2>
                <p className="text-lg text-slate-600 font-medium">{year}</p>
            </div>

            {/* Section 1: Academic Excellence */}
            <section>
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 uppercase tracking-wide border-b border-slate-300 pb-2 mb-4">
                    <GraduationCap className="w-5 h-5" /> Academic Excellence
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                    The Department of CSE continues to uphold its legacy of academic brilliance.
                    In the academic year {year}, the department achieved a remarkable pass percentage of <strong>{performance.pass_percentage}%</strong>.
                    A total of <strong>{performance.students_cleared_gate} students</strong> qualified for the GATE examination, demonstrating strong fundamental knowledge.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center py-4 bg-slate-50 rounded-lg border">
                    <div>
                        <p className="text-3xl font-bold text-slate-800">{performance.pass_percentage}%</p>
                        <p className="text-xs uppercase font-semibold text-slate-500">Pass Percentage</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-slate-800">{performance.students_cleared_gate}</p>
                        <p className="text-xs uppercase font-semibold text-slate-500">GATE Qualifiers</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-slate-800">{performance.phd_admissions}</p>
                        <p className="text-xs uppercase font-semibold text-slate-500">Ph.D. Admissions</p>
                    </div>
                </div>
            </section>

            {/* Section 2: Faculty & Research */}
            <section>
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 uppercase tracking-wide border-b border-slate-300 pb-2 mb-4">
                    <BookOpen className="w-5 h-5" /> Faculty & Research
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                    Our faculty strength stands at 25, with <strong>{phdHolders} Ph.D. holders</strong> and <strong>{professors} Professors</strong>.
                    The research culture is vibrant, with a cumulative citation count of <strong>{totalCitations}</strong> this year.
                </p>
                <div className="border rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-100 border-b">
                            <tr>
                                <th className="py-2 px-4 text-left">Faculty Name</th>
                                <th className="py-2 px-4 text-left">Designation</th>
                                <th className="py-2 px-4 text-right">Citations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculty.slice(0, 5).map((f) => (
                                <tr key={f.id} className="border-b last:border-0 hover:bg-slate-50">
                                    <td className="py-2 px-4">{f.name}</td>
                                    <td className="py-2 px-4 text-slate-600">{f.designation}</td>
                                    <td className="py-2 px-4 text-right font-mono">{f.research_citations}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="bg-slate-50 p-2 text-center text-xs text-slate-500 italic">
                        *Top 5 Faculty by Citations shown. Full list in Annexure A.
                    </div>
                </div>
            </section>

            {/* Section 3: Student Achievements */}
            <section>
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 uppercase tracking-wide border-b border-slate-300 pb-2 mb-4">
                    <Trophy className="w-5 h-5" /> Placements & Outreach
                </h3>
                <div className="flex gap-6 items-start">
                    <div className="flex-1">
                        <p className="text-justify leading-relaxed mb-4">
                            Placement statistics reached new heights with an average package of <strong>{performance.avg_package_lpa} LPA</strong> and a placement rate of <strong>{performance.placement_rate}%</strong>.
                            Top recruiters included Google, NVIDIA, and Microsoft.
                        </p>
                    </div>
                    <div className="flex-1 bg-emerald-50 border border-emerald-100 p-4 rounded-lg">
                        <h4 className="font-bold text-emerald-800 mb-2 text-sm uppercase">Placement Highlights</h4>
                        <ul className="space-y-2 text-sm text-emerald-700">
                            <li className="flex justify-between"><span>Placement Rate:</span> <span className="font-bold">{performance.placement_rate}%</span></li>
                            <li className="flex justify-between"><span>Avg Package:</span> <span className="font-bold">{performance.avg_package_lpa} LPA</span></li>
                            <li className="flex justify-between"><span>Highest Package:</span> <span className="font-bold">42.0 LPA</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-end text-sm text-slate-500">
                <div>
                    <p>Walchand College of Engineering, Sangli</p>
                    <p>Vishrambag, Sangli - 416415</p>
                </div>
                <div className="text-right">
                    <p>Generated by IIS Pro Suite</p>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export function NBAReportContent() {
    return (
        <div className="space-y-6 text-black">
            {/* Header */}
            <div className="text-center border-b-2 border-black pb-4 mb-6">
                <h1 className="text-xl font-bold uppercase">Criterion 3: Course Outcomes & Program Outcomes</h1>
                <p className="text-sm">Self Assessment Report (SAR) - Part B</p>
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-lg uppercase">3.1. CO-PO Mapping & Attainment</h3>
                <p className="text-sm text-justify mb-4">
                    The following table summarizes the Course Outcome (CO) to Program Outcome (PO) mapping strength and final attainment levels for the current academic year.
                </p>

                <div className="border border-black">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-black py-2 px-2 text-left w-24">Course Code</th>
                                <th className="border border-black py-2 px-2 text-left">Course Name</th>
                                <th className="border border-black py-2 px-2 text-center w-24">Mapping Strength</th>
                                <th className="border border-black py-2 px-2 text-center w-24">Attainment (Avg)</th>
                                <th className="border border-black py-2 px-2 text-center w-24">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_STORE.courses.map((c) => {
                                const avg = Object.values(c.po_attainment).reduce((a, b) => a + b, 0) / 3
                                return (
                                    <tr key={c.course_code}>
                                        <td className="border border-black py-2 px-2 font-medium">{c.course_code}</td>
                                        <td className="border border-black py-2 px-2">{c.name}</td>
                                        <td className="border border-black py-2 px-2 text-center">{c.mapping_strength}</td>
                                        <td className="border border-black py-2 px-2 text-center">{avg.toFixed(2)}</td>
                                        <td className="border border-black py-2 px-2 text-center font-bold">
                                            {avg < 1.5 ? "Low" : avg > 2.5 ? "High" : "Moderate"}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8">
                    <h3 className="font-bold text-lg uppercase mb-2">3.2. Observations</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Overall PO attainment is satisfactory for 80% of courses.</li>
                        <li>Action plans have been initiated for courses with low attainment (&lt; 1.5).</li>
                        <li>Curriculum gaps identified in &quot;Compiler Design&quot; are being addressed through workshops.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
