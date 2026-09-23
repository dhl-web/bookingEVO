import { Quote, ShieldCheck, CheckCircle2, Award, Sparkles, HeartHandshake } from 'lucide-react';

interface FounderLetterSectionProps {
  onScrollToForm: () => void;
}

export function FounderLetterSection({ onScrollToForm }: FounderLetterSectionProps) {
  return (
    <section id="ve-ms-my" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Editorial Container */}
        <div className="relative">
          {/* Header Pill */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Tâm Thư Từ Người Sáng Lập EVO English
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              &ldquo;Đây Không Chỉ Là Một Khóa Học &mdash;{' '}
              <span className="text-[#0A4D8C]">Đây Là Chương Trình</span>{' '}
              <span className="text-[#F37021]">Đồng Hành Cùng Bạn</span>&rdquo;
            </h2>
          </div>

          {/* Olympic Coach Philosophy Callout Box */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50/80 border border-slate-200/80 shadow-xs relative">
            <Quote className="w-10 h-10 text-orange-400/40 absolute top-4 left-4 -z-0 rotate-180" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3">
                &ldquo;Các vận động viên Olympic đều có một huấn luyện viên.
                <br className="hidden sm:inline" /> Các CEO thông thái đều có một huấn luyện viên.&rdquo;
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Hãy tưởng tượng, bạn sẽ thay đổi và bứt phá thế nào khi sở hữu riêng một <strong>&ldquo;huấn luyện viên&rdquo;</strong> tận tâm đồng hành cùng bạn trên hành trình học tiếng Anh?
              </p>
            </div>
          </div>

          {/* Letter Body */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <div className="border-l-4 border-[#F37021] pl-4 sm:pl-5">
              <p className="font-bold text-slate-900 text-lg sm:text-xl">
                Chào mừng bạn đến với chương trình &ldquo;Huấn Luyện Viên Tiếng Anh 1-1&rdquo;.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Tại đây, chúng ta không chỉ học tiếng Anh một cách thông thường, mà còn tạo ra một sự thay đổi thực sự trong cuộc sống của bạn.
              </p>
            </div>

            <p>
              Mình là <span className="text-[#0A4D8C] font-bold">My (Tiểu My Na)</span>, người sáng lập trung tâm tiếng Anh <span className="text-[#F37021] font-bold">EVO English</span>.
            </p>

            <p>
              Với kinh nghiệm <strong>8 năm giảng dạy</strong> và đồng hành cùng nhiều thế hệ học viên, My đã đúc kết những tư duy, phương pháp và chiến lược hiệu quả nhất để giúp mọi người xây dựng nền tảng vững chắc và sử dụng tiếng Anh một cách tự tin, thông qua một chương trình đơn giản, tinh gọn và phù hợp với tất cả mọi người.
            </p>

            {/* Accent Card */}
            <div className="bg-white border border-blue-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0A4D8C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    Khoá Huấn Luyện Mạnh Mẽ Vượt Qua Giới Hạn Bản Thân
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Chương trình này không chỉ là một khoá học, mà nó thực sự là một khóa huấn luyện mạnh mẽ. Giúp bạn vượt qua giới hạn của bản thân, vượt qua những thách thức và biến giấc mơ <em>&ldquo;chinh phục tiếng Anh&rdquo;</em> thành hiện thực.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Một hành trình học tập đầy ý nghĩa đang chờ đợi bạn. Biến chính bản thân bạn trở nên phi thường từ xuất phát điểm hiện tại. Hãy để chương trình này trở thành người bạn đồng hành đáng tin cậy trên con đường tiến tới thành công trong việc học tiếng Anh và cuộc sống của bạn!
            </p>

            <div className="pt-2">
              <p className="font-bold text-[#0A4D8C] text-lg sm:text-xl">
                Sẵn sàng để khám phá, học hỏi và tiến xa hơn cùng chương trình &ldquo;Huấn Luyện Bạn Đến Thành Công Với Tiếng Anh&rdquo;.
              </p>
            </div>

            {/* Signature & Confirmation Area */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-wide font-serif">
                  TIỂU MY NA
                </div>
                <div className="text-xs sm:text-sm font-bold text-orange-600 tracking-wider uppercase mt-1">
                  Founder of EVO English &bull; 8+ Năm Kinh Nghiệm
                </div>
              </div>

              <button
                type="button"
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0A4D8C] to-[#0284C7] hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition active:scale-98 cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Đăng Ký Đồng Hành Cùng Ms My</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
