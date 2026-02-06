import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AttainmentTable } from "@/components/accreditation/AttainmentTable"
import { CourseFileChecklist } from "@/components/accreditation/CourseFileChecklist"

export default function AccreditationPage() {
    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">OBE & Accreditation Engine</h2>
                    <p className="text-muted-foreground">
                        Manage Program Outcomes (POs) and Course Files for NBA Compliance.
                    </p>
                </div>
            </div>

            <Tabs defaultValue="matrix" className="space-y-4">
                <TabsList className="bg-white border">
                    <TabsTrigger value="matrix">Attainment Matrix</TabsTrigger>
                    <TabsTrigger value="auditor">Course File Auditor</TabsTrigger>
                </TabsList>
                <TabsContent value="matrix" className="space-y-4">
                    <AttainmentTable />
                </TabsContent>
                <TabsContent value="auditor" className="space-y-4">
                    <CourseFileChecklist />
                </TabsContent>
            </Tabs>
        </div>
    )
}
