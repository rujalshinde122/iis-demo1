export type AcademicYear = "2023-24" | "2024-25"

export interface Faculty {
    id: string
    name: string
    designation: "Professor" | "Associate Professor" | "Assistant Professor"
    phd_status: boolean
    research_citations: number
    consultancy_amt: number // in Lakhs
}

export interface StudentPerformance {
    year_label: string
    pass_percentage: number
    placement_rate: number
    avg_package_lpa: number
    students_cleared_gate: number
    phd_admissions: number
}

export interface Course {
    course_code: string
    name: string
    faculty_id: string
    co_attainment_score: number // 0-3
    mapping_strength: number // 0-3
    files_status: {
        syllabus: boolean
        lesson_plan: boolean
        model_answers: boolean
    }
    po_attainment: Record<string, number> // e.g. "PO1": 2.4
}

export interface EventLog {
    id: string
    type: "Guest Lecture" | "Workshop" | "Industrial Visit" | "FDP"
    title: string
    date: string
    participants_count: number
    funding_agency?: string
}

export interface Infrastructure {
    lab_name: string
    upgrade_cost: number // in Lakhs
    utilization_rate: number // Percentage
    last_upgrade_date: string
}

export const ACADEMIC_YEARS: AcademicYear[] = ["2023-24", "2024-25"]

export const MOCK_STORE = {
    faculty: [
        { id: "F01", name: "Dr. Faculty A", designation: "Professor", phd_status: true, research_citations: 450, consultancy_amt: 12.5 },
        { id: "F02", name: "Dr. Faculty B", designation: "Associate Professor", phd_status: true, research_citations: 120, consultancy_amt: 5.0 },
        { id: "F03", name: "Prof. Faculty C", designation: "Assistant Professor", phd_status: false, research_citations: 15, consultancy_amt: 0 },
        { id: "F04", name: "Dr. Faculty D", designation: "Professor", phd_status: true, research_citations: 890, consultancy_amt: 25.0 },
        { id: "F05", name: "Prof. Faculty E", designation: "Assistant Professor", phd_status: false, research_citations: 5, consultancy_amt: 0 },
        // ... generated more for total 25
        ...Array.from({ length: 20 }).map((_, i) => ({
            id: `F${i + 6}`,
            name: `Prof. Faculty ${i + 6}`,
            designation: (i % 5 === 0 ? "Associate Professor" : "Assistant Professor") as Faculty["designation"],
            phd_status: i % 3 === 0,
            research_citations: Math.floor(Math.random() * 50),
            consultancy_amt: Math.random() > 0.8 ? Math.floor(Math.random() * 5) : 0
        }))
    ] as Faculty[],

    studentPerformance: [
        { year_label: "2020-21", pass_percentage: 88, placement_rate: 75, avg_package_lpa: 8.5, students_cleared_gate: 12, phd_admissions: 2 },
        { year_label: "2021-22", pass_percentage: 92, placement_rate: 82, avg_package_lpa: 9.2, students_cleared_gate: 15, phd_admissions: 3 },
        { year_label: "2022-23", pass_percentage: 94, placement_rate: 85, avg_package_lpa: 10.5, students_cleared_gate: 18, phd_admissions: 4 },
        { year_label: "2023-24", pass_percentage: 96, placement_rate: 88, avg_package_lpa: 11.8, students_cleared_gate: 22, phd_admissions: 6 },
        { year_label: "2024-25", pass_percentage: 97, placement_rate: 90, avg_package_lpa: 14.0, students_cleared_gate: 25, phd_admissions: 8 } // Projected
    ] as StudentPerformance[],

    courses: [
        {
            course_code: "CS3001", name: "Advanced Database Systems", faculty_id: "F01",
            co_attainment_score: 2.65, mapping_strength: 2.8,
            files_status: { syllabus: true, lesson_plan: true, model_answers: true },
            po_attainment: { PO1: 2.8, PO2: 2.5, PO3: 2.7 }
        },
        {
            course_code: "CS3002", name: "Compiler Design", faculty_id: "F02",
            co_attainment_score: 1.45, mapping_strength: 2.0, // Alert: Low attainment
            files_status: { syllabus: true, lesson_plan: true, model_answers: false }, // Alert: Missing file
            po_attainment: { PO1: 1.5, PO2: 1.4, PO3: 1.6 }
        },
        {
            course_code: "CS3005", name: "Machine Learning", faculty_id: "F04",
            co_attainment_score: 2.9, mapping_strength: 3.0,
            files_status: { syllabus: true, lesson_plan: true, model_answers: true },
            po_attainment: { PO1: 3.0, PO2: 2.9, PO3: 2.8 }
        },
        {
            course_code: "CS2001", name: "Data Structures", faculty_id: "F03",
            co_attainment_score: 1.3, mapping_strength: 2.2, // Alert: Low attainment
            files_status: { syllabus: true, lesson_plan: false, model_answers: false }, // Alert: Missing files
            po_attainment: { PO1: 1.3, PO2: 1.2, PO3: 1.4 }
        },
        ...Array.from({ length: 10 }).map((_, i) => ({
            course_code: `CS400${i}`,
            name: `Elective Subject ${i + 1}`,
            faculty_id: `F${i + 5}`,
            co_attainment_score: 2.0 + (Math.random()),
            mapping_strength: 2.5,
            files_status: { syllabus: true, lesson_plan: true, model_answers: Math.random() > 0.2 },
            po_attainment: { PO1: 2.2, PO2: 2.3, PO3: 2.1 }
        }))
    ] as Course[],

    events: [
        { id: "E1", type: "Guest Lecture", title: "AI in Healthcare", date: "2024-08-15", participants_count: 120, funding_agency: "Self" },
        { id: "E2", type: "Workshop", title: "Cloud Computing with AWS", date: "2024-09-10", participants_count: 50, funding_agency: "WCE Alumni" },
        { id: "E3", type: "Industrial Visit", title: "Visit to NVIDIA Pune", date: "2024-10-05", participants_count: 60 },
    ] as EventLog[],

    infrastructure: [
        { lab_name: "High Performance Computing Lab", upgrade_cost: 15.0, utilization_rate: 85, last_upgrade_date: "2022-06-15" },
        { lab_name: "IoT & Embedded Systems Lab", upgrade_cost: 5.0, utilization_rate: 60, last_upgrade_date: "2023-01-20" },
        { lab_name: "Database Lab", upgrade_cost: 2.5, utilization_rate: 90, last_upgrade_date: "2020-05-10" }, // Alert available
    ] as Infrastructure[]
}
