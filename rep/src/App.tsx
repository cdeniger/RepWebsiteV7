import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './components/Button';
import { DiagnosticModal } from './components/DiagnosticModal';
import ApplicationModal from './components/ApplicationModal';
import { BrandLogo } from './components/BrandLogo';
import { LoginModal } from './components/LoginModal';
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [view, setView] = useState<
    "home" | "about" | "services" | "process" | "successStories" | "contact"
  >("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateTo = (
    newView:
      | "home"
      | "about"
      | "services"
      | "process"
      | "successStories"
      | "contact",
  ) => {
    setView(newView);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className="min-h-screen font-serif text-oxford selection:bg-signal selection:text-white bg-bone"
    >
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-bone/90 backdrop-blur-md border-b border-oxford/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Left: Logo */}
          <button
            onClick={() => navigateTo("home")}
            className="hover:opacity-80 transition-opacity"
          >
            <BrandLogo />
          </button>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex gap-6 font-mono text-xs tracking-widest uppercase items-center">
            <button
              onClick={() => navigateTo("home")}
              className={`hover:text-signal transition-colors ${view === "home" ? "text-signal" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("about")}
              className={`hover:text-signal transition-colors ${view === "about" ? "text-signal" : ""}`}
            >
              Philosophy
            </button>
            <button
              onClick={() => navigateTo("services")}
              className={`hover:text-signal transition-colors ${view === "services" ? "text-signal" : ""}`}
            >
              Services
            </button>
            <button
              onClick={() => navigateTo("process")}
              className={`hover:text-signal transition-colors ${view === "process" ? "text-signal" : ""}`}
            >
              Process
            </button>
            <button
              onClick={() => navigateTo("successStories")}
              className={`hover:text-signal transition-colors ${view === "successStories" ? "text-signal" : ""}`}
            >
              Success Stories
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className={`hover:text-signal transition-colors ${view === "contact" ? "text-signal" : ""}`}
            >
              Contact
            </button>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="!py-3 !px-6 !text-xs"
              onClick={() => setIsLoginOpen(true)}
            >
              Client Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-oxford hover:text-signal p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-bone border-b border-oxford/10 px-6 py-8 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest animate-slideDown shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
            <button
              onClick={() => navigateTo("home")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("about")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Philosophy
            </button>
            <button
              onClick={() => navigateTo("services")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Services
            </button>
            <button
              onClick={() => navigateTo("process")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Process
            </button>
            <button
              onClick={() => navigateTo("successStories")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Success Stories
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Contact
            </button>

            <div className="pt-4 flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                Client Log In
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {view === "home" && (
          <HomePage 
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)} 
            onOpenApplication={() => setIsApplicationOpen(true)}
          />
        )}
        {view === "about" && (
          <AboutPage onOpenApplication={() => setIsApplicationOpen(true)} />
        )}
        {view === "services" && <ServicesPage onOpenApplication={() => setIsApplicationOpen(true)} />}
        {view === "process" && (
          <ProcessPage onOpenApplication={() => setIsApplicationOpen(true)} />
        )}
        {view === "successStories" && (
          <SuccessStoriesPage onOpenApplication={() => setIsApplicationOpen(true)} />
        )}
        {view === "contact" && (
          <ContactPage 
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)} 
            onOpenApplication={() => setIsApplicationOpen(true)} 
          />
        )}
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="py-12 px-6 bg-bone border-t border-oxford/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <BrandLogo />
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-oxford/40 max-w-md ml-auto leading-relaxed">
              Human-Led, AI-Enabled. Data is confidential and never used to
              train public models. Strategic judgment is always human-reviewed.
            </p>
            <p className="font-mono text-[10px] text-oxford/40 mt-4">
              © {new Date().getFullYear()} Rep. Career Management.
            </p>
          </div>
        </div>
      </footer>

      {/* Diagnostic Modal Component */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onOpenApplication={() => setIsApplicationOpen(true)}
      />

      {/* Application Modal Component */}
      <ApplicationModal
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
      />

      {/* Login Modal Component */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
