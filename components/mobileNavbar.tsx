"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./footer";

const MobileNavbar = (props: MobileNavProps) => {
  const pathName = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="mobile-menu-icon"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side={"left"} className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-2 px-4"
          >
            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
            <h1 className="text-26 font-semibold font-ibm-plex-serif text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathName === item.route ||
                    pathName.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bankGradient": isActive,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn("text-16 text-black-1 font-semibold", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
            </SheetClose>
            <Footer type="mobile" user={props.user} />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
