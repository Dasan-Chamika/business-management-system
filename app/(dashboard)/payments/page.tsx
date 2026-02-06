"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { invoices } from "@/lib/demo-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Download } from "lucide-react"

function getPaymentBadgeClass(status: string) {
  switch (status) {
    case "Paid":
      return "border-transparent bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] hover:bg-[hsl(var(--success))]/10"
    case "Pending":
      return "border-transparent bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))]/10"
    case "Overdue":
      return "border-transparent bg-destructive/10 text-destructive hover:bg-destructive/10"
    default:
      return ""
  }
}

export default function PaymentsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = invoices.filter((i) => {
    const matchesSearch =
      i.id.toLowerCase().includes(search.toLowerCase()) ||
      i.customer.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || i.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPaid = invoices.filter((i) => i.status === "Paid").reduce((acc, i) => acc + i.amount, 0)
  const totalPending = invoices.filter((i) => i.status === "Pending").reduce((acc, i) => acc + i.amount, 0)
  const totalOverdue = invoices.filter((i) => i.status === "Overdue").reduce((acc, i) => acc + i.amount, 0)

  return (
    <>
      <AppHeader title="Payments" />
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Total Paid</p>
              <p className="text-xl font-bold text-[hsl(var(--success))]">Rs. {totalPaid.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Total Pending</p>
              <p className="text-xl font-bold text-[hsl(var(--warning))]">Rs. {totalPending.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Total Overdue</p>
              <p className="text-xl font-bold text-destructive">Rs. {totalOverdue.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search invoices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Paid">Paid</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium text-card-foreground">{invoice.id}</TableCell>
                    <TableCell className="text-muted-foreground">{invoice.customer}</TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">{invoice.date}</TableCell>
                    <TableCell className="hidden md:table-cell text-right text-card-foreground">
                      Rs. {invoice.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge className={getPaymentBadgeClass(invoice.status)}>
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download invoice</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="py-8 text-center text-muted-foreground">
                      No invoices found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
