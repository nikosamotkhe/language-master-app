"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Link, Loader } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div>
      <div className="max-w-[988px] mx-auto flex-1 w-full
        flex flex-col lg:flex-row items-center justify-center
        p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] 
          mb-8 lg:mb-0">
          <Image src="/arabic02.jpeg" width={300} height={100} alt="hero" />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold">
            Learn the beauty and art of Arabic
          </h1>
          <div className="flex flex-col items-center gap-y-3
            max-w-[330px] w-full">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin
                text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton
                  mode="modal"
                >
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link href="/learn">
                    Continue Learning
                  </Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}
