import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import arabic from "../../public/arabic-svg.png"

export const Footer = () => {
    return (
        <footer className="lg:block h-20 w-full border-t-2
          border-slate-200 p-2">
            <div className="mx-auto flex justify-evenly h-full">
                <div className="flex flex-col gap-2">
                    <Button size="lg" variant="ghost" className="w-full">
                        Lessons
                    </Button>
                </div>
                <div className="flex flex-col gap-2">
                    <Button size="lg" variant="ghost" className="w-full">
                        Poetry
                    </Button>
                </div>
                <div className="flex flex-col gap-2">
                    <Button size="lg" variant="ghost" className="w-full">
                        Practice
                    </Button>
                </div>
            </div>
        </footer>
    )
}