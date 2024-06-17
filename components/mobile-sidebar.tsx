import { Menu } from "lucide-react"
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />      
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar className="w-full" />
            </SheetContent>
        </Sheet>
    )
}