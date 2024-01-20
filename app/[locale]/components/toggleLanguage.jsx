import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { usePathname, useRouter } from "@/navigation"
const Togglelanguage = () => {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <div>
    <Dropdown >
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
        <DropdownItem onClick={() => router.push(pathname, { locale: "en" })} key="new">
                English
        </DropdownItem>
        <DropdownItem onClick={() => router.push(pathname, { locale: "ru" })} key="copy">Русский</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

    </div>
  )
}

export default Togglelanguage