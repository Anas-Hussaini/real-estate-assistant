"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, MapPin, Bed, Bath, Square, Heart, Share2, Eye, Search, SlidersHorizontal } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface Property {
  id: number
  title: string
  location: string
  city: string
  price: number
  beds: number
  baths: number
  sqft: number
  type: string
  status: "Active" | "Pending" | "Sold"
  featured: boolean
  image: string
  description: string
  yearBuilt: number
  lotSize: string
}

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "1234 5th Ave, Seattle, WA 98101",
    city: "Seattle",
    price: 850000,
    beds: 2,
    baths: 2,
    sqft: 1450,
    type: "Condo",
    status: "Active",
    featured: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    description: "Stunning modern loft with city views",
    yearBuilt: 2020,
    lotSize: "N/A"
  },
  {
    id: 2,
    title: "Luxury Family Home",
    location: "567 Oak St, Bellevue, WA 98004",
    city: "Bellevue",
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "Single Family",
    status: "Active",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    description: "Beautiful family home in prime location",
    yearBuilt: 2018,
    lotSize: "0.25 acres"
  },
  {
    id: 3,
    title: "Waterfront Condo",
    location: "890 Lake Way, Kirkland, WA 98033",
    city: "Kirkland",
    price: 680000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Condo",
    status: "Pending",
    featured: false,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    description: "Waterfront living at its finest",
    yearBuilt: 2019,
    lotSize: "N/A"
  },
  {
    id: 4,
    title: "Suburban Dream Home",
    location: "234 Pine St, Redmond, WA 98052",
    city: "Redmond",
    price: 920000,
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    type: "Single Family",
    status: "Active",
    featured: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "Perfect home for growing families",
    yearBuilt: 2017,
    lotSize: "0.18 acres"
  },
  {
    id: 5,
    title: "Contemporary Townhouse",
    location: "456 Maple Dr, Seattle, WA 98112",
    city: "Seattle",
    price: 750000,
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    type: "Townhouse",
    status: "Active",
    featured: false,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    description: "Modern living in the heart of the city",
    yearBuilt: 2021,
    lotSize: "0.05 acres"
  },
  {
    id: 6,
    title: "Elegant Estate",
    location: "789 Hill Rd, Bellevue, WA 98006",
    city: "Bellevue",
    price: 2100000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "Single Family",
    status: "Active",
    featured: true,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
    description: "Luxurious estate with premium amenities",
    yearBuilt: 2022,
    lotSize: "0.5 acres"
  },
  {
    id: 7,
    title: "Cozy Starter Home",
    location: "321 Elm St, Renton, WA 98055",
    city: "Renton",
    price: 485000,
    beds: 2,
    baths: 1,
    sqft: 980,
    type: "Single Family",
    status: "Sold",
    featured: false,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
    description: "Perfect first home for new buyers",
    yearBuilt: 2005,
    lotSize: "0.12 acres"
  },
  {
    id: 8,
    title: "Modern City Apartment",
    location: "987 Broadway, Seattle, WA 98122",
    city: "Seattle",
    price: 595000,
    beds: 1,
    baths: 1,
    sqft: 850,
    type: "Condo",
    status: "Active",
    featured: false,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    description: "Urban living with style",
    yearBuilt: 2019,
    lotSize: "N/A"
  },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || property.status === statusFilter
    const matchesType = typeFilter === "all" || property.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const activeProperties = filteredProperties.filter(p => p.status === "Active")
  const pendingProperties = filteredProperties.filter(p => p.status === "Pending")
  const soldProperties = filteredProperties.filter(p => p.status === "Sold")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
          <p className="text-muted-foreground">
            Manage and browse your property listings
          </p>
        </div>
        <Button size="lg">
          <Building2 className="mr-2 h-4 w-4" />
          Add New Property
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, location, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Sold">Sold</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Single Family">Single Family</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Advanced Filters</DialogTitle>
                  <DialogDescription>
                    Fine-tune your property search
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Min" type="number" />
                      <Input placeholder="Max" type="number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Bedrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Square Footage</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Min sqft" type="number" />
                      <Input placeholder="Max sqft" type="number" />
                    </div>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">
            All Properties ({filteredProperties.length})
          </TabsTrigger>
          <TabsTrigger value="active">
            Active ({activeProperties.length})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending ({pendingProperties.length})
          </TabsTrigger>
          <TabsTrigger value="sold">
            Sold ({soldProperties.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <PropertyGrid properties={filteredProperties} onSelectProperty={setSelectedProperty} />
        </TabsContent>
        <TabsContent value="active">
          <PropertyGrid properties={activeProperties} onSelectProperty={setSelectedProperty} />
        </TabsContent>
        <TabsContent value="pending">
          <PropertyGrid properties={pendingProperties} onSelectProperty={setSelectedProperty} />
        </TabsContent>
        <TabsContent value="sold">
          <PropertyGrid properties={soldProperties} onSelectProperty={setSelectedProperty} />
        </TabsContent>
      </Tabs>

      {/* Property Detail Dialog */}
      {selectedProperty && (
        <PropertyDetailDialog
          property={selectedProperty}
          open={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  )
}

function PropertyGrid({ 
  properties, 
  onSelectProperty 
}: { 
  properties: Property[]
  onSelectProperty: (property: Property) => void
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge variant={property.status === "Active" ? "default" : property.status === "Pending" ? "secondary" : "outline"}>
                {property.status}
              </Badge>
              {property.featured && (
                <Badge variant="destructive">Featured</Badge>
              )}
            </div>
            <div className="absolute top-3 right-3 flex gap-2">
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl">{formatPrice(property.price)}</CardTitle>
                <CardDescription className="mt-1">{property.title}</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {property.location}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span>{property.beds} beds</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span>{property.baths} baths</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4 text-muted-foreground" />
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => onSelectProperty(property)}
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function PropertyDetailDialog({
  property,
  open,
  onClose,
}: {
  property: Property
  open: boolean
  onClose: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{property.title}</DialogTitle>
          <DialogDescription>{property.location}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={property.image}
              alt={property.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">{formatPrice(property.price)}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bedrooms</span>
                  <span className="font-medium">{property.beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bathrooms</span>
                  <span className="font-medium">{property.baths}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Square Footage</span>
                  <span className="font-medium">{property.sqft.toLocaleString()} sqft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Property Type</span>
                  <span className="font-medium">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year Built</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lot Size</span>
                  <span className="font-medium">{property.lotSize}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-sm text-muted-foreground">
                {property.description}. This beautiful property offers exceptional value and is located in a highly sought-after area. 
                Perfect for families or investors looking for quality real estate in the Pacific Northwest.
              </p>
              <div className="mt-4 space-y-2">
                <Badge>{property.status}</Badge>
                {property.featured && <Badge variant="destructive">Featured</Badge>}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">
              Schedule Showing
            </Button>
            <Button className="flex-1" variant="outline">
              Contact Agent
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

