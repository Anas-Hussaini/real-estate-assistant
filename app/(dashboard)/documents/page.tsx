"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileText, 
  Upload, 
  Search, 
  Download, 
  Share2, 
  MoreHorizontal,
  File,
  Image as ImageIcon,
  FileCheck
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const documents = [
  {
    id: 1,
    name: "Purchase Agreement - 567 Oak St.pdf",
    type: "Contract",
    category: "Contracts",
    size: "2.4 MB",
    date: "Dec 20, 2024",
    client: "Sarah Johnson",
    property: "Bellevue Family Home",
    status: "Signed"
  },
  {
    id: 2,
    name: "Property Disclosure - Downtown Loft.pdf",
    type: "Disclosure",
    category: "Legal",
    size: "1.8 MB",
    date: "Dec 19, 2024",
    client: "Michael Chen",
    property: "Modern Downtown Loft",
    status: "Pending"
  },
  {
    id: 3,
    name: "Inspection Report - Waterfront Condo.pdf",
    type: "Report",
    category: "Inspections",
    size: "5.2 MB",
    date: "Dec 18, 2024",
    client: "Emma Wilson",
    property: "Waterfront Condo",
    status: "Complete"
  },
  {
    id: 4,
    name: "Listing Agreement - Suburban Home.pdf",
    type: "Agreement",
    category: "Contracts",
    size: "1.1 MB",
    date: "Dec 17, 2024",
    client: "David Martinez",
    property: "Suburban Dream Home",
    status: "Signed"
  },
  {
    id: 5,
    name: "Title Report - Luxury Estate.pdf",
    type: "Report",
    category: "Title",
    size: "3.7 MB",
    date: "Dec 16, 2024",
    client: "Lisa Anderson",
    property: "Elegant Estate",
    status: "Complete"
  },
  {
    id: 6,
    name: "Appraisal Report - Townhouse.pdf",
    type: "Appraisal",
    category: "Appraisals",
    size: "2.9 MB",
    date: "Dec 15, 2024",
    client: "Robert Brown",
    property: "Contemporary Townhouse",
    status: "Complete"
  },
]

const getFileIcon = (type: string) => {
  if (type.includes("Report") || type.includes("Disclosure")) {
    return FileText
  }
  if (type.includes("Contract") || type.includes("Agreement")) {
    return FileCheck
  }
  return File
}

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
          <p className="text-muted-foreground">
            Manage contracts, reports, and property documents
          </p>
        </div>
        <Button size="lg">
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contracts</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              Active agreements
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Signatures</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Awaiting client signatures
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 GB</div>
            <p className="text-xs text-muted-foreground">
              of 10 GB available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents by name, client, or property..." className="pl-9" />
            </div>
            <Button variant="outline">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>All your property documents in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc) => {
                  const Icon = getFileIcon(doc.type)
                  return (
                    <div
                      key={doc.id}
                      className="flex items-center gap-4 rounded-lg border p-4 hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-semibold text-sm">{doc.name}</h4>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{doc.client}</span>
                          <span>•</span>
                          <span>{doc.property}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={
                          doc.status === "Signed" || doc.status === "Complete" ? "default" : 
                          doc.status === "Pending" ? "secondary" : 
                          "outline"
                        }>
                          {doc.status}
                        </Badge>
                        <Badge variant="outline">{doc.type}</Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="mr-2 h-4 w-4" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {documents.filter(d => d.category === "Contracts").map((doc) => (
                  <div key={doc.id} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileCheck className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">{doc.client} • {doc.date}</p>
                    </div>
                    <Badge>{doc.status}</Badge>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {documents.filter(d => d.type.includes("Report")).map((doc) => (
                  <div key={doc.id} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">{doc.property} • {doc.date}</p>
                    </div>
                    <Badge>{doc.status}</Badge>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">
                {documents.filter(d => d.category === "Legal").length} legal documents
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

