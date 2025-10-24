"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Sparkles, Building2, MapPin, DollarSign, TrendingUp } from "lucide-react"
import { toast } from "sonner"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
  timestamp: Date
  properties?: PropertySuggestion[]
}

interface PropertySuggestion {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  match: number
  image: string
}

const sampleProperties: PropertySuggestion[] = [
  {
    id: 1,
    title: "Bellevue Family Home",
    location: "Bellevue, WA",
    price: "$950,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,400",
    match: 95,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Modern Suburban House",
    location: "Redmond, WA",
    price: "$875,000",
    beds: 3,
    baths: 2,
    sqft: "2,200",
    match: 88,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Spacious Contemporary",
    location: "Kirkland, WA",
    price: "$920,000",
    beds: 4,
    baths: 3,
    sqft: "2,600",
    match: 82,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
  },
]

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello! I'm your AI Real Estate Assistant. I can help you find properties, answer client queries, provide market insights, and suggest the best matches from MLS data. What can I help you with today?",
    timestamp: new Date(),
  }
]

const suggestedPrompts = [
  "Find 3BR homes in Bellevue under $1M",
  "What's the average price per sqft in Seattle?",
  "Show me waterfront properties",
  "Compare downtown vs suburban markets",
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content: "I found some excellent properties matching your criteria. Here are the top 3 matches from our MLS database, ranked by how well they match your requirements:",
          properties: sampleProperties
        },
        {
          content: "Based on current market data, the average price per square foot in Seattle is around $425-$475, depending on the neighborhood. Downtown areas command premium prices at $550-$650 per sqft, while suburban areas range from $350-$450 per sqft. The market has shown steady growth of about 8% year-over-year.",
          properties: undefined
        },
        {
          content: "I'd be happy to help you with that! Could you provide more specific details about the price range, number of bedrooms, or preferred neighborhoods? This will help me narrow down the best options for your client.",
          properties: undefined
        }
      ]

      const response = input.toLowerCase().includes("find") || input.toLowerCase().includes("show") || input.toLowerCase().includes("3br")
        ? responses[0]
        : input.toLowerCase().includes("price") || input.toLowerCase().includes("average")
        ? responses[1]
        : responses[2]

      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: response.content,
        properties: response.properties,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
      toast.success("AI Assistant has responded")
    }, 1500)
  }

  const handlePromptClick = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">AI Assistant</h2>
        <p className="text-muted-foreground">
          Get instant property recommendations and market insights
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Chat Interface */}
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>EstateAI Assistant</CardTitle>
                <CardDescription>AI-powered real estate intelligence</CardDescription>
              </div>
              <Badge variant="secondary" className="ml-auto">
                <Sparkles className="mr-1 h-3 w-3" />
                Online
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea ref={scrollRef} className="h-[500px] p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`max-w-[80%] space-y-2 ${message.role === "user" ? "items-end" : "items-start"}`}>
                      <div
                        className={`rounded-lg p-4 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.properties && (
                        <div className="space-y-3 w-full">
                          {message.properties.map((property) => (
                            <Card key={property.id} className="overflow-hidden hover:shadow-md transition-shadow">
                              <div className="flex gap-4 p-4">
                                <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-md">
                                  <img
                                    src={property.image}
                                    alt={property.title}
                                    className="h-full w-full object-cover"
                                  />
                                  <Badge className="absolute top-2 right-2 bg-green-500">
                                    {property.match}% Match
                                  </Badge>
                                </div>
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-start justify-between">
                                    <h4 className="font-semibold">{property.title}</h4>
                                    <span className="text-sm font-bold text-primary">{property.price}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {property.location}
                                  </p>
                                  <div className="flex items-center gap-3 text-xs">
                                    <span>{property.beds} beds</span>
                                    <span>•</span>
                                    <span>{property.baths} baths</span>
                                    <span>•</span>
                                    <span>{property.sqft} sqft</span>
                                  </div>
                                  <Button size="sm" variant="outline" className="mt-2 h-7 text-xs">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      )}
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Ask about properties, market trends, or client queries..."
                  className="min-h-[60px] resize-none"
                />
                <Button onClick={handleSend} size="icon" className="h-[60px] w-[60px]">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Suggested Prompts</CardTitle>
              <CardDescription>Quick actions to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-3"
                  onClick={() => handlePromptClick(prompt)}
                >
                  <Sparkles className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{prompt}</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <Building2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Property Matching</p>
                  <p className="text-xs text-muted-foreground">Find perfect properties from MLS data</p>
                </div>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Market Insights</p>
                  <p className="text-xs text-muted-foreground">Real-time market analytics</p>
                </div>
              </div>
              <div className="flex gap-3">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Price Analysis</p>
                  <p className="text-xs text-muted-foreground">Accurate pricing recommendations</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Location Intelligence</p>
                  <p className="text-xs text-muted-foreground">Neighborhood insights</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

