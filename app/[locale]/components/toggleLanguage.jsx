"use client"
import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { usePathname, useRouter } from "@/navigation"
import { Languages } from 'lucide-react';
const Togglelanguage = () => {
    const pathname = usePathname();
    const router = useRouter();
  return (
      <Dropdown >
        <DropdownTrigger >
            <Languages  className='w-[42px] h-[42px] p-2 border rounded-lg'/>
        </DropdownTrigger>

        <DropdownMenu className='w-[200px] border-2 shadow   bg-slate-50 rounded-lg p-2'>
          <DropdownItem className='tracking-wide rounded focus-visible:outline-none  text-base hover:bg-slate-200  hover:border-0 w-full py-[10px]' onClick={() => router.push(pathname, { locale: "en" })} key="english">
            English
          </DropdownItem>
          <DropdownItem className='tracking-wide rounded focus-visible:outline-none  text-base hover:bg-slate-200  hover:border-0 w-full py-[10px]' onClick={() => router.push(pathname, { locale: "ru" })} key="russian">
            Русский
          </DropdownItem>
          <DropdownItem className='tracking-wide rounded focus-visible:outline-none  text-base hover:bg-slate-200  hover:border-0 w-full py-[10px]' onClick={() => router.push(pathname, { locale: "uz" })} key="uzbek">
            Uzbek
          </DropdownItem>
          <DropdownItem className='tracking-wide rounded focus-visible:outline-none  text-base hover:bg-slate-200  hover:border-0 w-full py-[10px]' onClick={() => router.push(pathname, { locale: "uzk" })} key="uzbekkiril">
            Узбек
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
  )
}

export default Togglelanguage