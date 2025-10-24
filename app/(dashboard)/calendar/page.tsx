"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus, Video, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const upcomingEvents = [
  {
    id: 1,
    title: "Property Showing - Bellevue Home",
    type: "showing",
    date: "Today",
    time: "2:00 PM - 3:00 PM",
    location: "567 Oak St, Bellevue, WA",
    client: "Sarah Johnson",
    clientAvatar: "SJ",
    status: "confirmed"
  },
  {
    id: 2,
    title: "Client Meeting - Michael Chen",
    type: "meeting",
    date: "Today",
    time: "4:30 PM - 5:30 PM",
    location: "Office - Virtual",
    client: "Michael Chen",
    clientAvatar: "MC",
    status: "confirmed"
  },
  {
    id: 3,
    title: "Open House - Downtown Loft",
    type: "open-house",
    date: "Tomorrow",
    time: "1:00 PM - 4:00 PM",
    location: "1234 5th Ave, Seattle, WA",
    client: "Public",
    clientAvatar: "OH",
    status: "scheduled"
  },
  {
    id: 4,
    title: "Property Inspection",
    type: "inspection",
    date: "Tomorrow",
    time: "10:00 AM - 11:00 AM",
    location: "890 Lake Way, Kirkland, WA",
    client: "Emma Wilson",
    clientAvatar: "EW",
    status: "pending"
  },
  {
    id: 5,
    title: "Closing Meeting",
    type: "closing",
    date: "Dec 28",
    time: "3:00 PM - 4:00 PM",
    location: "Title Company Office",
    client: "David Martinez",
    clientAvatar: "DM",
    status: "confirmed"
  },
]

const getEventTypeColor = (type: string) => {
  const colors = {
    showing: "bg-blue-500",
    meeting: "bg-purple-500",
    "open-house": "bg-green-500",
    inspection: "bg-orange-500",
    closing: "bg-red-500"
  }
  return colors[type as keyof typeof colors] || "bg-gray-500"
}

const getEventIcon = (type: string) => {
  const icons = {
    showing: MapPin,
    meeting: Users,
    "open-house": Calendar,
    inspection: Clock,
    closing: Phone
  }
  const Icon = icons[type as keyof typeof icons] || Calendar
  return Icon
}

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
          <p className="text-muted-foreground">
            Manage your schedule and appointments
          </p>
        </div>
        <Button size="lg">
          <Plus className="mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 showing, 1 meeting
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Scheduled appointments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Houses</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Coming this weekend
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Awaiting confirmation
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your schedule for the next few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => {
                const Icon = getEventIcon(event.type)
                return (
                  <div
                    key={event.id}
                    className="flex gap-4 rounded-lg border p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${getEventTypeColor(event.type)} text-white flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{event.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3" />
                            <span>{event.date} • {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Badge variant={event.status === "confirmed" ? "default" : "secondary"}>
                          {event.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{event.clientAvatar}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{event.client}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          <Video className="mr-1 h-3 w-3" />
                          Join Call
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          <Phone className="mr-1 h-3 w-3" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Schedule Showing
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Book Open House
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Client Meeting
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Schedule Call
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Event Types</CardTitle>
              <CardDescription>Color coding reference</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-blue-500"></div>
                <span className="text-sm">Property Showings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-purple-500"></div>
                <span className="text-sm">Client Meetings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-green-500"></div>
                <span className="text-sm">Open Houses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-orange-500"></div>
                <span className="text-sm">Inspections</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded bg-red-500"></div>
                <span className="text-sm">Closings</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Events</span>
                <span className="font-medium">32</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Completed</span>
                <span className="font-medium">18</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Upcoming</span>
                <span className="font-medium">14</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

