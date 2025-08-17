import Image from "next/image"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";


export default function Navbar() {
    return (
        <nav className="bg-white w-100% h-[100px] shadow-[0px_0px_10px_0px_#edf2f7] items-center flex">
            <div>
                <span className="flex items-center gap-[5px]">
                    <Image src="/logosmk.png" alt="Logo" width={50} height={50}/>
                    <div className="text-sm/5 justify-start">
                        <h1 className="font-[700] text-[20px]">SKADUTA</h1>
                        <p className="text-[9px]">SMK Negeri 2 Yogyakarta</p>
                    </div>
                </span>
                <div>
                    <ul>

                    </ul>
                </div>
            </div>
        </nav>
    )
}