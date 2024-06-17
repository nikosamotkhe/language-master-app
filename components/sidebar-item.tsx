"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    label?: string
    iconSrc?: string
    href?: string
}

export const SidebarItem = ({
    label,
    iconSrc,
    href,
}: Props) => {
    const pathname = usePathname()
    const active = pathname === href

    return (
        <Button
            variant={active ? "sidebar" : "sidebarOutline"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={`${href}`}>
                <Image 
                    src={iconSrc}
                    alt={`${label}`}
                    className="mr-10"
                    height={30}
                    width={30}
                />
                {label}
            </Link>
        </Button>
    )
}