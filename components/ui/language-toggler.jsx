"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { Link, usePathname, useRouter } from "@/navigation"
import { DropdownMenu } from "@nextui-org/react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export function LanguageToggle() {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex flex-row  mx-4">
      <button onClick={() => router.push(pathname, { locale: "en" })}>
      English
    </button>
      <button onClick={() => router.push(pathname, { locale: "ru" })}>
      Russian
      </button>
      <button onClick={() => router.push(pathname, { locale: "uz" })}>
            Uzbek
      </button>
      <button onClick={() => router.push(pathname, { locale: "uzk" })}>
            Узбек
      </button>
    </div>
  )
}


