import { Circle } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Circle className="h-8 w-8 text-primary" fill="currentColor" />
          <span className="text-xl font-bold">akselia</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Getting Started <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Installation</DropdownMenuItem>
              <DropdownMenuItem>Quick Start</DropdownMenuItem>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Useful Links <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Community</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost">Mods</Button>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:flex items-center gap-2">
            Try Akselia <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
