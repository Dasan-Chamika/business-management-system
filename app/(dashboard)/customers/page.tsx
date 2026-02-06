"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { customers } from "@/lib/demo-data"
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Search, Plus, Eye, Pencil, Trash2 } from "lucide-react"

export default function CustomersPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null)
  const [dialogType, setDialogType] = useState<"view" | "edit" | "delete" | null>(null)

  const filtered = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
    const matchesStatus = statusFilter === "all" || c.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <>
      <AppHeader title="Customers" />
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
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
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden sm:table-cell">Phone</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium text-card-foreground">{customer.name}</TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">{customer.phone}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{customer.email}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          customer.status === "Active"
                            ? "border-transparent bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] hover:bg-[hsl(var(--success))]/10"
                            : "border-transparent bg-muted text-muted-foreground hover:bg-muted"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={() => { setSelectedCustomer(customer); setDialogType("view") }}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={() => { setSelectedCustomer(customer); setDialogType("edit") }}
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => { setSelectedCustomer(customer); setDialogType("delete") }}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                      No customers found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog open={dialogType !== null} onOpenChange={() => setDialogType(null)}>
        <DialogContent>
          {dialogType === "view" && selectedCustomer && (
            <>
              <DialogHeader>
                <DialogTitle>Customer Details</DialogTitle>
                <DialogDescription>Viewing details for {selectedCustomer.name}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div className="flex justify-between"><span className="text-sm text-muted-foreground">Name</span><span className="text-sm font-medium text-foreground">{selectedCustomer.name}</span></div>
                <div className="flex justify-between"><span className="text-sm text-muted-foreground">Phone</span><span className="text-sm font-medium text-foreground">{selectedCustomer.phone}</span></div>
                <div className="flex justify-between"><span className="text-sm text-muted-foreground">Email</span><span className="text-sm font-medium text-foreground">{selectedCustomer.email}</span></div>
                <div className="flex justify-between"><span className="text-sm text-muted-foreground">Status</span><span className="text-sm font-medium text-foreground">{selectedCustomer.status}</span></div>
              </div>
            </>
          )}
          {dialogType === "edit" && selectedCustomer && (
            <>
              <DialogHeader>
                <DialogTitle>Edit Customer</DialogTitle>
                <DialogDescription>Update details for {selectedCustomer.name}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input defaultValue={selectedCustomer.name} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input defaultValue={selectedCustomer.phone} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input defaultValue={selectedCustomer.email} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogType(null)}>Cancel</Button>
                <Button onClick={() => setDialogType(null)}>Save Changes</Button>
              </DialogFooter>
            </>
          )}
          {dialogType === "delete" && selectedCustomer && (
            <>
              <DialogHeader>
                <DialogTitle>Delete Customer</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete {selectedCustomer.name}? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogType(null)}>Cancel</Button>
                <Button variant="destructive" onClick={() => setDialogType(null)}>Delete</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
