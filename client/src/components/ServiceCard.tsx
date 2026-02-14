import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export default function ServiceCard({ title, description, icon, link = "/services" }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <CardHeader className="pt-8 px-6 pb-2">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-secondary/50 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
          <img src={icon} alt={title} className="w-full h-full object-contain drop-shadow-sm" />
        </div>
        <CardTitle className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 flex-grow">
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="px-6 pb-8 pt-4">
        <Link href={link}>
          <a className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link">
            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </Link>
      </CardFooter>
      
      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
    </Card>
  );
}
