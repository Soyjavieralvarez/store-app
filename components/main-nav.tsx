"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MainNavProps {
    data: Category[];
  };

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {

    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);


    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }))

    return (
      <>
        {/* Botón de menú para dispositivos móviles */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
  
        {/* Menú para dispositivos móviles */}
        {menuOpen && (
          <nav className="lg:hidden">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black m-2",
                  route.active ? "text-black" : "text-neutral-500"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        )}
  
        {/* Menú para ordenadores */}
        <nav className="hidden m-6 lg:flex items-center space-x-4 lg:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </>
    );
  };

export default MainNav;