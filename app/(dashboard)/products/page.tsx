"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { products } from "@/lib/demo-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Search, Plus, Pencil, Trash2, Package } from "lucide-react"

function getStockBadgeClass(status: string) {
  switch (status) {
    case "In Stock":
      return "border-transparent bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] hover:bg-[hsl(var(--success))]/10"
    case "Low Stock":
      return "border-transparent bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))]/10"
    case "Out of Stock":
      return "border-transparent bg-destructive/10 text-destructive hover:bg-destructive/10"
    default:
      return ""
  }
}

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [dialogType, setDialogType] = useState<"add" | "edit" | "delete" | null>(null)

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <AppHeader title="Products" />
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button className="gap-2" onClick={() => { setSelectedProduct(null); setDialogType("add") }}>
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <Card key={product.id} className="border-border bg-card">
              <CardContent className="p-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={getStockBadgeClass(product.status)}>
                      {product.status}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-card-foreground">Rs. {product.price.toLocaleString()}</p>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground"
                        onClick={() => { setSelectedProduct(product); setDialogType("edit") }}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => { setSelectedProduct(product); setDialogType("delete") }}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No products found.
            </div>
          )}
        </div>
      </div>

      <Dialog open={dialogType !== null} onOpenChange={() => setDialogType(null)}>
        <DialogContent>
          {dialogType === "add" && (
            <>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>Fill in the details for the new product</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Product Name</label>
                  <Input placeholder="Enter product name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Category</label>
                  <Input placeholder="Enter category" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Price (Rs.)</label>
                  <Input type="number" placeholder="Enter price" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogType(null)}>Cancel</Button>
                <Button onClick={() => setDialogType(null)}>Add Product</Button>
              </DialogFooter>
            </>
          )}
          {dialogType === "edit" && selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogDescription>Update details for {selectedProduct.name}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Product Name</label>
                  <Input defaultValue={selectedProduct.name} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Category</label>
                  <Input defaultValue={selectedProduct.category} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Price (Rs.)</label>
                  <Input type="number" defaultValue={selectedProduct.price} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogType(null)}>Cancel</Button>
                <Button onClick={() => setDialogType(null)}>Save Changes</Button>
              </DialogFooter>
            </>
          )}
          {dialogType === "delete" && selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>Delete Product</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete {selectedProduct.name}? This action cannot be undone.
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
