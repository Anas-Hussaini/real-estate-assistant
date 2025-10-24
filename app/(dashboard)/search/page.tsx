"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Bed, Bath, Square, TrendingUp, Database } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mlsListings = [
  {
    id: "MLS-2024-001",
    title: "Spectacular Lake Washington View",
    location: "Bellevue, WA 98004",
    price: 1450000,
    beds: 4,
    baths: 3.5,
    sqft: 3800,
    daysOnMarket: 5,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    listingAgent: "Jane Smith - Windermere",
    trending: true
  },
  {
    id: "MLS-2024-002",
    title: "Modern Downtown Penthouse",
    location: "Seattle, WA 98101",
    price: 2100000,
    beds: 3,
    baths: 3,
    sqft: 2400,
    daysOnMarket: 2,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    listingAgent: "Mike Johnson - Redfin",
    trending: true
  },
  {
    id: "MLS-2024-003",
    title: "Charming Craftsman Home",
    location: "Kirkland, WA 98033",
    price: 890000,
    beds: 3,
    baths: 2,
    sqft: 2200,
    daysOnMarket: 12,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    listingAgent: "Sarah Lee - Coldwell Banker",
    trending: false
  },
  {
    id: "MLS-2024-004",
    title: "Luxury Waterfront Estate",
    location: "Medina, WA 98039",
    price: 4750000,
    beds: 6,
    baths: 5,
    sqft: 6200,
    daysOnMarket: 8,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
    listingAgent: "David Chen - Sotheby's",
    trending: true
  },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function SearchPage() {
  const [searchLocation, setSearchLocation] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [beds, setBeds] = useState("")
  const [propertyType, setPropertyType] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">MLS Search</h2>
        <p className="text-muted-foreground">
          Search through comprehensive MLS listings
        </p>
      </div>

      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Advanced MLS Search
          </CardTitle>
          <CardDescription>
            Find properties using Multiple Listing Service data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="City, ZIP, or neighborhood"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="minPrice">Min Price</Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="$0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxPrice">Max Price</Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="No max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="beds">Bedrooms</Label>
              <Select value={beds} onValueChange={setBeds}>
                <SelectTrigger id="beds">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger id="propertyType">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="single">Single Family</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="multi">Multi-Family</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search MLS
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total MLS Listings</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              Active listings in your area
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Days on Market</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">-3 days</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Median Price</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$845K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5.2%</span> YoY
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Results (4)</TabsTrigger>
            <TabsTrigger value="trending">Trending (3)</TabsTrigger>
            <TabsTrigger value="new">New Today (2)</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="sqft">Largest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {mlsListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-4 p-4">
                  <div className="relative w-full md:w-64 aspect-video md:aspect-square flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="h-full w-full object-cover"
                    />
                    {listing.trending && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Trending
                      </Badge>
                    )}
                    <Badge className="absolute top-2 right-2 bg-blue-500">
                      {listing.daysOnMarket} days
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{formatPrice(listing.price)}</h3>
                        <p className="text-sm text-muted-foreground">MLS# {listing.id}</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold">{listing.title}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {listing.location}
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.beds} beds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.baths} baths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Listed by {listing.listingAgent}
                    </p>
                    <div className="flex gap-2">
                      <Button>View Full Listing</Button>
                      <Button variant="outline">Contact Agent</Button>
                      <Button variant="outline">Schedule Tour</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="mt-6">
          <div className="space-y-4">
            {mlsListings.filter(l => l.trending).map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-4 p-4">
                  <div className="relative w-full md:w-64 aspect-video md:aspect-square flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="h-full w-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      Trending
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold">{formatPrice(listing.price)}</h3>
                    <h4 className="text-lg font-semibold">{listing.title}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {listing.location}
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.beds} beds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.baths} baths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>View Full Listing</Button>
                      <Button variant="outline">Contact Agent</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Check back later for new listings added today</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

