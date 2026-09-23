import { XCircle, CheckCircle, ArrowRight, Zap, Target, HeartHandshake } from 'lucide-react';

interface ComparisonSectionProps {
  onScrollToForm: () => void;
}

export function ComparisonSection({ onScrollToForm }: ComparisonSectionProps) {
  return (
    <section id="tai-sao-1-1" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#F37021]" />
            Sự Khác Biệt Mang Tính Bước Ngoặt
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tại Sao Bạn Học Tiếng Anh Nhiều Năm Nhưng Vẫn{' '}
            <span className="text-rose-600 underline decoration-rose-300 underline-offset-4">
              Chưa Thể Tự Tin Nói?
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Vấn đề không nằm ở khả năng hay độ tuổi của bạn, mà nằm ở <strong>mô hình đào tạo</strong> bạn từng tiếp cận. Hãy xem sự khác biệt giữa lớp học truyền thống và mô hình Huấn Luyện Viên 1-1 tại EVO English:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Classes Card (Pain Points) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Mô hình cũ
                  </span>
                  <h3 className="text-xl font-bold text-slate-700 mt-0.5">
                    Lớp Học Truyền Thống (15 &ndash; 30 Người)
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6 text-rose-400" />
                </div>
              </div>

              <ul className="space-y-4 pt-6 text-slate-600 text-sm">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Thầy giảng &ndash; trò nghe thụ động:</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Mỗi buổi học bạn chỉ có 2 &ndash; 3 phút để mở miệng nói tiếng Anh.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Phát âm sai không ai sửa kịp thời:</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Giáo viên không thể nghe rõ và chỉnh sửa khẩu hình từng cá nhân trong lớp đông.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Tâm lý e ngại, sợ bạn bè phán xét:</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Sợ nói sai nên chọn cách im lặng, lâu dần mất hẳn tự tin khi giao tiếp.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Lịch học cố định, dễ bị hổng kiến thức:</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Chỉ cần bận công việc nghỉ 1 &ndash; 2 buổi là không theo kịp tiến độ chung.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl text-center">
              <span className="text-xs font-semibold text-slate-500">
                Kết quả: Tốn thời gian, học nhiều khóa nhưng vẫn sợ nói
              </span>
            </div>
          </div>

          {/* 1-on-1 EVO English Coach Card (The Solution) */}
          <div className="bg-gradient-to-b from-blue-50/70 via-white to-orange-50/40 rounded-3xl p-6 sm:p-8 border-2 border-[#0A4D8C]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F37021] to-[#EA580C] text-white px-4 py-1 rounded-bl-xl text-xs font-bold shadow-xs">
              Khuyên Dùng Cho Người Đi Làm & Mất Gốc
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-blue-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A4D8C]">
                    Mô hình đột phá
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5 flex items-center gap-2">
                    Huấn Luyện Viên Tiếng Anh 1-1 EVO
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>

              <ul className="space-y-4 pt-6 text-slate-700 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">100% Thời lượng tập trung vào phản xạ của bạn:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Bạn được liên tục đặt câu hỏi, đàm thoại và thực hành nói suốt toàn bộ buổi học.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Sửa khẩu hình & nối âm từng từ ngay tức khắc:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">HLV nghe rõ từng âm đuôi, chỉnh sai ngay tại chỗ giúp bạn không bị lỗi lặp lại.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Môi trường 1-1 an toàn, hoàn toàn không phán xét:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Cởi mở nói sai để được sửa đúng, xây dựng sự tự tin tự nhiên từ những câu đơn giản nhất.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Linh hoạt theo quỹ thời gian & mục tiêu thực tế:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Chủ động sắp xếp theo lịch rảnh; nội dung gắn liền với công việc hoặc định hướng riêng.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-orange-200/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl bg-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#0A4D8C] text-center sm:text-left">
                Tiến bộ nhanh gấp 3 lần so với lớp học đông thông thường
              </span>
              <button
                type="button"
                onClick={onScrollToForm}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A4D8C] hover:bg-[#083a6a] text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <span>Nhận Tư Vấn 1-1</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
