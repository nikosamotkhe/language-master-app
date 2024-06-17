"use client"
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"
import south_kavkaz from '../../public/south-caucasus.png'

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 
          border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center
              justify-between h-full">
                <div className="pt-8 pl-4 pb-6">
                    <Image src={south_kavkaz} height={50} width={80} alt="pattern" />
                    <h1 className="italic font-semi-semibold">Learn South Caucasian Languages</h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton
                          afterSignOutUrl="/" 
                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                        >                        
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}