import { MessageCircle, Calendar, ArrowUp } from 'lucide-react';

interface StickyFloatingActionsProps {
  onScrollToForm: () => void;
}

export function StickyFloatingActions({ onScrollToForm }: StickyFloatingActionsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Zalo quick floating button */}
      <a
        href="https://evoenglish.vn/zalo/"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white hover:bg-blue-50 text-[#0068FF] font-bold text-xs shadow-xl border border-blue-200 transition hover:scale-105 active:scale-95 group"
        title="Chat trực tiếp qua Zalo"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="hidden sm:inline">Zalo Hỗ Trợ</span>
        <span className="sm:hidden font-black">Zalo</span>
      </a>

      {/* Messenger quick floating button */}
      <a
        href="https://evoenglish.vn/messenger/"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white hover:bg-purple-50 text-purple-700 font-bold text-xs shadow-xl border border-purple-200 transition hover:scale-105 active:scale-95 group"
        title="Nhắn tin qua Facebook Messenger"
      >
        <MessageCircle className="w-4 h-4 text-purple-600" />
        <span className="hidden sm:inline">Messenger</span>
      </a>

      {/* Primary Floating CTA */}
      <button
        type="button"
        onClick={onScrollToForm}
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#F37021] to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition cursor-pointer"
        title="Cuộn tới form đăng ký tư vấn"
      >
        <Calendar className="w-4 h-4" />
        <span>Đặt Lịch Ngay</span>
      </button>

      {/* Back to top small button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="pointer-events-auto p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-md transition hover:scale-105 active:scale-95 cursor-pointer text-xs"
        title="Về đầu trang"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
