import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Clock, Activity } from "lucide-react"

export function ComplianceSidebar() {
    return (
        <Card className="col-span-4 lg:col-span-1 border-l-4 border-l-amber-500">
            <CardHeader>
                <CardTitle className="text-lg">Compliance Alerts</CardTitle>
                <CardDescription>Action Items</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-start space-x-3 rounded-md bg-amber-50 p-2 text-sm">
                    <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-600" />
                    <div className="grid gap-1">
                        <p className="font-medium text-amber-900">Pending Appraisals</p>
                        <p className="text-xs text-amber-700">3 Faculty members pending review.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3 rounded-md bg-rose-50 p-2 text-sm">
                    <Activity className="mt-0.5 h-4 w-4 text-rose-600" />
                    <div className="grid gap-1">
                        <p className="font-medium text-rose-900">Lab Upgrade Overdue</p>
                        <p className="text-xs text-rose-700">Database Lab 3 (Crit 6).</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3 rounded-md bg-blue-50 p-2 text-sm">
                    <Clock className="mt-0.5 h-4 w-4 text-blue-600" />
                    <div className="grid gap-1">
                        <p className="font-medium text-blue-900">NBA Visit Prep</p>
                        <p className="text-xs text-blue-700">File audit scheduled for next week.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
