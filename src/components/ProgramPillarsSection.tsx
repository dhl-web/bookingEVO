import { MessageSquare, Mic, BookOpen, BrainCircuit, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ProgramPillarsSectionProps {
  onScrollToForm: () => void;
}

export function ProgramPillarsSection({ onScrollToForm }: ProgramPillarsSectionProps) {
  const pillars = [
    {
      icon: MessageSquare,
      title: 'Phản Xạ Giao Tiếp 1-1 Thực Chiến',
      description: 'Luyện tập đàm thoại trực tiếp các chủ đề công việc, đời sống và phỏng vấn. Bỏ thói quen dịch thầm tiếng Việt sang tiếng Anh trong đầu.',
      tag: 'Giao tiếp & Nghe nói',
      color: 'text-[#0A4D8C]',
      bg: 'bg-blue-50',
      borderColor: 'hover:border-blue-300',
    },
    {
      icon: Mic,
      title: 'Chuẩn Hóa Phát Âm & Ngữ Điệu IPA',
      description: 'Chỉnh sửa khẩu hình, âm đuôi (ending sounds), trọng âm và ngữ điệu tự nhiên. Giúp người đối diện nghe rõ và hiểu bạn ngay lập tức.',
      tag: 'Phát âm chuẩn quốc tế',
      color: 'text-[#F37021]',
      bg: 'bg-orange-50',
      borderColor: 'hover:border-orange-300',
    },
    {
      icon: BookOpen,
      title: 'Từ Vựng Thực Tế & Ngữ Pháp Ứng Dụng',
      description: 'Không học vẹt danh sách từ vựng khô khan. Học từ vựng theo cụm (collocations) và cấu trúc câu thông dụng để nói là trúng.',
      tag: 'Từ vựng & Cấu trúc',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      borderColor: 'hover:border-emerald-300',
    },
    {
      icon: BrainCircuit,
      title: 'Xóa Bỏ Rào Cản Tâm Lý Sợ Sai',
      description: 'Huấn luyện viên tạo môi trường an toàn, khích lệ và truyền động lực. Xây dựng sự tự tin bền vững khi giao tiếp với người nước ngoài.',
      tag: 'Tâm lý & Tự tin',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Khảo Sát Trình Độ 1-1',
      desc: 'Huấn luyện viên trực tiếp test phản xạ, phân tích lỗi sai phát âm và xác định chính xác xuất phát điểm của bạn.',
    },
    {
      step: '02',
      title: 'Thiết Kế Lộ Trình Riêng',
      desc: 'Xây dựng giáo án cá nhân hóa theo mục tiêu (công việc, phỏng vấn, du học) và quỹ thời gian rảnh của bạn.',
    },
    {
      step: '03',
      title: 'Huấn Luyện & Cam Kết Tiến Bộ',
      desc: 'Kèm cặp sát sao từng buổi, giao tiếp phản xạ liên tục, báo cáo tiến độ định kỳ và cam kết kết quả đầu ra.',
    },
  ];

  return (
    <section id="lo-trinh" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F37021]" />
            Phương Pháp Đào Tạo Độc Quyền
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            4 Trọng Tâm Huấn Luyện Giúp Bạn Làm Chủ Tiếng Anh
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Mỗi buổi học là một bước chuyển biến rõ rệt. Tập trung đúng vào những gì bạn còn thiếu để đạt hiệu quả nhanh nhất.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm transition duration-300 hover:shadow-md ${pillar.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Step Journey Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
              Hành Trình Bứt Phá
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Lộ Trình 3 Bước Đồng Hành Cùng Huấn Luyện Viên
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A4D8C] to-[#0284C7] text-white flex items-center justify-center font-black text-xl shadow-md mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={onScrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F37021] to-[#EA580C] hover:opacity-95 text-white font-bold text-sm shadow-md transition active:scale-98 cursor-pointer"
            >
              <span>Đăng Ký Kiểm Tra Trình Độ 1-1 Miễn Phí</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
