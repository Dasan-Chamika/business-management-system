export const customers = [
  { id: 1, name: "Kamal Perera", phone: "+94 77 123 4567", email: "kamal@email.com", status: "Active" },
  { id: 2, name: "Nimali Fernando", phone: "+94 71 234 5678", email: "nimali@email.com", status: "Active" },
  { id: 3, name: "Ruwan Silva", phone: "+94 76 345 6789", email: "ruwan@email.com", status: "Inactive" },
  { id: 4, name: "Dilini Jayawardena", phone: "+94 77 456 7890", email: "dilini@email.com", status: "Active" },
  { id: 5, name: "Amila Bandara", phone: "+94 71 567 8901", email: "amila@email.com", status: "Active" },
  { id: 6, name: "Sanduni Kumari", phone: "+94 76 678 9012", email: "sanduni@email.com", status: "Inactive" },
  { id: 7, name: "Tharindu Wijesinghe", phone: "+94 77 789 0123", email: "tharindu@email.com", status: "Active" },
  { id: 8, name: "Hasini De Silva", phone: "+94 71 890 1234", email: "hasini@email.com", status: "Active" },
]

export const orders = [
  { id: "ORD-001", customer: "Kamal Perera", date: "2026-01-15", amount: 12500, status: "Completed" },
  { id: "ORD-002", customer: "Nimali Fernando", date: "2026-01-16", amount: 8750, status: "Pending" },
  { id: "ORD-003", customer: "Ruwan Silva", date: "2026-01-17", amount: 23000, status: "Completed" },
  { id: "ORD-004", customer: "Dilini Jayawardena", date: "2026-01-18", amount: 5600, status: "Cancelled" },
  { id: "ORD-005", customer: "Amila Bandara", date: "2026-01-19", amount: 15800, status: "Pending" },
  { id: "ORD-006", customer: "Sanduni Kumari", date: "2026-01-20", amount: 9200, status: "Completed" },
  { id: "ORD-007", customer: "Tharindu Wijesinghe", date: "2026-01-21", amount: 31000, status: "Completed" },
  { id: "ORD-008", customer: "Hasini De Silva", date: "2026-01-22", amount: 4300, status: "Pending" },
]

export const products = [
  { id: 1, name: "Premium Tea Set", price: 4500, status: "In Stock", category: "Beverages" },
  { id: 2, name: "Handloom Saree", price: 12000, status: "In Stock", category: "Clothing" },
  { id: 3, name: "Cinnamon Gift Box", price: 2800, status: "Low Stock", category: "Spices" },
  { id: 4, name: "Coconut Oil (1L)", price: 850, status: "In Stock", category: "Oils" },
  { id: 5, name: "Batik Wall Hanging", price: 6500, status: "Out of Stock", category: "Decor" },
  { id: 6, name: "Ceylon Black Pepper", price: 1200, status: "In Stock", category: "Spices" },
  { id: 7, name: "Brass Elephant Figurine", price: 8900, status: "Low Stock", category: "Decor" },
  { id: 8, name: "Organic Honey (500g)", price: 1500, status: "In Stock", category: "Food" },
]

export const invoices = [
  { id: "INV-001", customer: "Kamal Perera", amount: 12500, status: "Paid", date: "2026-01-15" },
  { id: "INV-002", customer: "Nimali Fernando", amount: 8750, status: "Pending", date: "2026-01-16" },
  { id: "INV-003", customer: "Ruwan Silva", amount: 23000, status: "Paid", date: "2026-01-17" },
  { id: "INV-004", customer: "Dilini Jayawardena", amount: 5600, status: "Overdue", date: "2026-01-18" },
  { id: "INV-005", customer: "Amila Bandara", amount: 15800, status: "Pending", date: "2026-01-19" },
  { id: "INV-006", customer: "Sanduni Kumari", amount: 9200, status: "Paid", date: "2026-01-20" },
  { id: "INV-007", customer: "Tharindu Wijesinghe", amount: 31000, status: "Paid", date: "2026-01-21" },
  { id: "INV-008", customer: "Hasini De Silva", amount: 4300, status: "Pending", date: "2026-01-22" },
]

export const recentActivity = [
  { id: 1, action: "New order placed", detail: "ORD-008 by Hasini De Silva", time: "2 min ago" },
  { id: 2, action: "Payment received", detail: "INV-007 - Rs. 31,000", time: "15 min ago" },
  { id: 3, action: "Customer registered", detail: "Tharindu Wijesinghe", time: "1 hour ago" },
  { id: 4, action: "Order completed", detail: "ORD-006 for Sanduni Kumari", time: "2 hours ago" },
  { id: 5, action: "Product updated", detail: "Cinnamon Gift Box - Low Stock", time: "3 hours ago" },
  { id: 6, action: "Invoice sent", detail: "INV-005 to Amila Bandara", time: "4 hours ago" },
]

export const monthlySales = [
  { month: "Aug", sales: 145000 },
  { month: "Sep", sales: 178000 },
  { month: "Oct", sales: 162000 },
  { month: "Nov", sales: 210000 },
  { month: "Dec", sales: 285000 },
  { month: "Jan", sales: 245000 },
]
