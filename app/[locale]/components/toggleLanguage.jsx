"use client"
import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { usePathname, useRouter } from "@/navigation"
import { Languages } from 'lucide-react';
const Togglelanguage = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setmenuOpen] = useState(false)
    const handleMenu = () => {
      setmenuOpen(!menuOpen)
    }
  return (
      <Dropdown >
        <DropdownTrigger>
            <Languages className='w-[42px] h-[42px] p-2 border rounded-lg'/>
        </DropdownTrigger>
        <DropdownMenu  className='border rounded-lg border-red-950 '>
          <DropdownItem onClick={() => router.push(pathname, { locale: "en" })} key="english">
            English
          </DropdownItem>
          <DropdownItem onClick={() => router.push(pathname, { locale: "ru" })} key="russian">
            Русский
          </DropdownItem>
          <DropdownItem onClick={() => router.push(pathname, { locale: "uz" })} key="uzbek">
            Uzbek
          </DropdownItem>
          <DropdownItem onClick={() => router.push(pathname, { locale: "uzk" })} key="uzbekkiril">
            Узбек
          </DropdownItem>
          {/* <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
  )
}

export default Togglelanguage