"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Users, DollarSign, MapPin, Bed, Bath, Square, MessageSquare, BarChart3 } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const salesData = [
  { month: "Jan", sales: 12, revenue: 2400000 },
  { month: "Feb", sales: 15, revenue: 3100000 },
  { month: "Mar", sales: 8, revenue: 1800000 },
  { month: "Apr", sales: 18, revenue: 3800000 },
  { month: "May", sales: 22, revenue: 4500000 },
  { month: "Jun", sales: 25, revenue: 5200000 },
]

const recentProperties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Downtown, Seattle",
    price: "$850,000",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    status: "Active",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Luxury Family Home",
    location: "Bellevue, WA",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Waterfront Condo",
    location: "Kirkland, WA",
    price: "$680,000",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    status: "Active",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
  },
]

const recentQueries = [
  { id: 1, client: "Sarah Johnson", query: "Looking for 3BR in Bellevue under $1M", time: "5 min ago" },
  { id: 2, client: "Michael Chen", query: "Waterfront properties in Seattle", time: "15 min ago" },
  { id: 3, client: "Emma Wilson", query: "Investment properties downtown", time: "1 hour ago" },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden rounded-3xl animated-gradient p-8 text-primary-foreground shadow-gold-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight drop-shadow-lg">Welcome Back, John! ✨</h2>
            <p className="text-lg opacity-90 drop-shadow">
              Your real estate empire is thriving. Here's today's overview.
            </p>
          </div>
          <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white shadow-2xl hover-glow">
            <MessageSquare className="mr-2 h-5 w-5" />
            AI Assistant
          </Button>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Premium Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="premium-card hover-glow border-0 overflow-hidden relative group">
          <div className="absolute inset-0 gradient-gold-subtle opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider">Total Properties</CardTitle>
            <div className="h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">
              127
            </div>
            <p className="text-sm font-medium mt-2 flex items-center gap-1">
              <span className="text-green-600 font-bold">↗ +12%</span>
              <span className="text-muted-foreground">from last month</span>
            </p>
          </CardContent>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#eaf197]/20 to-transparent rounded-tl-full"></div>
        </Card>

        <Card className="premium-card hover-glow border-0 overflow-hidden relative group">
          <div className="absolute inset-0 gradient-gold-subtle opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider">Active Clients</CardTitle>
            <div className="h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">
              48
            </div>
            <p className="text-sm font-medium mt-2 flex items-center gap-1">
              <span className="text-green-600 font-bold">↗ +5</span>
              <span className="text-muted-foreground">new this week</span>
            </p>
          </CardContent>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#eaf197]/20 to-transparent rounded-tl-full"></div>
        </Card>

        <Card className="premium-card hover-glow border-0 overflow-hidden relative group">
          <div className="absolute inset-0 gradient-gold-subtle opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider">Sales This Month</CardTitle>
            <div className="h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold pulse-gold">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">
              25
            </div>
            <p className="text-sm font-medium mt-2 flex items-center gap-1">
              <span className="text-green-600 font-bold">↗ +18%</span>
              <span className="text-muted-foreground">from last month</span>
            </p>
          </CardContent>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#eaf197]/20 to-transparent rounded-tl-full"></div>
        </Card>

        <Card className="premium-card hover-glow border-0 overflow-hidden relative group">
          <div className="absolute inset-0 gradient-gold-subtle opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider">Total Revenue</CardTitle>
            <div className="h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
              <DollarSign className="h-6 w-6 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">
              $5.2M
            </div>
            <p className="text-sm font-medium mt-2 flex items-center gap-1">
              <span className="text-green-600 font-bold">↗ +23%</span>
              <span className="text-muted-foreground">from last month</span>
            </p>
          </CardContent>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#eaf197]/20 to-transparent rounded-tl-full"></div>
        </Card>
      </div>

      {/* Premium Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="premium-card border-0 shadow-gold-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#d6f4ff] to-[#b6eeff] dark:from-[#0f5999] dark:to-[#0a68c3]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/50 dark:bg-black/20 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-[#037ae1]" />
              </div>
              <div>
                <CardTitle className="text-xl">Sales Overview</CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Monthly sales performance</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ChartContainer
              config={{
                sales: {
                  label: "Sales",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[320px]"
            >
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#b6eeff" opacity={0.3} />
                <XAxis dataKey="month" stroke="#037ae1" />
                <YAxis stroke="#037ae1" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="url(#blueGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4bd4ff" />
                    <stop offset="100%" stopColor="#21b9ff" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="premium-card border-0 shadow-gold-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#d6f4ff] to-[#b6eeff] dark:from-[#0f5999] dark:to-[#0a68c3]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/50 dark:bg-black/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-[#037ae1]" />
              </div>
              <div>
                <CardTitle className="text-xl">Revenue Trend</CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Monthly revenue in USD</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[320px]"
            >
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#b6eeff" opacity={0.3} />
                <XAxis dataKey="month" stroke="#037ae1" />
                <YAxis stroke="#037ae1" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#21b9ff"
                  fill="url(#revenueGradient)"
                  strokeWidth={3}
                />
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4bd4ff" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#21b9ff" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="premium-card border-0 shadow-gold-lg">
          <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#21b9ff]" />
                  Featured Properties
                </CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Recently added listings</CardDescription>
              </div>
              <Badge className="gradient-gold text-primary-foreground border-0 shadow-gold">🔥 Hot</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {recentProperties.map((property) => (
                <div key={property.id} className="group relative flex gap-4 rounded-2xl border-2 border-[#b6eeff]/40 p-3 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-r from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#b6eeff]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-xl border-2 border-[#b6eeff]/50 shadow-md">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/90 text-[#037ae1] border-0 text-xs font-bold">
                        {property.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="relative flex-1 space-y-1.5">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-[#0f5999] dark:text-[#b6eeff] group-hover:text-[#037ae1] transition-colors">{property.title}</h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 text-[#21b9ff]" />
                      {property.location}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 bg-[#d6f4ff] dark:bg-[#0f5999] px-2 py-0.5 rounded-full">
                        <Bed className="h-3 w-3" />
                        {property.beds}
                      </span>
                      <span className="flex items-center gap-1 bg-[#d6f4ff] dark:bg-[#0f5999] px-2 py-0.5 rounded-full">
                        <Bath className="h-3 w-3" />
                        {property.baths}
                      </span>
                      <span className="flex items-center gap-1 bg-[#d6f4ff] dark:bg-[#0f5999] px-2 py-0.5 rounded-full">
                        <Square className="h-3 w-3" />
                        {property.sqft}
                      </span>
                    </div>
                    <p className="text-lg font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">{property.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="premium-card border-0 shadow-gold-lg">
          <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#21b9ff]" />
                  Recent Client Queries
                </CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">AI Assistant interactions</CardDescription>
              </div>
              <Badge className="gradient-gold text-primary-foreground border-0 shadow-gold">AI</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {recentQueries.map((query) => (
                <div key={query.id} className="group relative flex gap-4 rounded-2xl border-2 border-[#b6eeff]/40 p-4 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-r from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#b6eeff]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold shadow-gold group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="relative flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-[#0f5999] dark:text-[#b6eeff]">{query.client}</h4>
                      <span className="text-xs font-medium text-[#037ae1] bg-[#d6f4ff] dark:bg-[#0f5999] px-2 py-1 rounded-full">{query.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{query.query}</p>
                    <Button variant="link" size="sm" className="h-auto p-0 text-[#037ae1] hover:text-[#21b9ff] font-semibold">
                      View Conversation →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="premium-card border-0 shadow-gold-lg">
        <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="h-8 w-8 rounded-lg gradient-gold flex items-center justify-center shadow-gold">⚡</span>
                Quick Actions
              </CardTitle>
              <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Common tasks and shortcuts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-br from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30">
              <div className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Building2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">Add Property</h4>
                <p className="text-xs text-muted-foreground mt-1">New listing</p>
              </div>
            </button>
            <button className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-br from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30">
              <div className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">New Client</h4>
                <p className="text-xs text-muted-foreground mt-1">Add contact</p>
              </div>
            </button>
            <button className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-br from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30">
              <div className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <MessageSquare className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">AI Chat</h4>
                <p className="text-xs text-muted-foreground mt-1">Ask assistant</p>
              </div>
            </button>
            <button className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-br from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30">
              <div className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <BarChart3 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">Reports</h4>
                <p className="text-xs text-muted-foreground mt-1">View analytics</p>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Market Insights */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="premium-card border-0 shadow-gold-lg">
          <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg">Market Trends</CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Current market</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#edfbff] to-[#d6f4ff]/50 dark:from-[#0f355c] dark:to-[#0f5999]/50">
              <div>
                <p className="text-sm text-muted-foreground">Avg Price</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">$875K</p>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-bold text-sm">↗ +5.2%</span>
                <p className="text-xs text-muted-foreground">vs last month</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#edfbff] to-[#d6f4ff]/50 dark:from-[#0f355c] dark:to-[#0f5999]/50">
              <div>
                <p className="text-sm text-muted-foreground">Days on Market</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">18</p>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-bold text-sm">↘ -3 days</span>
                <p className="text-xs text-muted-foreground">faster sales</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#edfbff] to-[#d6f4ff]/50 dark:from-[#0f355c] dark:to-[#0f5999]/50">
              <div>
                <p className="text-sm text-muted-foreground">Inventory</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">342</p>
              </div>
              <div className="text-right">
                <span className="text-orange-600 font-bold text-sm">↗ +12</span>
                <p className="text-xs text-muted-foreground">new listings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="premium-card border-0 shadow-gold-lg md:col-span-2">
          <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                  📅
                </div>
                <div>
                  <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                  <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Next 7 days</CardDescription>
                </div>
              </div>
              <Badge className="gradient-gold text-primary-foreground border-0 shadow-gold">5 Scheduled</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              {[
                { time: "Today, 2:00 PM", client: "Sarah Johnson", type: "Property Viewing", address: "123 Maple Street, Seattle", color: "bg-red-500" },
                { time: "Tomorrow, 10:00 AM", client: "Michael Chen", type: "Contract Signing", address: "456 Oak Avenue, Bellevue", color: "bg-blue-500" },
                { time: "Nov 26, 3:30 PM", client: "Emma Wilson", type: "Initial Consultation", address: "Virtual Meeting", color: "bg-green-500" },
                { time: "Nov 27, 1:00 PM", client: "James Brown", type: "Open House", address: "789 Pine Road, Kirkland", color: "bg-purple-500" },
              ].map((apt, idx) => (
                <div key={idx} className="group flex gap-4 p-4 rounded-2xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300 bg-gradient-to-r from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30">
                  <div className={`h-12 w-12 rounded-xl ${apt.color} flex items-center justify-center text-white font-bold shadow-md`}>
                    {apt.time.split(',')[0].slice(0, 3)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">{apt.type}</h4>
                      <span className="text-xs font-medium text-[#037ae1] bg-[#d6f4ff] dark:bg-[#0f5999] px-2 py-1 rounded-full">{apt.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{apt.client}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#21b9ff]" />
                      {apt.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Properties */}
      <Card className="premium-card border-0 shadow-gold-lg">
        <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                🏆
              </div>
              <div>
                <CardTitle className="text-xl">Top Performing Properties</CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Most viewed & inquired this week</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { 
                rank: 1, 
                title: "Luxury Penthouse Downtown", 
                views: 1247, 
                inquiries: 45, 
                price: "$2.8M",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
                badge: "🥇"
              },
              { 
                rank: 2, 
                title: "Modern Villa with Pool", 
                views: 892, 
                inquiries: 32, 
                price: "$1.9M",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
                badge: "🥈"
              },
              { 
                rank: 3, 
                title: "Beachfront Estate", 
                views: 756, 
                inquiries: 28, 
                price: "$3.2M",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
                badge: "🥉"
              },
            ].map((property) => (
              <div key={property.rank} className="group relative overflow-hidden rounded-2xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 text-4xl">{property.badge}</div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-[#037ae1] border-0 font-bold shadow-md">#{property.rank}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-2xl font-bold text-white">{property.price}</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-white to-[#edfbff]/30 dark:from-[#0f355c] dark:to-[#0f5999]/30">
                  <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff] mb-3">{property.title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <span className="text-[#21b9ff]">👁️</span>
                      <span className="font-semibold">{property.views}</span> views
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <span className="text-[#21b9ff]">💬</span>
                      <span className="font-semibold">{property.inquiries}</span> inquiries
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Timeline */}
      <Card className="premium-card border-0 shadow-gold-lg">
        <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
              ⏱️
            </div>
            <div>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Latest updates and actions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[
              { icon: "🏠", action: "New property listed", detail: "Modern Condo - $750K", time: "5 minutes ago", color: "gradient-gold" },
              { icon: "✅", action: "Deal closed successfully", detail: "Luxury Villa - $2.1M commission: $63K", time: "1 hour ago", color: "bg-green-500" },
              { icon: "📧", action: "Email sent to client", detail: "Property recommendations to Sarah Johnson", time: "2 hours ago", color: "bg-blue-500" },
              { icon: "📞", action: "Client call scheduled", detail: "Follow-up with Michael Chen", time: "3 hours ago", color: "bg-purple-500" },
              { icon: "📊", action: "Market report generated", detail: "Q4 2024 Market Analysis", time: "5 hours ago", color: "bg-orange-500" },
              { icon: "🔔", action: "Price reduction alert", detail: "Waterfront Property now $680K", time: "6 hours ago", color: "bg-red-500" },
            ].map((activity, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className={`h-10 w-10 rounded-xl ${activity.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <span className="text-lg">{activity.icon}</span>
                </div>
                <div className="flex-1 pb-4 border-b border-[#b6eeff]/30 last:border-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">{activity.action}</h4>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights & Recommendations */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="premium-card border-0 shadow-gold-lg">
          <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold pulse-gold">
                🤖
              </div>
              <div>
                <CardTitle className="text-lg">AI Insights</CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Smart recommendations</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="p-4 rounded-xl border-2 border-[#4bd4ff]/40 bg-gradient-to-br from-[#edfbff] to-[#d6f4ff]/30 dark:from-[#0f355c]/50 dark:to-[#0f5999]/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h5 className="font-bold text-[#0f5999] dark:text-[#b6eeff] mb-1">Price Optimization</h5>
                  <p className="text-sm text-muted-foreground">Consider reducing the asking price of "Downtown Loft" by 5% to attract more buyers. Similar properties sold 23% faster.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl border-2 border-[#4bd4ff]/40 bg-gradient-to-br from-[#edfbff] to-[#d6f4ff]/30 dark:from-[#0f355c]/50 dark:to-[#0f5999]/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h5 className="font-bold text-[#0f5999] dark:text-[#b6eeff] mb-1">Client Match</h5>
                  <p className="text-sm text-muted-foreground">3 clients in your database match the criteria for "Luxury Penthouse". Send personalized recommendations.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl border-2 border-[#4bd4ff]/40 bg-gradient-to-br from-[#edfbff] to-[#d6f4ff]/30 dark:from-[#0f355c]/50 dark:to-[#0f5999]/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h5 className="font-bold text-[#0f5999] dark:text-[#b6eeff] mb-1">Market Opportunity</h5>
                  <p className="text-sm text-muted-foreground">Waterfront properties in Kirkland showing 18% increase in demand. Great time to list similar properties.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="premium-card border-0 shadow-gold-lg">
          <CardHeader className="bg-gradient-to-r from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999] border-b-2 border-[#b6eeff]/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                👥
              </div>
              <div>
                <CardTitle className="text-lg">Team Performance</CardTitle>
                <CardDescription className="text-[#0a68c3] dark:text-[#b6eeff]">Monthly leaderboard</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-3">
            {[
              { name: "John Doe (You)", sales: 8, revenue: "$5.2M", badge: "🥇", position: 1 },
              { name: "Alice Smith", sales: 7, revenue: "$4.8M", badge: "🥈", position: 2 },
              { name: "Bob Johnson", sales: 6, revenue: "$4.1M", badge: "🥉", position: 3 },
              { name: "Carol White", sales: 5, revenue: "$3.7M", badge: "", position: 4 },
              { name: "David Lee", sales: 4, revenue: "$2.9M", badge: "", position: 5 },
            ].map((member) => (
              <div key={member.position} className={`flex items-center gap-4 p-4 rounded-xl ${member.position === 1 ? 'bg-gradient-to-r from-[#4bd4ff]/20 to-[#21b9ff]/20 border-2 border-[#21b9ff]/50' : 'bg-[#edfbff]/30 dark:bg-[#0f5999]/20'}`}>
                <div className="text-2xl font-bold text-[#037ae1] w-8">{member.badge || `#${member.position}`}</div>
                <div className="flex-1">
                  <h5 className="font-bold text-[#0f5999] dark:text-[#b6eeff]">{member.name}</h5>
                  <p className="text-sm text-muted-foreground">{member.sales} sales · {member.revenue}</p>
                </div>
                {member.position === 1 && (
                  <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                    👑
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

