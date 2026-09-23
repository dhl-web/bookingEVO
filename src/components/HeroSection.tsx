import { useState, useRef, useEffect, type ChangeEvent, type DragEvent } from 'react';
import { Award, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Upload, Camera, RefreshCw, Star, Users, Check } from 'lucide-react';

interface HeroSectionProps {
  onScrollToForm: () => void;
  onScrollToFounder: () => void;
}

const AVATAR_PATHS = [
  '/mi na.jpg',
  '/mina.jpg',
  'mi na.jpg',
  '/assets/mi na.jpg',
];

export function HeroSection({ onScrollToForm, onScrollToFounder }: HeroSectionProps) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    return localStorage.getItem('evo_avatar_custom') || null;
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageLoaded = (result: string) => {
    setCustomAvatar(result);
    try {
      localStorage.setItem('evo_avatar_custom', result);
    } catch {
      // ignore
    }
    setImgFailed(false);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) handleImageLoaded(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) handleImageLoaded(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Clipboard paste support (Ctrl+V)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const res = event.target?.result as string;
              if (res) handleImageLoaded(res);
            };
            reader.readAsDataURL(blob);
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const handleImgError = () => {
    if (candidateIndex < AVATAR_PATHS.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 overflow-hidden border-b border-slate-200/80">
      {/* Subtle background ambient circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top exclusive pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 shadow-xs text-xs sm:text-sm font-bold text-[#F37021]">
              <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Chương Trình Đặc Quyền 1 Kèm 1 &bull; EVO English</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Đột Phá Giao Tiếp Tiếng Anh Cùng{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A4D8C] to-[#0284C7]">
                Huấn Luyện Viên 1-1
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Không còn nỗi sợ mất gốc hay e ngại nói trước đám đông. Đồng hành trực tiếp cùng{' '}
              <strong className="text-slate-900 font-semibold">Founder Tiểu My Na (Ms My)</strong> &mdash; 8+ năm kinh nghiệm giúp bạn phản xạ tự nhiên, chuẩn hóa phát âm và tự tin làm chủ tiếng Anh theo cách tinh gọn nhất.
            </p>

            {/* Value checklist bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>100% Thời lượng tương tác trực tiếp</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Sửa phát âm & phản xạ ngay tại chỗ</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Giáo trình may đo theo mục tiêu riêng</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Lịch học linh động cho người bận rộn</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#F37021] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition active:scale-98 cursor-pointer"
              >
                <span>Nhận Lộ Trình Tư Vấn 1-1 Miễn Phí</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onScrollToFounder}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition cursor-pointer"
              >
                <span>Về Ms My (Tiểu My Na)</span>
              </button>
            </div>

            {/* Micro Social Proof Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-slate-800 font-bold">4.9/5</span>
              </div>
              <span className="text-slate-300">&bull;</span>
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Users className="w-4 h-4 text-[#0A4D8C]" />
                <span>1,200+ học viên đã bứt phá</span>
              </div>
              <span className="text-slate-300">&bull;</span>
              <div className="flex items-center gap-1 text-emerald-600 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Không mất phí tư vấn ban đầu</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column (Founder Photo & Credibility Card) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0A4D8C]/20 via-orange-400/25 to-[#F37021]/20 rounded-3xl blur-lg -z-10" />

              {/* Photo Box */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`overflow-hidden rounded-2xl border-2 shadow-2xl bg-slate-900 relative transition-all ${
                  isDragging ? 'border-orange-500 ring-4 ring-orange-200 scale-102' : 'border-white'
                }`}
              >
                {customAvatar ? (
                  <div className="relative">
                    <img
                      src={customAvatar}
                      alt="Ms My (Tiểu My Na) - Founder of EVO English"
                      className="w-full h-auto object-cover object-center transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5 text-orange-500" />
                        Đổi ảnh
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCustomAvatar(null);
                          localStorage.removeItem('evo_avatar_custom');
                          setImgFailed(false);
                          setCandidateIndex(0);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-rose-600 text-xs font-semibold shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Mặc định
                      </button>
                    </div>
                  </div>
                ) : !imgFailed ? (
                  <div className="relative">
                    <img
                      src={AVATAR_PATHS[candidateIndex]}
                      alt="Ms My (Tiểu My Na) - Founder of EVO English"
                      className="w-full h-auto object-cover object-center transition duration-500 hover:scale-102"
                      referrerPolicy="no-referrer"
                      onError={handleImgError}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5 text-orange-500" />
                        Tải ảnh lên
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Elegant Red Áo Dài Fallback Card */
                  <div className="relative aspect-[3/4] bg-gradient-to-b from-rose-50 via-slate-50 to-orange-50 flex flex-col items-center justify-center p-6 sm:p-8 text-center border-2 border-dashed border-orange-200">
                    <div className="relative mb-3">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 via-orange-500 to-[#0A4D8C] p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-slate-800">
                          <span className="text-2xl font-black text-rose-600">MY</span>
                          <span className="text-[10px] font-bold text-slate-500 tracking-wider">EVO</span>
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-bold uppercase shadow-xs">
                        Áo Dài Đỏ
                      </span>
                    </div>

                    <div className="text-xl font-bold text-slate-900">TIỂU MY NA (MS MY)</div>
                    <div className="text-xs font-bold text-[#F37021] tracking-wide uppercase mt-0.5">
                      Founder of EVO English
                    </div>
                    <div className="text-xs text-slate-500 mt-1">8+ Năm Giảng Dạy & Huấn Luyện 1-1</div>

                    <p className="text-xs text-slate-600 italic mt-3 max-w-xs leading-relaxed">
                      &ldquo;Biến chính bản thân bạn trở nên phi thường từ xuất phát điểm hiện tại.&rdquo;
                    </p>

                    <div className="mt-5 flex flex-col items-center gap-2 w-full max-w-xs">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A4D8C] to-[#F37021] hover:opacity-95 text-white text-xs font-bold shadow-md cursor-pointer transition active:scale-98"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        Chọn ảnh &ldquo;mi na.jpg&rdquo;
                      </button>
                      <span className="text-[11px] text-slate-400">
                        Hoặc kéo thả file ảnh trực tiếp vào khung này
                      </span>
                    </div>
                  </div>
                )}

                {/* Subtle upload badge on top right */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 shadow-md opacity-80 hover:opacity-100 transition cursor-pointer"
                  title="Thay ảnh avatar Ms My (mi na.jpg)"
                >
                  <Camera className="w-4 h-4 text-[#0A4D8C]" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>

              {/* Floating Verified Experience Badge Overlay */}
              <div className="absolute -bottom-5 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-200/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Founder & Master Coach</div>
                    <div className="text-sm font-extrabold text-slate-900">Tiểu My Na (Ms My)</div>
                  </div>
                </div>
                <div className="text-right pl-2 border-l border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Kinh nghiệm</div>
                  <div className="text-sm font-black text-[#0A4D8C]">8+ Năm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
