'use client'


import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function Header() {
    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    <li>
                        <Switch
                            checked={isDarkMode}
                            onCheckedChange={setDarkMode}
                            className="relative w-12 h-6 bg-gray-300 rounded-full data-[state=checked]:bg-gray-800"
                        >
                            <span className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition-transform data-[state=checked]:translate-x-6">
                                <Image
                                    src="/moon.svg"  // ✅ Correct path if inside 'public'
                                    alt="Moon Icon"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </Switch>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
