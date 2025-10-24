import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-4 border-b-2 border-[#b6eeff]/30 bg-gradient-to-r from-white via-[#edfbff]/30 to-white dark:from-[#0f355c] dark:via-[#0f5999]/20 dark:to-[#0f355c] backdrop-blur-sm px-6 shadow-gold">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1 hover:bg-[#b6eeff]/30 rounded-lg h-9 w-9" />
            <Separator orientation="vertical" className="mr-2 h-6 bg-[#b6eeff]" />
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-[#037ae1] to-[#21b9ff] bg-clip-text text-transparent">Real Estate AI Assistant</h1>
            </div>
          </div>
          <ThemeToggle />
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 md:p-8 bg-gradient-to-br from-[#edfbff]/20 via-white to-[#d6f4ff]/10 dark:from-[#0f355c]/20 dark:via-black dark:to-[#0f5999]/10">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

