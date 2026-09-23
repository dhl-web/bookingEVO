import { Users, Award, Target, ThumbsUp } from 'lucide-react';

export function SocialProofBar() {
  const stats = [
    {
      icon: Users,
      value: '1,200+',
      label: 'Học viên đồng hành',
      description: 'Từ người mất gốc đến người đi làm',
      color: 'text-[#0A4D8C]',
      bg: 'bg-blue-50',
    },
    {
      icon: Award,
      value: '8+ Năm',
      label: 'Kinh nghiệm thực chiến',
      description: 'Phương pháp huấn luyện độc quyền',
      color: 'text-[#F37021]',
      bg: 'bg-orange-50',
    },
    {
      icon: Target,
      value: '100%',
      label: 'Cá nhân hóa lộ trình',
      description: 'May đo theo mục tiêu & phản xạ riêng',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: ThumbsUp,
      value: '98%',
      label: 'Hài lòng & Tự tin nói',
      description: 'Khắc phục triệt để nỗi sợ giao tiếp',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section className="bg-white py-8 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-2">
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 hidden sm:block">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
