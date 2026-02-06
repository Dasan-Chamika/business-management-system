"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Save } from "lucide-react"

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <>
      <AppHeader title="Settings" />
      <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-card-foreground">Business Information</CardTitle>
            <CardDescription>Update your business details and contact information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Business Name</label>
                  <Input defaultValue="Lanka Spice Traders" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Business Type</label>
                  <Input defaultValue="Retail & Wholesale" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input type="email" defaultValue="info@lankaspice.lk" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input defaultValue="+94 11 234 5678" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Business Address</label>
                <Textarea
                  defaultValue="No. 45, Galle Road, Colombo 03, Sri Lanka"
                  rows={3}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-card-foreground">Regional Settings</CardTitle>
            <CardDescription>Configure your currency, timezone and locale preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Currency</label>
                <Input defaultValue="LKR (Rs.)" disabled />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Timezone</label>
                <Input defaultValue="Asia/Colombo (GMT+5:30)" disabled />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Language</label>
                <Input defaultValue="English" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="flex items-center justify-end gap-3">
          {saved && (
            <p className="text-sm text-[hsl(var(--success))]">Settings saved successfully!</p>
          )}
          <Button variant="outline">Cancel</Button>
          <Button className="gap-2" onClick={handleSave}>
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </>
  )
}
