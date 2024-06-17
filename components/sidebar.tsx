import { cn } from "@/lib/utils"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import Link from "next/link"
import { SidebarItem } from "./sidebar-item"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import south_kavkaz from '@/public/south-caucasus.png'
import book from '@/public/book.svg'
import leaderboard from '@/public/leaderboard.svg'
import quest from '@/public/adventure.svg'
import shop from '@/public/shop.svg'


type Props = {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full w-[256px] bg-white lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className,)}>
            <div className="pt-8 pl-4 pb-6">
                <Link href='/learn'>
                    <Image src={south_kavkaz} height={50} width={80} alt="logo" />
                        <h1 className="italic font-semi-semibold">
                                South Kavkaz Learner
                        </h1>
                </Link>
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="learn" 
                             href="/learn"
                             iconSrc={book}
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="leaderboard"
                             href="/leaderboard"
                             iconSrc={leaderboard} 
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="quests"
                             href="/quests"
                             iconSrc={quest} 
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="shop"
                             href="/shop"
                             iconSrc={shop}

                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>     
        </div>
    )
}


/** 

<div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="learn" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="leaderboard" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="quests" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="shop" />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>

            */