import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                  Apex
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">
                  Financial
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with precision financial strategies and unwavering integrity. Your success is our bottom line.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/"><a className="hover:text-emerald-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-emerald-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-emerald-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Services</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-emerald-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Corporate Auditing</li>
              <li>Tax Planning & Compliance</li>
              <li>Financial Advisory</li>
              <li>Risk Management</li>
              <li>Payroll Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-semibold">A:</span>
                123 Financial District Blvd,<br />Suite 400, New York, NY 10005
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-semibold">P:</span>
                +1 (555) 123-4567
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-semibold">E:</span>
                contact@apexfinancial.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Apex Financial. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
