import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/nav/command-menu";
import { Icons } from "@/components/nav/icons";
import { MainNav } from "@/components/nav/main-nav";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ModeToggle } from "@/components/nav/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mt-2">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>

            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.facebook className="h-3 w-3 fill-current" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.Linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.Linkedin className="h-3 w-3 fill-current" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
