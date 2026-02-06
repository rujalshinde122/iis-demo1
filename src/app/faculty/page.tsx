"use client"

import { useState } from "react"
import { MOCK_STORE } from "@/lib/store"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, UserCheck, UserX } from "lucide-react"

export default function FacultyPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredFaculty = MOCK_STORE.faculty.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.designation.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Faculty Registry</h1>
                    <p className="text-slate-500">Manage department faculty and research profiles.</p>
                </div>
                <div className="relative w-72">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search faculty..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-slate-50">
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Faculty Name</TableHead>
                            <TableHead>Designation</TableHead>
                            <TableHead>PhD Status</TableHead>
                            <TableHead className="text-right">Citations</TableHead>
                            <TableHead className="text-right">Consultancy (Lakhs)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredFaculty.length > 0 ? (
                            filteredFaculty.map((faculty) => (
                                <TableRow key={faculty.id}>
                                    <TableCell className="font-mono text-slate-500">{faculty.id}</TableCell>
                                    <TableCell className="font-medium text-slate-900">{faculty.name}</TableCell>
                                    <TableCell>{faculty.designation}</TableCell>
                                    <TableCell>
                                        {faculty.phd_status ? (
                                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 items-center gap-1">
                                                <UserCheck className="w-3 h-3" /> PhD
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="text-slate-500 items-center gap-1">
                                                <UserX className="w-3 h-3" /> Pursuing
                                            </Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{faculty.research_citations}</TableCell>
                                    <TableCell className="text-right font-mono">₹{faculty.consultancy_amt.toFixed(2)}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No faculty found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="text-xs text-slate-400 text-right">
                Showing {filteredFaculty.length} of {MOCK_STORE.faculty.length} faculty members
            </div>
        </div>
    )
}
