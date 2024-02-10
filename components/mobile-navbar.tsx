import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
function MobileNavBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">
          <Menu className="cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-12">
        {navItems.map((list) => (
          <Link href={list.href} key={list.href} className="flex">
            <SheetClose className="w-full">
              <Button className="w-full my-1">{list.label}</Button>
            </SheetClose>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavBar;
