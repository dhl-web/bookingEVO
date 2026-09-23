import { useState } from 'react';
import { PhoneCall, MessageCircle, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { EvoLogo } from './EvoLogo';

interface NavbarProps {
  onScrollToForm: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export function Navbar({ onScrollToForm, onScrollToSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  const navLinks = [
    { label: 'Tại Sao 1-1', id: 'tai-sao-1-1' },
    { label: 'Về Ms My', id: 've-ms-my' },
    { label: 'Lộ Trình', id: 'lo-trinh' },
    { label: 'Cảm Nhận', id: 'cam-nhan' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <EvoLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="hover:text-[#0A4D8C] transition cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Direct Zalo Contact */}
          <a
            href="https://evoenglish.vn/zalo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#0068FF] bg-blue-50 hover:bg-blue-100 transition border border-blue-200 shadow-xs"
            title="Liên hệ Zalo tư vấn viên"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Zalo Hỗ Trợ</span>
          </a>

          {/* Call-to-action Button */}
          <button
            type="button"
            onClick={onScrollToForm}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F37021] to-[#EA580C] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition active:scale-98 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Đặt Lịch Tư Vấn</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0A4D8C] transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
            <a
              href="https://evoenglish.vn/zalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#0068FF] bg-blue-50 border border-blue-200"
            >
              <span>Zalo Hỗ Trợ</span>
            </a>
            <a
              href="https://evoenglish.vn/messenger/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200"
            >
              <span>Messenger</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
