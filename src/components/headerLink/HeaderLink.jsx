import Link from "next/link";
import React from "react";

export default function HeaderLink({ route }) {
    return (

        <Link
            key={route.name}
            href={route.href}
            className="h-7 text-black hover:border-b hover:border-black transition-all duration-500 rounded-md px-6 py-0.5"
        >
            {route.name}
        </Link>
    );
}