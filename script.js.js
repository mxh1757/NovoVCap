import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TrendingUp, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", url: createPageUrl("Home") },
  { name: "Investment Solutions", url: createPageUrl("Solutions") },
  { name: "Performance", url: createPageUrl("Performance") },
  { name: "About Us", url: createPageUrl("About") },
  { name: "Contact", url: createPageUrl("Contact") }
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-blue: #0f172a;
          --accent-emerald: #10b981;
          --accent-gold: #f59e0b;
          --text-slate: #64748b;
          --border-light: #e2e8f0;
          --gradient-primary: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }
        
        .primary-gradient {
          background: var(--gradient-primary);
        }
        
        .success-gradient {
          background: var(--gradient-success);
        }
        
        .text-emerald {
          color: var(--accent-emerald);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
        }
        
        .performance-badge {
          background: linear-gradient(45deg, #10b981, #059669);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="primary-gradient shadow-2xl relative z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 success-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">NovoVentureCap</h1>
                <p className="text-xs text-emerald-400 font-semibold">novovcap.com</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.url
                      ? "text-emerald-400 bg-white/10"
                      : "text-white hover:text-emerald-400 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="success-gradient hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Investor Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-600 shadow-2xl">
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.url
                      ? "text-emerald-400 bg-white/10"
                      : "text-white hover:text-emerald-400 hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full success-gradient hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg">
                Investor Login
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="primary-gradient text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 success-gradient rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">NovoVentureCap</h3>
                  <p className="text-sm text-emerald-400 font-semibold">novovcap.com</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                Professional investment management delivering consistent alpha through disciplined strategies 
                and cutting-edge portfolio optimization. Trusted by institutions and high-net-worth individuals worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-emerald-400">Navigation</h4>
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-emerald-400">Contact</h4>
              <div className="space-y-3 text-slate-300">
                <p className="font-medium">Global Headquarters</p>
                <p>Financial District, NYC</p>
                <p className="text-emerald-400 font-semibold">+1 (212) 555-0150</p>
                <p className="text-emerald-400 font-semibold">invest@novovcap.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">&copy; 2024 NovoVentureCap. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">SEC Registered Investment Adviser</span>
              <span className="text-slate-400 text-sm">FINRA Member</span>
              <span className="text-slate-400 text-sm">SIPC Protected</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}