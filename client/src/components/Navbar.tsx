import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageAsset } from "@/data/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Trust Signals */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> 08033487097 </span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> kalovick1@gmail.com </span>
          </div>
          {/* <div className="flex gap-4 opacity-90">
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div> */}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="h-10 w-10 p-2 bg-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
                <img src={ImageAsset.logo} alt="logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-foreground leading-none">
                  {ImageAsset.logo_data.title}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {ImageAsset.logo_data.sub}
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="font-semibold shadow-md">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors hover:text-primary",
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
