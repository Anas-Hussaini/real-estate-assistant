"use client"

import * as React from "react"
import {
  Building2,
  Home,
  MessageSquare,
  Search,
  Settings,
  BarChart3,
  Users,
  Calendar,
  FileText,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigation = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", icon: Home, url: "/" },
      { title: "AI Assistant", icon: MessageSquare, url: "/assistant" },
      { title: "Properties", icon: Building2, url: "/properties" },
      { title: "Search MLS", icon: Search, url: "/search" },
    ],
  },
  {
    title: "Management",
    items: [
      { title: "Clients", icon: Users, url: "/clients" },
      { title: "Calendar", icon: Calendar, url: "/calendar" },
      { title: "Analytics", icon: BarChart3, url: "/analytics" },
      { title: "Documents", icon: FileText, url: "/documents" },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-r-2 border-[#b6eeff]/30">
      <SidebarHeader className="border-b-2 border-[#b6eeff]/30 bg-gradient-to-br from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-[#b6eeff]/20 rounded-xl">
              <a href="/">
                <div className="flex aspect-square size-10 items-center justify-center rounded-xl gradient-gold shadow-gold">
                  <Building2 className="size-5 text-primary-foreground" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-lg bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">EstateAI</span>
                  <span className="truncate text-xs font-medium text-[#0a68c3] dark:text-[#b6eeff]">Real Estate Assistant</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-transparent via-[#edfbff]/20 to-transparent dark:via-[#0f355c]/20">
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-xs font-bold uppercase tracking-wider text-[#037ae1] dark:text-[#b6eeff] px-3">{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-[#b6eeff]/30 rounded-xl mx-2 group transition-all duration-200 hover:shadow-gold">
                      <a href={item.url} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d6f4ff] dark:bg-[#0f5999] group-hover:gradient-gold group-hover:shadow-gold transition-all">
                          <item.icon className="size-4 text-[#037ae1] dark:text-[#b6eeff] group-hover:text-primary-foreground" />
                        </div>
                        <span className="font-medium group-hover:text-[#037ae1] dark:group-hover:text-[#b6eeff] transition-colors">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t-2 border-[#b6eeff]/30 bg-gradient-to-br from-[#edfbff] to-[#d6f4ff] dark:from-[#0f355c] dark:to-[#0f5999]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-[#b6eeff]/30 rounded-xl mx-2 group">
              <a href="/settings" className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d6f4ff] dark:bg-[#0f5999] group-hover:gradient-gold group-hover:shadow-gold transition-all">
                  <Settings className="size-4 text-[#037ae1] dark:text-[#b6eeff] group-hover:text-primary-foreground" />
                </div>
                <span className="font-medium group-hover:text-[#037ae1] transition-colors">Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-[#b6eeff]/30 rounded-xl mx-2 group">
              <Avatar className="h-10 w-10 rounded-xl border-2 border-[#b6eeff] shadow-gold">
                <AvatarImage src="/avatar.jpg" alt="Agent" />
                <AvatarFallback className="rounded-xl gradient-gold text-primary-foreground font-bold">JD</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-[#0f5999] dark:text-[#b6eeff]">John Doe</span>
                <span className="truncate text-xs font-medium text-[#037ae1] dark:text-[#d6f4ff]">Real Estate Agent</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

